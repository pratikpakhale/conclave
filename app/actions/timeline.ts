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

export async function getTimeline() {
  try {
    const timeline = await client.fetch(`*[_type == "timeline"]{
        _id,
        section
      }`);

    return { success: true, timeline };
  } catch (error: any) {
    console.error("Error fetching testimonials:", error);
    return { success: false, error: error.message };
  }
}
