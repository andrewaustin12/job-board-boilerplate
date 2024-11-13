"use client";

import { SignInMethodDivider } from "@/components/SignInMethodDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAuthActions } from "@convex-dev/auth/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";

// Add these imports
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function SignInPage() {
  const [step, setStep] = useState<"signIn" | "linkSent">("signIn");
  // Add loading state
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex min-h-screen w-full container my-auto mx-auto">
      <div className="max-w-[384px] mx-auto flex flex-col my-auto gap-4 pb-8">
        {step === "signIn" ? (
          <>
            <h2 className="font-semibold text-2xl tracking-tight">
              Sign in or create an account
            </h2>
            <SignInWithGitHub isLoading={isLoading} setIsLoading={setIsLoading} />
            <SignInMethodDivider />
            <SignInWithMagicLink 
              handleLinkSent={() => setStep("linkSent")} 
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </>
        ) : (
          <>
            <h2 className="font-semibold text-2xl tracking-tight">
              Check your email
            </h2>
            <p>A sign-in link has been sent to your email address.</p>
            <Button
              className="p-0 self-start"
              variant="link"
              onClick={() => setStep("signIn")}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

function SignInWithGitHub({ 
  isLoading, 
  setIsLoading 
}: { 
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}) {
  const { signIn } = useAuthActions();
  const router = useRouter();
  const { toast } = useToast();

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github", { redirectTo: "/profiles/select" });
      router.push('/profiles/select');
    } catch (error) {
      console.error(error);
      toast({
        title: "Sign-in failed",
        description: "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className="flex-1"
      variant="outline"
      type="button"
      onClick={handleSignIn}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <GitHubLogoIcon className="mr-2 h-4 w-4" />
      )}
      GitHub
    </Button>
  );
}

function SignInWithMagicLink({
  handleLinkSent,
  isLoading,
  setIsLoading
}: {
  handleLinkSent: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}) {
  const { signIn } = useAuthActions();
  const { toast } = useToast();

  return (
    <form
      className="flex flex-col"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsLoading(true);
        const formData = new FormData(event.currentTarget);
        formData.set("redirectTo", "/profiles/select");
        
        try {
          await signIn("resend", formData);
          handleLinkSent();
        } catch (error) {
          console.error(error);
          toast({
            title: "Could not send sign-in link",
            variant: "destructive",
          });
        } finally {
          setIsLoading(false);
        }
      }}
    >
      <label htmlFor="email">Email</label>
      <Input 
        name="email" 
        id="email" 
        className="mb-4" 
        autoComplete="email"
        disabled={isLoading}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send sign-in link'
        )}
      </Button>
      <Toaster />
    </form>
  );
} 