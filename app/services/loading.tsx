"use client";
import { Spinner } from "@nextui-org/react";

const Loading = () => {
  return (
    <div className="m-auto mt-4 flex flex-col h-[100vh] justify-center items-center">
      <Spinner
        classNames={{
          wrapper: "w-[100px] h-[100px]",
          circle1: "border-[10px]",
          circle2: "border-[10px]",
        }}
        label="Loading..."
        color="primary"
        size="lg"
      />
    </div>
  );
};

export default Loading;
