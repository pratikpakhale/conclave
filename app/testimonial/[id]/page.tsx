"use client";
import { getOneTestimonial } from "@/app/actions/testimonials";
import { PageProps, Review } from "@/types/Home";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Mail,
  GraduationCap,
  BookOpen,
  Trophy,
  Quote,
  Heart,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Page({ params }: PageProps) {
  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      const response = await getOneTestimonial(params?.id);
      if (response.success && response.testimonial) {
        setReview(response.testimonial[0]);
      }
    }
    fetchTestimonials();
  }, [params?.id]);

  if (!review) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Loading testimonial...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-text-col py-8 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <Card className="max-w-4xl mt-20 mx-auto bg-white shadow-sm rounded-12px">
        <CardHeader>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Image
              src={review?.photoUrl || "https://avatar.vercel.sh/default"}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-100"
              height={80}
              width={80}
              alt={review?.name}
            />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-gray-900">
                {review?.name}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
                {review?.designation && (
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {review?.designation}
                  </span>
                )}
                {review.graduationYear && (
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-4 h-4" />
                    Batch of {review.graduationYear}
                  </span>
                )}
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Contact Information */}
          <div className="flex flex-wrap gap-4">
            {review.email && (
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4" />
                <span>{review.email}</span>
              </div>
            )}
            {/* {review.contactNo && (
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4" />
                <span>{review.contactNo}</span>
              </div>
            )} */}
            {review.course && (
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>{review.course}</span>
              </div>
            )}
          </div>

          {/* Testimonial */}
          <div className="bg-gray-100 p-6 rounded-12px">
            <div className="flex gap-2 items-start">
              <Quote className="w-6 h-6 text-gray-400 flex-shrink-0" />
              <p className="text-gray-700 leading-relaxed">
                {review.testimonial}
              </p>
            </div>
          </div>

          {/* Achievements */}
          {review.achievements && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Achievements
                </h2>
              </div>
              <p className="text-gray-700">{review.achievements}</p>
            </div>
          )}

          {/* Memorable Experience */}
          {review.memorableExperience && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-rose-500" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Memorable Experience
                </h2>
              </div>
              <p className="text-gray-700">{review.memorableExperience}</p>
            </div>
          )}

          {/* Encouragement */}
          {review.encouragement && (
            <div className="border-t pt-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-blue-500" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Words of Encouragement
                </h2>
              </div>
              <p className="text-gray-700">{review.encouragement}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
