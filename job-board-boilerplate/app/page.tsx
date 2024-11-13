import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Briefcase, Building2, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section - Mobile First */}
      <section className="container px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Connect with
            <span className="text-primary"> DJs & Venues</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The ultimate marketplace for DJs seeking gigs and venues looking for talent. From residencies to one-off events.
          </p>

          {/* Enhanced Search Form */}
          <Card className="p-4 mt-8 shadow-lg max-w-3xl mx-auto border bg-card">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="DJ name or music genre" 
                  className="pl-10"
                />
              </div>
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="City or region" 
                  className="pl-10"
                />
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Search
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container px-4 py-16 ">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div 
              key={category.name}
              className="flex items-center gap-4 p-6 hover:shadow-lg transition-shadow cursor-pointer bg-background border rounded-lg"
            >
              <div className="p-2 bg-primary/10 rounded-lg dark:bg-primary/20">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} jobs</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies */}
      <section className="container px-4 py-16">
        <h2 className="text-2xl font-semibold text-center mb-8 text-foreground">
          Featured Companies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {companies.map((company) => (
            <Card 
              key={company.name}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer border bg-card"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-2 bg-muted rounded-full">
                  <Building2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {company.jobCount} open positions
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}

// Updated categories for both DJs and venues
const categories = [
  { name: "Club DJs", count: 234 },
  { name: "Event Venues", count: 167 },
  { name: "Mobile DJs", count: 290 },
  { name: "Nightclubs", count: 432 },
  { name: "Festival Artists", count: 165 },
  { name: "Wedding Venues", count: 243 },
  { name: "Radio DJs", count: 121 },
  { name: "Lounge Bars", count: 134 },
];

// Updated featured companies/venues
const companies = [
  { name: "Hakkasan Group", jobCount: 15 },
  { name: "Live Nation Clubs", jobCount: 8 },
  { name: "Marquee Nightclubs", jobCount: 12 },
  { name: "Tao Group", jobCount: 6 },
];
