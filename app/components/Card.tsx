import React from 'react'

export default function Card() {
  return (
    <main>
      <div className="flex h-[120px] w-[252px] flex-col gap-5 rounded-xl bg-[#324889] px-8 p-4 text-white">
        <h1 className="text-[18px] font-medium">Appointments</h1>
        <h1 className="text-[28px] font-semibold">400</h1>
      </div>
    </main>
  );
}
