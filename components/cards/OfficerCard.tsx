import Image from "next/image";

const OfficerCard = () => {
  return (
    <div className="w-[100%] md:w-[300px] flex flex-col items-center rounded shadow-md shadow-neutral-700 min-w-[150px]  text-center pb-2">
      <Image
        src="/profile-pic.webp"
        width={400}
        height={400}
        alt="profile pic"
        className="rounded-t"
      />
      <div className="">
        <h3 className="font-bold mt-3">President</h3>
        <p>John Example</p>
      </div>
    </div>
  );
};

export default OfficerCard;
