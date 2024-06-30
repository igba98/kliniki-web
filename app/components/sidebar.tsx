import React from "react";
import Image from "next/image";
import {
  ListDashes,
  FolderOpen,
  CheckCircle,
  ArrowsHorizontal,
  Syringe,
  FirstAidKit,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Sidebar() {
  return (
    <main className="flex h-screen w-[250px] flex-col gap-12 bg-[#4660ad] p-8 py-10 text-white">
      <div>
        <Image src={"/kiliniki.png"} alt={"logo"} width={135} height={50} />
      </div>
      <div className="flex flex-col gap-[30px]">
        <Link href={"/"}>
          <div className="flex flex-row items-center gap-3">
            <ListDashes size={32} />
            Dashboard
          </div>
        </Link>
        <Link href={"/Records"}>
          {" "}
          <div className="flex flex-row items-center gap-3">
            <FolderOpen size={32} />
            Records
          </div>
        </Link>

        <Link href={"/Appointment"}>
          <div className="flex flex-row items-center gap-3">
            <CheckCircle size={32} />
            Appointment
          </div>
        </Link>
        <Link href={"/attendance"}>
          <div className="flex flex-row items-center gap-3">
            <ArrowsHorizontal size={32} />
            Attendance
          </div>
        </Link>
        <Link href={""}>
          <div className="flex flex-row items-center gap-3">
            <Syringe size={32} />
            Lab Results
          </div>
        </Link>
        <Link href={""}>
          {" "}
          <div className="flex flex-row items-center gap-3">
            <FirstAidKit size={32} />
            Emergency{" "}
          </div>
        </Link>
      </div>
    </main>
  );
}
