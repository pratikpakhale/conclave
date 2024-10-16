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

export async function createContactUs(formData: any) {
  try {
    const contactUs = await client.create({
      _type: "contactUs",
      companyName: formData.get("companyName"),
      companyEmail: formData.get("companyEmail"),
      positions: formData.get("positions"),
      message: formData.get("message"),
    });
    return { success: true, contactUs };
  } catch (error: any) {
    console.error("Error creating contactUs:", error);
    return { success: false, error: error.message };
  }
}

export async function getContactUs() {
  try {
    const contacts =
      await client.fetch(`*[_type == "contactUs" && approved == true]{
      _id,
      companyName,
      companyEmail,
      positions,
      message,
    }`);
    return { success: true, contacts };
  } catch (error: any) {
    console.error("Error fetching contacts:", error);
    return { success: false, error: error.message };
  }
}
