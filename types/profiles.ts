export type VenueProfile = {
  id: string;
  userId: string;
  venueName: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  venueType: 'club' | 'bar' | 'festival' | 'other';
  contactInfo: {
    email: string;
    phone?: string;
    website?: string;
  };
  description: string;
  capacity?: number;
  pastGigs: string[]; // Array of gig IDs
  createdAt: number;
  updatedAt: number;
};

export type DJProfile = {
  id: string;
  userId: string;
  djName: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  genres: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'professional';
  availability: {
    weekdays?: boolean;
    weekends?: boolean;
    customSchedule?: string;
  };
  socialLinks: {
    soundcloud?: string;
    instagram?: string;
    facebook?: string;
    website?: string;
  };
  bio: string;
  yearsOfExperience: number;
  createdAt: number;
  updatedAt: number;
}; 