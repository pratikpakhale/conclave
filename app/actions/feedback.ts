// actions/feedback.ts
/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../../sanity/env";

const client = createClient({
  apiVersion,
  dataset,
  projectId,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export async function submitFeedback(formData: any) {
  try {
    const feedback = await client.create({
      _type: "feedback",
      company: formData.company,
      overallExperience: formData.overallExperience,
      expectations: formData.expectations,
      collaboration: formData.collaboration,
      amenities: formData.amenities,
      interaction: formData.interaction,
      organization: formData.organization,
      futureEngagement: formData.futureEngagement,
      appreciatedAspects: formData.appreciatedAspects,
      positiveImpressions: formData.positiveImpressions,
      innovationApproach: formData.innovationApproach,
      beneficialPrograms: formData.beneficialPrograms,
      recommendation: formData.recommendation,
      submittedAt: new Date().toISOString(),
    });

    return { success: true, feedback };
  } catch (error: any) {
    console.error("Error submitting feedback:", error);
    return { success: false, error: error.message };
  }
}

export async function getFeedbacks() {
  try {
    const feedbacks = await client.fetch(`*[_type == "feedback"]{
      _id,
      overallExperience,
      expectations,
      collaboration,
      amenities,
      interaction,
      organization,
      futureEngagement,
      appreciatedAspects,
      positiveImpressions,
      innovationApproach,
      beneficialPrograms,
      recommendation,
      submittedAt
    }`);

    return { success: true, feedbacks };
  } catch (error: any) {
    console.error("Error fetching feedbacks:", error);
    return { success: false, error: error.message };
  }
}
