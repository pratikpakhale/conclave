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

export async function getMembers() {
  try {
    const member = await client.fetch(`*[_type == "committee"]{
        _id,
        studentName,
        linkedIn,
        email,
        committeeName,
        position,
        "photoUrl": photo.asset->url,
      }`);

    return { success: true, member };
  } catch (error: any) {
    console.error("Error fetching members:", error);
    return { success: false, error: error.message };
  }
}
