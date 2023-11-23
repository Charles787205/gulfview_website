import React from "react";
import { ActivityProps } from "@/types";
import Image from "next/image";

type ActivityCardProps = {
  activity: ActivityProps;
};
const ActivityCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="flex flex-row bg-white p-5 rounded shadow-md  gap-5 snap-start cursor-pointer">
      <div className="w-[500px] overflow-hidden object-cover hidden lg:flex">
        <Image
          src={activity.imagePath}
          width={500}
          height={500}
          alt="activity picture"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-10 text-center lg:text-left">
        <h1 className="font-bold text-[24px] md:text-[32px] ">
          {activity.title}
        </h1>
        <p>{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
