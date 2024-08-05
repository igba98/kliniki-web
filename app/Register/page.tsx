/* eslint-disable react/no-unescaped-entities */
"use client"
import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import SarufiChatbox from "react-sarufi-chatbox";

interface Member {
  name: string;
  checked: boolean;
}

const initialMembers: Member[] = [
  { name: "Age below 20 years", checked: true },
  { name: "More than 10 years since last pregnancy", checked: true },
  { name: "Have ever delivered through surgery", checked: true },
  { name: "Have you ever delivered a stillborn baby", checked: false },
  { name: "Miscarriage after two weeks or more", checked: false },
  { name: "Heart disease", checked: false },
  { name: "Diabetes", checked: false },
  { name: "Tuberculosis", checked: false },
];

interface FormState {
  clinicName: string;
  registrationNumber: string;
  motherName: string;
  motherBirthdate: string;
  motherHeight: string;
  motherEducation: string;
  motherOccupation: string;
  husbandName: string;
  husbandAge: string;
  husbandOccupation: string;
  currentLocation: string;
  localLeader: string;
  numberOfPregnancies: string;
  successfulDeliveries: string;
  numberOfKids: string;
  pregnancyDate: string;
  pregnancyAge: string;
  lastPeriodDate: string;
  deliveryDate: string;
  bloodGroup: string;
  rh: string;
  syphilisStatus: string;
  otherMeasurements: string;
  firstPregnancy: boolean;
  members: Member[];
}

export default function Page() {
  const { control, handleSubmit, register, watch } = useForm<FormState>({
    defaultValues: {
      clinicName: "",
      registrationNumber: "",
      motherName: "",
      motherBirthdate: "",
      motherHeight: "",
      motherEducation: "",
      motherOccupation: "",
      husbandName: "",
      husbandAge: "",
      husbandOccupation: "",
      currentLocation: "",
      localLeader: "",
      numberOfPregnancies: "",
      successfulDeliveries: "",
      numberOfKids: "",
      pregnancyDate: "",
      pregnancyAge: "",
      lastPeriodDate: "",
      deliveryDate: "",
      bloodGroup: "",
      rh: "",
      syphilisStatus: "",
      otherMeasurements: "",
      firstPregnancy: false,
      members: initialMembers,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const onSubmit = (data: FormState) => {
    console.log(data);
  };

  const watchFirstPregnancy = watch("firstPregnancy");

  return (
    <main className="mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mx-auto flex flex-col items-center justify-center">
          <h1 className="text-[32px] font-semibold">Registration</h1>
          <p className="text-center text-gray-600 sm:w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi
            nisi vitae eum aut neque maiores debitis doloremque sit fuga. Iusto
            exercitationem rem reprehenderit accusamus eligendi suscipit, eaque
            ullam cupiditate!
          </p>
        </div>

        <div className="mb-10 flex flex-col justify-center gap-8 px-28">
          <div>
            <h1 className="text-[20px] font-semibold">Personal Details</h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Name of Clinic/Hospital
              </label>
              <input
                type="text"
                {...register("clinicName")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Registration Number
              </label>
              <input
                type="text"
                {...register("registrationNumber")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mothers name
              </label>
              <input
                type="text"
                {...register("motherName")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mothers Birthdate
              </label>
              <input
                type="text"
                {...register("motherBirthdate")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mothers Height
              </label>
              <input
                type="text"
                {...register("motherHeight")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mothers Education Level
              </label>
              <input
                type="text"
                {...register("motherEducation")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mothers Occupation
              </label>
              <input
                type="text"
                {...register("motherOccupation")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Husbands name
              </label>
              <input
                type="text"
                {...register("husbandName")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Husband's Age
              </label>
              <input
                type="text"
                {...register("husbandAge")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Husband's Occupation
              </label>
              <input
                type="text"
                {...register("husbandOccupation")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Current Location
              </label>
              <input
                type="text"
                {...register("currentLocation")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Location local leader
              </label>
              <input
                type="text"
                {...register("localLeader")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 px-28">
          <div>
            <h1 className="text-[20px] font-semibold">
              Previous Pregnancy Information
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Controller
                control={control}
                name="firstPregnancy"
                render={({ field: { onChange, value } }) => (
                  <button
                    type="button"
                    onClick={() => onChange(true)}
                    className={`mt-2 block w-full rounded-lg border border-gray-200 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 ${
                      value ? "bg-gray-600" : "bg-gray-400"
                    }`}
                  >
                    Yes, It's my first
                  </button>
                )}
              />
            </div>
            <div>
              <Controller
                control={control}
                name="firstPregnancy"
                render={({ field: { onChange, value } }) => (
                  <button
                    type="button"
                    onClick={() => onChange(false)}
                    className={`mt-2 block w-full rounded-lg border border-gray-200 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40 ${
                      !value ? "bg-gray-600" : "bg-gray-400"
                    }`}
                  >
                    No, It's not
                  </button>
                )}
              />
            </div>
          </div>

          {!watchFirstPregnancy && (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Number of Previous Pregnancies
                  </label>
                  <input
                    type="text"
                    {...register("numberOfPregnancies")}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Successful Deliveries
                  </label>
                  <input
                    type="text"
                    {...register("successfulDeliveries")}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Number of Kids
                  </label>
                  <input
                    type="text"
                    {...register("numberOfKids")}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-semibold">
                  Details of Previous Pregnancies
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Date (Year of Pregnancy)
                  </label>
                  <input
                    type="text"
                    {...register("pregnancyDate")}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-600">
                    Pregnancy Age (In weeks)
                  </label>
                  <input
                    type="text"
                    {...register("pregnancyAge")}
                    placeholder="Snow"
                    className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <h1 className="text-[20px] font-semibold">
              Current Pregnancy Information
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Last Period Date (LNMP)
              </label>
              <input
                type="text"
                {...register("lastPeriodDate")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Expected Date of Delivery
              </label>
              <input
                type="text"
                {...register("deliveryDate")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Blood Group
              </label>
              <input
                type="text"
                {...register("bloodGroup")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">Rh</label>
              <input
                type="text"
                {...register("rh")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Syphilis Sero Status
              </label>
              <input
                type="text"
                {...register("syphilisStatus")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Other Measurement Details
              </label>
              <input
                type="text"
                {...register("otherMeasurements")}
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
          <div className=" ">
            <div className="mx-auto overflow-hidden rounded-lg bg-white">
              <div className="px-2 py-4">
                <h2 className="text-[20px] font-semibold text-gray-900">
                  Mother's Medical Check
                </h2>
              </div>
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className={`flex w-full items-center justify-between px-2 py-4 ${
                    index < fields.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <span className="text-[16px] text-gray-900">
                    {field.name}
                  </span>
                  <Controller
                    name={`members.${index}.checked`}
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={(e) => field.onChange(e.target.checked)}
                        className="form-checkbox h-5 w-5 rounded text-indigo-600"
                      />
                    )}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 gap-6 px-28 sm:grid-cols-2">
          <div>
            <button
              type="submit"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-600 px-5 py-3 font-semibold text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            >
              Submit Registration
            </button>
          </div>
          <div>
            <button
              type="button"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-400 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            >
              Hold as incomplete registration
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}
