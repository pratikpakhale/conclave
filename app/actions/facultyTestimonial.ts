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

export async function createFacultyTestimonial(formData: any) {
  try {
    let photoAsset;

    if (formData.get("photo")?.size > 0) {
      photoAsset = await client.assets.upload("image", formData.get("photo"));
    }

    console.log(formData);

    const facultyTestimonial = await client.create({
      _type: "facultyTestimonials",
      fullName: formData.get("fullName"),
      designation: formData.get("designation"),
      department: formData.get("department"),
      email: formData.get("email"),
      yearsOfExperience: parseInt(formData.get("yearsOfExperience")),
      researchAreas: formData.get("researchAreas"),
      keyAchievements: formData.get("keyAchievements"),
      publishedResearch: formData.get("publishedResearch"),
      currentProjects: formData.get("currentProjects"),
      keyPastProjects: formData.get("keyPastProjects"),
      industryCollaboration: formData.get("industryCollaboration"),
      studentFeedback: formData.get("studentFeedback"),
      memorableStudentProjects: formData.get("memorableStudentProjects"),
      adviceForStudents: formData.get("adviceForStudents"),
      goalsForStudents: formData.get("goalsForStudents"),
      photo: photoAsset
        ? {
            _type: "image",
            asset: { _type: "reference", _ref: photoAsset._id },
          }
        : undefined,
      consent: formData.get("consent") === "on",
      approved: false,
    });

    return { success: true, facultyTestimonial };
  } catch (error: any) {
    console.error("Error creating faculty testimonial:", error);
    return { success: false, error: error.message };
  }
}
