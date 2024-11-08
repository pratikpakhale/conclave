"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import HomeAnimation from "@/components/Home/HomeAnimation";
import { StarRatingProps } from "@/types/feedback";

const FeedbackForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    overallExperience: 0,
    expectations: 0,
    collaboration: 0,
    amenities: 0,
    interaction: 0,
    organization: 0,
    futureEngagement: "",
    appreciatedAspects: [],
    positiveImpressions: [],
    innovationApproach: "",
    beneficialPrograms: [],
    additionalPrograms: [],
    recommendation: "",
  });

  const totalSteps = 5; // Grouped questions into 5 steps

  const handleStarRating = (question: string, rating: number) => {
    setFormData((prev) => ({
      ...prev,
      [question]: rating,
    }));
  };

  const handleCheckboxChange = (
    field: never | string,
    value: number | string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item) => item !== value)
        : [...prev[field], value],
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const StarRating = ({ value, onChange, label }: StarRatingProps) => (
    <div className="space-y-2">
      <Label className="text-sm md:text-base">{label}</Label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={`p-1 hover:text-slate-100 transition-colors ${
              value >= rating ? "text-slate-100" : "text-gray-50"
            }`}
          >
            <Star
              className="w-6 h-6"
              fill={value >= rating ? "currentColor" : "none"}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-color1 flex flex-col items-center justify-center p-4">
      <Navbar />
      <div className="h-[50vh] relative flex w-full items-center justify-center">
        <HomeAnimation />
        <div className="text-h2 text-center absolute p-2 bg-black/50 backdrop-blur text-white font-semibold">
          {/* <p className="z-[2]">Sponsorship</p> */}
          IIIT Dharwad Conclave Feedback
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-center">
              Event Date: <span className="text-white">10th November</span>
            </h2>
            <h2 className="text-sm mt-2 text-center">
              Venue: Indian Institute of Information Technology Dharwad
            </h2>
            <h2 className="text-sm text-center">
              Chief Guest: Honourable Prahlad Joshi, Cabinet Minister
            </h2>
          </div>
          {/* <CountdownTimer /> */}
        </div>
      </div>
      <Card className="w-full my-40 max-w-4xl bg-transparent [background:linear-gradient(45deg,#151517,theme(colors.slate.800)_50%,#151517)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-12px border-none text-white">
        <CardHeader className="space-y-6">
          <CardTitle className="text-xl md:text-2xl font-bold text-center">
            Campus Experience Feedback
          </CardTitle>

          <div className="flex justify-between items-center px-2">
            <span className="text-sm">
              Step {currentStep} of {totalSteps}
            </span>
            <div className="h-2 flex-1 mx-4 bg-gray-700  rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-200 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <div className="space-y-6">
                <StarRating
                  value={formData.overallExperience}
                  onChange={(rating: number) =>
                    handleStarRating("overallExperience", rating)
                  }
                  label="1. How would you rate your overall experience with our campus and facilities?"
                />
                <StarRating
                  value={formData.expectations}
                  onChange={(rating: number) =>
                    handleStarRating("expectations", rating)
                  }
                  label="2. How well did the institution meet your expectations?"
                />
                <StarRating
                  value={formData.collaboration}
                  onChange={(rating: number) =>
                    handleStarRating("collaboration", rating)
                  }
                  label="3. How interested are you in participating in further collaborative programs?"
                />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <StarRating
                  value={formData.amenities}
                  onChange={(rating: number) =>
                    handleStarRating("amenities", rating)
                  }
                  label="4. How would you rate the amenities and infrastructure provided for HR visits?"
                />
                <StarRating
                  value={formData.interaction}
                  onChange={(rating: number) =>
                    handleStarRating("interaction", rating)
                  }
                  label="5. How would you rate the opportunities for interaction with other HR professionals?"
                />
                <StarRating
                  value={formData.organization}
                  onChange={(rating: number) =>
                    handleStarRating("organization", rating)
                  }
                  label="6. How would you rate the overall organization and planning of the HR conclave?"
                />
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>
                    7. Would you be interested in engaging with the placement
                    cell in the future?
                  </Label>
                  <RadioGroup
                    value={formData.futureEngagement}
                    onValueChange={(value) =>
                      setFormData({ ...formData, futureEngagement: value })
                    }
                    className="space-y-2"
                  >
                    {[
                      "Yes, absolutely",
                      "Yes, depending on schedule",
                      "Maybe, not certain",
                      "No, not at this time",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-3">
                  <Label>
                    8. What did you appreciate the most about our placement
                    cell&apos;s approach?
                  </Label>
                  {[
                    "Timely and clear communication",
                    "Smooth coordination of interviews and schedules",
                    "Professionalism and supportiveness",
                    "Flexibility to accommodate company requirements",
                    "Proactive in addressing queries and concerns",
                  ].map((aspect) => (
                    <div key={aspect} className="flex items-center space-x-2">
                      <Checkbox
                        id={aspect}
                        checked={formData.appreciatedAspects.includes(aspect)}
                        onCheckedChange={() =>
                          handleCheckboxChange("appreciatedAspects", aspect)
                        }
                      />
                      <Label htmlFor={aspect}>{aspect}</Label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>
                    9. What aspects of our college made a positive impression on
                    you?
                  </Label>
                  {[
                    "State-of-the-art facilities",
                    "Innovative curriculum",
                    "Active and supportive faculty",
                    "Student enthusiasm and engagement",
                    "Research and development focus",
                    "Campus infrastructure",
                    "Clean and eco-friendly environment",
                  ].map((impression) => (
                    <div
                      key={impression}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={impression}
                        checked={formData.positiveImpressions.includes(
                          impression
                        )}
                        onCheckedChange={() =>
                          handleCheckboxChange(
                            "positiveImpressions",
                            impression
                          )
                        }
                      />
                      <Label htmlFor={impression}>{impression}</Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Label>
                    10. How would you describe the college&apos;s approach to
                    fostering innovation?
                  </Label>
                  <RadioGroup
                    value={formData.innovationApproach}
                    onValueChange={(value) =>
                      setFormData({ ...formData, innovationApproach: value })
                    }
                    className="space-y-2"
                  >
                    {[
                      "Very forward-thinking and innovative",
                      "Open to new ideas and evolving",
                      "Moderately innovative",
                      "Lacks focus on innovation",
                      "No opinion",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            {currentStep === 5 && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <Label>
                    11. What industry-oriented programs did you find most
                    beneficial?
                  </Label>
                  {[
                    "Internship opportunities",
                    "Live projects with industry",
                    "Technical workshops and hackathons",
                    "Professional certifications",
                    "Mentorship from alumni",
                    "Industry-academia research collaborations",
                  ].map((program) => (
                    <div key={program} className="flex items-center space-x-2">
                      <Checkbox
                        id={program}
                        checked={formData.beneficialPrograms.includes(program)}
                        onCheckedChange={() =>
                          handleCheckboxChange("beneficialPrograms", program)
                        }
                      />
                      <Label htmlFor={program}>{program}</Label>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <Label>
                    13. Would you recommend our college to peers or other
                    organizations?
                  </Label>
                  <RadioGroup
                    value={formData.recommendation}
                    onValueChange={(value) =>
                      setFormData({ ...formData, recommendation: value })
                    }
                    className="space-y-2"
                  >
                    {[
                      "Yes, highly recommend",
                      "Yes, would recommend",
                      "Maybe, with improvements",
                      "Unlikely to recommend at this time",
                      "No, prefer other institutions",
                    ].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option}>{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className="bg-gray-700 hover:bg-gray-600 hover:text-white"
              >
                Previous
              </Button>

              {currentStep === totalSteps ? (
                <Button type="submit" className="bg-blue-600 hover:bg-blue-500">
                  Submit Feedback
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-500"
                >
                  Next
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeedbackForm;
