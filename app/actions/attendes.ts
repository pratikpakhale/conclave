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

export async function getAttendes() {
  try {
    const attendes = await client.fetch(`*[_type == "attendees"]{
      _id,
      type,
      name,
      designation,
      company,
      linkedIn,
      studentName1,
      studentName2,
      studentContact1, 
      studentContact2,
      studentLinkedIn1,
      studentLinkedIn2,
      "photoUrl": photo.asset->url
    }`);

    return { success: true, attendes };
  } catch (error: any) {
    console.error("Error fetching attendes:", error);
    return { success: false, error: error.message };
  }
}

export async function getCompanies() {
  try {
    const companies = await client.fetch(`*[_type == "attendees"]{
      company,
    }`);

    return { success: true, companies };
  } catch (error: any) {
    console.error("Error fetching attendes:", error);
    return { success: false, error: error.message };
  }
}
