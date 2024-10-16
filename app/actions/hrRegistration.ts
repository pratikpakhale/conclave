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

export async function createHrRegistration(formData: any) {
  try {
    let photoAsset;
    if (formData.get("photo")?.size > 0) {
      photoAsset = await client.assets.upload("image", formData.get("photo"));
    }

    const registration = await client.create({
      _type: "hrRegistration",
      name: formData.get("name"),
      designation: formData.get("designation"),
      company: formData.get("company"),
      sector: formData.get("sector"),
      email: formData.get("email"),
      contactNo: formData.get("contactNo"),
      photo: photoAsset
        ? {
            _type: "image",
            asset: { _type: "reference", _ref: photoAsset._id },
          }
        : undefined,
      consent: formData.get("consent") === "on",
      approved: false,
    });

    return { success: true, registration };
  } catch (error: any) {
    console.error("Error in registration:", error);
    return { success: false, error: error.message };
  }
}

export async function getHrRegistrations() {
  try {
    const testimonials =
      await client.fetch(`*[_type == "hrRegistration" && approved == true && consent == true]{
          _id,
          name,
          designation,
          company,
          sector,
          email,
          contactNo,
          "photoUrl": photo.asset->url,
        }`);

    return { success: true, testimonials };
  } catch (error: any) {
    console.error("Error fetching registrations:", error);
    return { success: false, error: error.message };
  }
}
