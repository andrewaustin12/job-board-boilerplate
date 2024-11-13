import Link from 'next/link';

export default function SelectProfileType() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Select Profile Type</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* DJ Profile Card */}
        <Link href="/profiles/dj/create" 
          className="block p-6 border rounded-lg hover:border-blue-500 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">DJ Profile</h2>
            <p className="text-gray-600">
              Create a DJ profile to showcase your skills, experience, and connect with venues.
            </p>
            <span className="text-blue-600 inline-block">Get Started →</span>
          </div>
        </Link>

        {/* Venue Profile Card */}
        <Link href="/profiles/venue/create"
          className="block p-6 border rounded-lg hover:border-blue-500 transition-colors">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Venue Profile</h2>
            <p className="text-gray-600">
              Create a venue profile to list your establishment and find talented DJs.
            </p>
            <span className="text-blue-600 inline-block">Get Started →</span>
          </div>
        </Link>
      </div>
    </div>
  );
} 