"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { UserMenu } from "@/components/UserMenu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useConvexAuth } from "convex/react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useAuthActions();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">JobBoard</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/jobs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Find Jobs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Companies</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <Link href="/companies" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Browse Companies</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find your next workplace among top companies
                      </p>
                    </Link>
                    <Link href="/companies/top" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Top Employers</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Discover the most sought-after employers
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/salary-guide" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Salary Guide
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" onClick={() => signOut()}>Sign Out</Button>
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Button>Post a Job</Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <Button variant="outline" onClick={() => signOut()}>Sign Out</Button>
          <Link href="/signin">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Button>Post a Job</Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col space-y-4">
                  <Link 
                    href="/jobs" 
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Find Jobs
                  </Link>
                  <Link 
                    href="/companies" 
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Companies
                  </Link>
                  <Link 
                    href="/salary-guide" 
                    className="text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Salary Guide
                  </Link>
                  <hr className="my-4" />
                  <Link href="/signin">
                    <Button variant="outline" className="w-full">Sign In</Button>
                  </Link>
                  <Button className="w-full">Post a Job</Button>
                </nav>
              </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 