import { FC, FormEvent, useState } from "react";
import { supabase } from "./supabaseClient";
import FormInput from "./FormInput";

interface FormProps {
  onSubmitSuccess: () => void;
}

const Form: FC<FormProps> = ({ onSubmitSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (loading || submitted) return; // Prevent multiple submissions

    setLoading(true);

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase
        .from("contact_me")
        .insert([{ name, email, message }]);
      if (error) throw error;
      setSubmitted(true); // Mark as submitted
      onSubmitSuccess(); // Call the callback function
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full mx-auto p-[24px] rounded-[32px] bg-opacity-90 pl-0"
    >
      <h1 className="text-black text-2xl font-bold mb-6">Contact Me 👋</h1>
      <FormInput
        id="name"
        label="Name*"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      <FormInput
        id="email"
        label="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <FormInput
        id="message"
        label="Message*"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your message"
        required
      />
      <button
        type="submit"
        disabled={loading || submitted}
        className={`w-full text-[1.8rem] px-4 py-2 text-white font-bold bg-purple-600 rounded-full shadow-lg transition focus:ring-4 focus:ring-purple-300 ${
          loading || submitted
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-purple-700"
        }`}
      >
        {loading ? "Submitting..." : submitted ? "Submitted" : "Submit"}
      </button>
    </form>
  );
};

export default Form;
