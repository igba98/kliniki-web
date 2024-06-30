import React from "react";

interface CardProps {
  title: string;
  count: number;
}

const Card: React.FC<CardProps> = ({ title, count }) => {
  return (
    <div className="flex h-[120px] w-[252px] flex-col gap-5 rounded-xl bg-[#324889] p-4 px-8 text-white">
      <h1 className="text-[18px] font-medium">{title}</h1>
      <h1 className="text-[28px] font-semibold">{count}</h1>
    </div>
  );
};

export default Card;
