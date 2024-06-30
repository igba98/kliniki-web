import React from "react";

const members = [
  { name: "Age below 20 years", checked: true },
  { name: "More than 10 years since last pregnancy", checked: true },
  { name: "Have ever delivered through surgery", checked: true },
  { name: "Have you ever delivered a stillborn baby", checked: false },
  { name: "Miscarriage after two weeks or more", checked: false },
  { name: "Heart disease", checked: false },
  { name: "Diabetes", checked: false },
  { name: "Tuberculosis", checked: false },
];

export default function page() {
  return (
    <main className="mt-10">
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
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Registraction Number
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Mother's name
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Mother's Birthdate
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Mother's Height
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Mother's Education Level
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Mother's Occupation
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Husband's name
            </label>
            <input
              type="text"
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
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-8 px-28">
        <div>
          <h1 className="text-[20px] font-semibold">
            Previous Pregancy Information
          </h1>
        </div>
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
              Number of Previous Preganacies
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Succeful Delivered
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Number of kids
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold">
            Details of previous Pregnacies
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Date (Year of Pregrenancy)
            </label>
            <input
              type="text"
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
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
        </div>
        <div>
          <h1 className="text-[20px] font-semibold">
            Current Pregnancy Information
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Last Period date (LNMP)
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Expectations date of Delivery
            </label>
            <input
              type="text"
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
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">Rh</label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Syphilis sero status
            </label>
            <input
              type="text"
              placeholder="Snow"
              className="mt-2 block w-full rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-gray-600">
              Other Measurement details
            </label>
            <input
              type="text"
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
            {members.map((member, index) => (
              <div
                key={index}
                className={`flex w-full items-center justify-between px-2 py-4 ${
                  index < members.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <span className="text-[16px] text-gray-900">{member.name}</span>
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
      <div className="my-10 grid grid-cols-1 gap-6 px-28 sm:grid-cols-2">
        <div>
          <button className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-600 px-5 py-3 font-semibold text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40">
            {" "}
            Submit Registration
          </button>
        </div>
        <div>
          <button className="mt-2 block w-full rounded-lg border border-gray-200 bg-gray-400 px-5 py-3 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40">
            Hold as incomplete registration
          </button>
        </div>
      </div>
    </main>
  );
}
