import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createVenueProfile = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject;
    
    return ctx.db.insert("venueProfiles", {
      ...args,
      userId,
      pastGigs: [],
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
  },
});

export const createDJProfile = mutation({
  args: {
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
    bio: v.string(),
    yearsOfExperience: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized");
    }

    const userId = identity.subject;
    
    return ctx.db.insert("djProfiles", {
      ...args,
      userId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      availability: {
        weekdays: false,
        weekends: false,
        customSchedule: "",
      },
      socialLinks: {
        instagram: "",
        facebook: "",
      },
    });
  },
});