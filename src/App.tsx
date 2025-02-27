import React, { useState } from "react";
import Form from "./Form";
import "./styles/App.css"; // Import the CSS file for snowflakes

const SuccessMessage: React.FC = () => (
  <div className="mt-2">
    <h2 className="text-3xl font-bold text-purple-700 mb-4">
      Thank you for submitting your message!
    </h2>
    <p className="text-gray-700">I will contact you as soon as possible.</p>
  </div>
);

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-8 bg-gray-50 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-purple-600">
          Katia’s Custom Web Solutions
        </h1>
        <p className="italic mb-6">
          Affordable, No-Nonsense Web Tools for Small Businesses
        </p>
        <p className="mb-4">
          Running a small business is tough—your tech shouldn’t make it harder.
          I build simple, low-cost web solutions that help bars, e-commerce
          stores, pet shops, street vendors, and other small businesses save
          time, cut costs, and work smarter—without paying for expensive
          subscriptions or unnecessary features.
        </p>
        <h2 className="text-2xl font-semibold mt-6">
          How My Solutions Save You Money & Time
        </h2>
        <p className="mb-4">
          There’s a lot we can do together. Here are some examples:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Waivers & Liability Forms</strong>: Custom online waivers
            for $300 one-time—saving $300+/year compared to WaiverForever.
          </li>
          <li>
            <strong>Raffle & Giveaway Systems</strong>: Custom raffle systems
            for $400—saving $500+/year.
          </li>
          <li>
            <strong>Online Booking System</strong>: Custom scheduling tools for
            $500—saving $1,000+/year.
          </li>
          <li>
            <strong>QR Code Menu</strong>: Custom QR menus for $350—saving
            $1,000+/year.
          </li>
          <li>
            <strong>E-Commerce Order Tracking</strong>: Lightweight tracking
            systems for $600—saving thousands/year.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">Why Work With Me?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Quality:</strong> 8+ years experience in front-end
            engineering.
          </li>
          <li>
            <strong>Tailored Solutions:</strong> No generic templates—fully
            customized.
          </li>
          <li>
            <strong>Great UX:</strong> Focus on usability and client experience.
          </li>
          <li>
            <strong>Small Business Understanding:</strong> I know your
            challenges.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">
          Recent Work & Live Demos
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="https://muttsinthe6ix.github.io/waiver/"
              className="text-blue-600 underline"
            >
              Mutts in the 6ix Waiver
            </a>
          </li>
          <li>
            <a
              href="https://muttsinthe6ix.github.io/raffle/"
              className="text-blue-600 underline"
            >
              Mutts in the 6ix Raffle
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 underline">
              Business Tools & Widgets
            </a>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6">
          Let’s Build Something Smart & Affordable
        </h2>
        <p className="mt-4">
          Your business deserves tech that works for you—not against you.
        </p>
        <div className="mt-[24px]">
          {isSubmitted ? (
            <SuccessMessage />
          ) : (
            <Form onSubmitSuccess={handleFormSubmitSuccess} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
