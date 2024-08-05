/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

interface FormState {
  weight: string;
  bloodPressure: string;
  albumin: string;
  hemoglobin: string;
  bloodSugar: string;
  before20Weeks: string;
  after20Weeks: string;
  fundalHeight: string;
  sleepingOrientation: string;
  babyMovement: string;
  antimalarials: string;
  deworming: string;
  ironLevel: string;
  folicAcid: string;
  dangerSigns: string;
  contraception: string;
  mentalHealth: string;
  postpartumComplications: string;
  specifyComplications: string;
  dangerSignsObserved: string;
}

interface Vaccination {
  name: string;
  checked: boolean;
}

const initialVaccinations: Vaccination[] = [
  { name: "TT1", checked: true },
  { name: "TT2", checked: true },
  { name: "TT3", checked: true },
  { name: "TT4", checked: false },
  { name: "TT5", checked: false },
];

const Attendance: React.FC = () => {
  const { control, handleSubmit, register, setValue, watch } =
    useForm<FormState>({
      defaultValues: {
        weight: "",
        bloodPressure: "",
        albumin: "",
        hemoglobin: "",
        bloodSugar: "",
        before20Weeks: "",
        after20Weeks: "",
        fundalHeight: "",
        sleepingOrientation: "",
        babyMovement: "",
        antimalarials: "",
        deworming: "",
        ironLevel: "",
        folicAcid: "",
        dangerSigns: "",
        contraception: "",
        mentalHealth: "",
        postpartumComplications: "",
        specifyComplications: "",
        dangerSignsObserved: "",
      },
    });

  const [vaccinations, setVaccinations] =
    React.useState<Vaccination[]>(initialVaccinations);
  const [showDangerSigns, setShowDangerSigns] = React.useState(false);

  const handleCheckboxChange = (index: number) => {
    const newVaccinations = [...vaccinations];
    newVaccinations[index].checked = !newVaccinations[index].checked;
    setVaccinations(newVaccinations);
  };

  const handleDangerSignsClick = (answer: string) => {
    setShowDangerSigns(answer === "Yes, It's my first");
  };

  const postpartumComplications = watch("postpartumComplications");

  const onSubmit = (data: FormState) => {
    console.log(data);
    console.log(vaccinations);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-[28px] font-semibold">
          Mother's Attendance Profile
        </h1>
        <div className="flex flex-row gap-[200px]">
          <div>
            <h1>
              <span>Mother's Name:</span> Doricas Mashehse
            </h1>
          </div>
          <div>
            <h1>
              <span>Card Number:</span> KL-N0034
            </h1>
          </div>
          <div>
            <h1>
              <span>Date:</span> 01 July, 2024
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">Health Measurements</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "Weight (Kg)",
              "Blood Pressure (mmHg)",
              "Albumin in Urine",
              "Hemoglobin (g/dl)",
              "Blood Sugar",
            ].map((label, idx) => {
              const name = label
                .toLowerCase()
                .replace(/[^a-zA-Z]+/g, "") as keyof FormState;
              return (
                <div key={idx}>
                  <label className="mb-2 block text-sm text-gray-600">
                    {label}
                  </label>
                  <input
                    {...register(name)}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            Pregnancy and Fetal Information
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              "Before 20 weeks",
              "After 20 weeks",
              "Fundal Height (cm)",
              "Baby's sleeping orientation",
              "Baby's Movement",
            ].map((label, idx) => {
              const name = label
                .toLowerCase()
                .replace(/[^a-zA-Z]+/g, "") as keyof FormState;
              return (
                <div key={idx}>
                  <label className="mb-2 block text-sm text-gray-600">
                    {label}
                  </label>
                  <input
                    {...register(name)}
                    type="text"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            Medications and Supplements
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {["Antimalarials", "Deworming", "Iron level", "Folic Acid"].map(
              (label, idx) => {
                const name = label
                  .toLowerCase()
                  .replace(/[^a-zA-Z]+/g, "") as keyof FormState;
                return (
                  <div key={idx}>
                    <label className="mb-2 block text-sm text-gray-600">
                      {label}
                    </label>
                    <input
                      {...register(name)}
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                    />
                  </div>
                );
              },
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            Vaccinations (TT Vaccination)
          </h1>
          <div className="mx-auto overflow-hidden rounded-lg bg-white">
            <div className="px-2 py-4">
              <h2 className="text-[20px] font-semibold text-gray-900">
                Mother's Medical Check
              </h2>
            </div>
            {vaccinations.map((vaccination, index) => (
              <div
                key={index}
                className={`flex w-full items-center justify-between px-2 py-4 ${index < vaccinations.length - 1 ? "border-b border-gray-200" : ""}`}
              >
                <span className="text-[16px] text-gray-900">
                  {vaccination.name}
                </span>
                <input
                  type="checkbox"
                  checked={vaccination.checked}
                  onChange={() => handleCheckboxChange(index)}
                  className="form-checkbox h-5 w-5 rounded text-indigo-600"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">Danger Signs</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {["Yes, It's my first", "No, It's not"].map((label, idx) => (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => handleDangerSignsClick(label)}
                  className={`mt-2 block w-full rounded-lg border border-gray-200 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 ${
                    label === "Yes, It's my first"
                      ? "bg-gray-600"
                      : "bg-gray-400"
                  }`}
                >
                  {label}
                </button>
              </div>
            ))}
          </div>
          {showDangerSigns && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label className="mb-2 block text-sm text-gray-600">
                  Mention Danger signs observed
                </label>
                <input
                  {...register("dangerSignsObserved")}
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            Mother’s Condition Postpartum
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Contraception
              </label>
              <input
                {...register("contraception")}
                type="text"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mental Health
              </label>
              <input
                {...register("mentalHealth")}
                type="text"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Any Postpartum Complications?
              </label>
              <select
                {...register("postpartumComplications")}
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              >
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {postpartumComplications === "Yes" && (
              <div>
                <label className="mb-2 block text-sm text-gray-600">
                  If Yes, Specify:
                </label>
                <input
                  {...register("specifyComplications")}
                  type="text"
                  className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                />
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 self-center rounded-lg bg-blue-600 px-5 py-3 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Attendance;
