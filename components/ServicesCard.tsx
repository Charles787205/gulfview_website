import React from "react";
import Link from "next/link";
import { ServiceCardProps } from "@/types";
const ServicesCard = ({ title, description, link }: ServiceCardProps) => {
  return (
    <div className="bg-secondary-blue p-5 text-white rounded-lg flex flex-col gap-3 ">
      <h1 className=" font-bold md:text-[20px] lg:text-[25px] ">{title}</h1>
      <p className="md:text-[15px] lg:text[18px]  overflow-hidden">
        {description}
      </p>
      <Link
        href={link}
        className="text-[15px]  lg:text[18px] flex mt-auto items-center justify-center self-end font-semibold bg-yellow rounded w-[124px] h-[34px] text-primary-blue text-center"
      >
        Read More
      </Link>
    </div>
  );
};

export default ServicesCard;
