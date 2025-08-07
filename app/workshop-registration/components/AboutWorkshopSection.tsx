"use client";
import { useState } from "react";
import { RegistrationForm } from "./RegistrationForm";
import { Button } from "@/components/ui/button";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  currentProfile: string;
  educationalQualification: string;
  experience: string;
  yearOfGraduation: string;
  preferredLanguage: string;
}

interface AboutWorkshopSectionProps {
  onRegistrationClick?: () => void;
  onRegistrationSuccess: () => void;
  seatsLeft: number;
  setSeatsLeft: (value: number | ((prev: number) => number)) => void;
}

export function AboutWorkshopSection({
  onRegistrationClick,
  seatsLeft,
  setSeatsLeft,
}: AboutWorkshopSectionProps) {
  const handleRegistrationSuccess = () => {
    setShowModal(true);
  };
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    currentProfile: "",
    educationalQualification: "",
    experience: "",
    yearOfGraduation: "",
    preferredLanguage: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission or redirect to external registration
    if (onRegistrationClick) {
      onRegistrationClick();
    }
  };

  const redirectToExternalRegistration = () => {
    window.open(
      "https://www.guvi.in/mlp/intel-aiml-webinar-aug08?utm_source=Webinar&utm_medium=Facebook&utm_campaign=Creative-1&utm_content=AI/ML-Webinar-Aug-08&utm_id=120229483073290422&utm_term=120229483073280422&fbclid=PAQ0xDSwL1YrRleHRuA2FlbQEwAGFkaWQBqyQWXcZYdgGnRTd1ulxtAHuk0TWur1Kl618_KTwVs-NzBKh7cnNzJlpqmRGcCpYzLmtRDq0_aem_0_EO9rs1m1z9w3snlSHewg#tatsu-section-zJMrw5lkHzV0",
      "_blank"
    );
  };

  return (
    <div className="mb-16">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* About the Webinar - Left Side */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white mb-6 text-start">
            About the Webinar
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed text-start">
            In this workshop, you’ll explore Generative & Agentic AI tools that
            are changing the way we work. Learn how to build websites, create
            videos, presentations, and automate tasks — all without writing a
            single line of code.
          </p>
        </div>

        {/* Registration Form - Right Side */}
        <div
          id="registration-form"
          className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 shadow-2xl"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Register for FREE Now!
          </h3>
          <RegistrationForm
            onSuccess={handleRegistrationSuccess}
            seatsLeft={seatsLeft}
            setSeatsLeft={setSeatsLeft}
          />
        </div>
      </div>
    </div>
  );
}
