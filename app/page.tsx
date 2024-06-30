import React from "react";
import Card from "./components/Card";
import { MagnifyingGlass, WarningCircle,Plus } from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";
import AppointmentsTable from "./components/Table";
import ChatFromMothers from "./components/Message";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-row justify-between">
        <div className="relative w-[312px] border-[#E31410]">
          <input
            type="text"
            id="Search"
            placeholder="Search Patient"
            className="w-full rounded-xl border-2 border-[#E31410] px-4 py-2.5 pe-10 shadow-sm sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <MagnifyingGlass size={16} />
          </span>
        </div>

        <div className="flex flex-row items-center gap-5">
          <h1>Dr Patrick Mosha</h1>
          <Image
            src={"/kliniki logo-02.png"}
            alt={""}
            width={60}
            height={63}
            className="rounded-full bg-gray-500 p-2"
          />
        </div>
      </section>
      <section className="flex justify-end">
        <div className="flex flex-row gap-4">
          <Link
            href={""}
            className="rounded-xl bg-[#324889] px-[24px] py-[12px] text-white"
          >
            Clinic Attendance
          </Link>
          <Link
            href={""}
            className="flex flex-row gap-2 rounded-xl bg-[#324889] px-[24px] py-[12px] text-white"
          >
            <Plus size={20} />
            New Record
          </Link>
        </div>
      </section>
      {/* <section className="relative flex flex-row items-start gap-4 rounded-xl bg-[#E31410] p-4 py-6 text-white">
        <WarningCircle size={60} />
        <div className="flex flex-col gap-2">
          <h1>EMERGENCY</h1>
          <h2>Nearby Emergency mother </h2>
        </div>
      </section> */}
      <div className="flex flex-row gap-[42px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <section>
        <div className="grid grid-cols-2 gap-10">
          <AppointmentsTable />
          <div className="flex flex-col gap-8">
            <ChatFromMothers />
          </div>
        </div>
      </section>
    </main>
  );
}
