import React from "react";

interface WhyChooseProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const WhyChooseAfrovivo: React.FC<WhyChooseProps> = ({ number, title, children }) => (
  <div className="flex flex-col justify-center items-start border border-orange-800 p-4 rounded-lg">
    <span className="text-2xl clash font-bold">{number}</span>
    <h2 className="clash text-orange-800 text-3xl font-semibold">{title}</h2>
    <p className="text-sm">{children}</p>
  </div>
);

export default WhyChooseAfrovivo;
