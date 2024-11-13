import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
export default defineSchema({
  ...authTables,
  messages: defineTable({
    userId: v.id("users"),
    body: v.string(),
  }),
  venueProfiles: defineTable({
    userId: v.string(),
    venueName: v.string(),
    location: v.object({
      address: v.string(),
      city: v.string(),
      state: v.string(),
      country: v.string(),
      postalCode: v.string(),
    }),
    venueType: v.union(v.literal("club"), v.literal("bar"), v.literal("festival"), v.literal("other")),
    contactInfo: v.object({
      email: v.string(),
      phone: v.optional(v.string()),
      website: v.optional(v.string()),
    }),
    description: v.string(),
    capacity: v.optional(v.number()),
    pastGigs: v.array(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  djProfiles: defineTable({
    userId: v.string(),
    djName: v.string(),
    location: v.object({
      city: v.string(),
      state: v.string(),
      country: v.string(),
    }),
    genres: v.array(v.string()),
    experienceLevel: v.union(
      v.literal("beginner"),
      v.literal("intermediate"),
      v.literal("professional")
    ),
    availability: v.object({
      weekdays: v.optional(v.boolean()),
      weekends: v.optional(v.boolean()),
      customSchedule: v.optional(v.string()),
    }),
    socialLinks: v.object({
      soundcloud: v.optional(v.string()),
      instagram: v.optional(v.string()),
      facebook: v.optional(v.string()),
      website: v.optional(v.string()),
    }),
    bio: v.string(),
    yearsOfExperience: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});


  
