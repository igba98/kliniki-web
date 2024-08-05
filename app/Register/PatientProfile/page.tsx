/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Doughnut } from "react-chartjs-2";

const initialMembers = [
  { name: "Age below 20 years", checked: true },
  { name: "More than 10 years since last pregnancy", checked: true },
  { name: "Have ever delivered through surgery", checked: true },
  { name: "Have you ever delivered a stillborn baby", checked: false },
  { name: "Miscarriage after two weeks or more", checked: false },
  { name: "Heart disease", checked: false },
  { name: "Diabetes", checked: false },
  { name: "Tuberculosis", checked: false },
];

const profileData = {
  clinicName: "Snow Clinic",
  registrationNumber: "SN123456",
  motherName: "Jane Doe",
  motherBirthdate: "1990-01-01",
  motherHeight: "165 cm",
  motherEducation: "Bachelor's Degree",
  motherOccupation: "Teacher",
  husbandName: "John Doe",
  husbandAge: "35",
  husbandOccupation: "Engineer",
  currentLocation: "New York, USA",
  localLeader: "Mr. Smith",
  numberOfPregnancies: "2",
  successfulDeliveries: "2",
  numberOfKids: "2",
  pregnancyDate: "2023-01-01",
  pregnancyAge: "20 weeks",
  lastPeriodDate: "2022-12-01",
  deliveryDate: "2023-09-01",
  bloodGroup: "O+",
  rh: "Positive",
  syphilisStatus: "Negative",
  otherMeasurements: "None",
  firstPregnancy: false,
  members: initialMembers,
  nextAppointmentDate: new Date("2023-07-20"),
};

export default function MotherProfile() {
  return (
    <main className="mt-10 p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="col-span-1 rounded-lg bg-white p-4 shadow-md">
          <div className="flex items-center justify-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Profile"
              className="rounded-full"
            />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">Mother's Profile</h2>
            <p className="text-gray-600">Mother's information summary</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Contacts:</h3>
            <p className="text-gray-600">(123) 456-7890</p>
            <p className="text-gray-600">example@example.com</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Physical Exam:</h3>
            <p className="text-gray-600">Height: 165 cm</p>
            <p className="text-gray-600">Weight: 60kg</p>
          </div>
        </div>

        <div className="col-span-2 rounded-lg bg-white p-4 shadow-md">
          <div>
            <h1 className="text-[20px] font-semibold">Overview</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">Gender</h3>
                <p className="text-gray-700">Female</p>
              </div>
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">Phone</h3>
                <p className="text-gray-700">(123) 456-7890</p>
              </div>
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">
                  Date of Birth
                </h3>
                <p className="text-gray-700">{profileData.motherBirthdate}</p>
              </div>
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">Address</h3>
                <p className="text-gray-700">St. Saint Street</p>
              </div>
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">
                  Register Date
                </h3>
                <p className="text-gray-700">22/09/2020</p>
              </div>
              <div>
                <h3 className="mb-2 block text-sm text-gray-600">City</h3>
                <p className="text-gray-700">Essex</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-[20px] font-semibold">Reports</h1>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex justify-between">
                <span className="text-gray-700">Checkup Result</span>
                <span className="text-gray-700">Date - 12 Mon, 2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Medicine Prescription</span>
                <span className="text-gray-700">Date - 17 Jan, 2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Checkup Result</span>
                <span className="text-gray-700">Date - 21 Feb, 2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Checkup Result</span>
                <span className="text-gray-700">Date - 13 Sep, 2022</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Rock Clqaning Report</span>
                <span className="text-gray-700">Date - 20 May, 2022</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-[20px] font-semibold">Medical Check</h1>
            {profileData.members.map((member, index) => (
              <div
                key={index}
                className={`flex w-full items-center justify-between px-2 py-4 ${
                  index < profileData.members.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <span className="text-[16px] text-gray-900">{member.name}</span>
                <input
                  type="checkbox"
                  checked={member.checked}
                  readOnly
                  className="form-checkbox h-5 w-5 rounded text-indigo-600"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 mt-6 rounded-lg bg-white p-4 shadow-md">
          <h1 className="text-[20px] font-semibold">Next Appointment</h1>
          <Calendar value={profileData.nextAppointmentDate} />
        </div>
      </div>
    </main>
  );
}
