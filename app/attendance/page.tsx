import React from "react";

const members = [
  { name: "TT1", checked: true },
  { name: "TT2", checked: true },
  { name: "TT3", checked: true },
  { name: "TT4", checked: false },
  { name: "TT5", checked: false },
  
];

export default function Attendance() {
  return (
    <main className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {" "}
        <h1 className="text-[28px] font-semibold">
          Mother's Attendence Profile
        </h1>
        <div className="flex flex-row gap-[200px]">
          <div>
            <h1>
              {" "}
              <span>Mother's Name:</span> Doricas Mashehse
            </h1>
          </div>
          <div>
            <h1>
              <span>Card Number:</span> KL-N0034{" "}
            </h1>
          </div>
          <div>
            <h1>
              <span>Card Number:</span> Date: 01 July, 2024
            </h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">Health Measurements</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Weight (Kg)
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Blood Pressure (mmHg)
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Albumin in Urine
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Hemoglobin (g/dl)
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Blood Sugar
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            {" "}
            Pregnancy and Fetal Information
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Before 20 weeks
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                After 20 weeks
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Fundal Height (cm)
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Baby's sleeping orientation
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Baby's Movement
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            Medications and Supplements
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Antimalarials
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Deworming
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Iron level
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Folic Acid
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium">
            {" "}
            Vaccinations (TT Vaccination)
          </h1>
          <div className=" ">
            <div className="mx-auto overflow-hidden rounded-lg bg-white">
              <div className="px-2 py-4">
                <h2 className="text-[20px] font-semibold text-gray-900">
                  Mother's Medical Check
                </h2>
              </div>
              {members.map((member, index) => (
                <div
                  key={index}
                  className={`flex w-full items-center justify-between px-2 py-4 ${
                    index < members.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  <span className="text-[16px] text-gray-900">
                    {member.name}
                  </span>
                  <input
                    type="checkbox"
                    checked={member.checked}
                    className="form-checkbox h-5 w-5 rounded text-indigo-600"
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-[20px] font-medium"> Danger Signs</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <button className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-600 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40">
                {" "}
                Yes, Its my first
              </button>
            </div>
            <div>
              <button className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-600 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40">
                No,Its not
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Meantion Danger signs observed
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
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
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Mental Health
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                Any Postpartum Complications?
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                If Yes, Specify:
              </label>
              <input
                type="text"
                placeholder="Snow"
                className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
