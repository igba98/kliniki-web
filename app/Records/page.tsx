import React from "react";
import Image from "next/image";
import {
  MagnifyingGlass,
  Plus,
  WarningCircle,
} from "@phosphor-icons/react/dist/ssr";
import { MedicalRecordsTable } from "../components/Table";
import Link from "next/link";

export default function page() {
  return (
    <main className="flex w-full flex-col gap-5">
      <section>
        <div className="relative flex w-full flex-row items-center justify-end gap-5">
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
      <section className="relative flex flex-row items-start gap-4 rounded-xl bg-[#E31410] p-4 py-6 text-white">
        <WarningCircle size={60} />
        <div className="flex flex-col gap-2">
          <h1>EMERGENCY</h1>
          <h2>Nearby Emergency mother </h2>
        </div>
      </section>
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
        <div className="flex flex-row gap-2 rounded-xl bg-[#324889] px-[24px] py-[12px] text-white">
          <Link href="" className="flex flex-row gap-2">
            <Plus size={24} /> New Records
          </Link>
        </div>
      </section>

      <section>
        <h1 className="py-3 text-[24px] font-medium">Mother's Records</h1>
        <MedicalRecordsTable />
      </section>
    </main>
  );
}
