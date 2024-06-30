"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [gestationalAge, setGestationalAge] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!name) errors.name = "Name is required";
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email";
    }
    if (!phone) errors.phone = "Phone is required";
    if (!address) errors.address = "Address is required";
    if (!gestationalAge) errors.gestationalAge = "Gestational age is required";
    if (!dueDate) errors.dueDate = "Expected due date is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Dummy sign-up logic
      alert("Sign up successful!");
    } catch (error) {
      alert("An unexpected error occurred");
    }
  };

  return (
    <div className="flex p-8 min-h-screen flex-col md:flex-row">
      <div className="flex flex-col items-start justify-center bg-blue-600 p-8 text-white md:w-1/2">
        <h1 className="mb-4 text-4xl font-bold">Welcome to our Klinik</h1>
        <p className="mb-6 text-lg">
          Clarity gives you the blocks & components you need to create a truly
          professional website.
        </p>
        <div className="flex items-center">
          {/* <Image
            src={signupImage}
            alt="Sign Up"
            width={50}
            height={50}
            className="rounded-full"
          /> */}
          <div className="ml-4">
            <p className="font-semibold">Devon Lane</p>
            <p className="text-sm">Co-Founder, Design.co</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center bg-white p-8 md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full border p-2 ${formErrors.name ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.name && (
              <p className="text-sm text-red-500">{formErrors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full border p-2 ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.email && (
              <p className="text-sm text-red-500">{formErrors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full border p-2 ${formErrors.phone ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.phone && (
              <p className="text-sm text-red-500">{formErrors.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`w-full border p-2 ${formErrors.address ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.address && (
              <p className="text-sm text-red-500">{formErrors.address}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">
              Gestational Age (weeks)
            </label>
            <input
              type="number"
              value={gestationalAge}
              onChange={(e) => setGestationalAge(e.target.value)}
              className={`w-full border p-2 ${formErrors.gestationalAge ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.gestationalAge && (
              <p className="text-sm text-red-500">
                {formErrors.gestationalAge}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Expected Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className={`w-full border p-2 ${formErrors.dueDate ? "border-red-500" : "border-gray-300"} rounded`}
            />
            {formErrors.dueDate && (
              <p className="text-sm text-red-500">{formErrors.dueDate}</p>
            )}
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full rounded bg-blue-600 py-2 text-white"
            >
              Sign Up
            </button>
            <a
              href="/login"
              className="w-full rounded bg-gray-300 py-2 text-center"
            >
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
