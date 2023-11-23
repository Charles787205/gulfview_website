import Image from "next/image";

const OfficerCard = () => {
  return (
    <div className="w-[100%] md:w-[300px] flex flex-col items-center bg-gradient-to-b from-[#343e81] to-primary-blue p-4 rounded shadow-lg text-slate-100 text-center ">
      <Image
        src="/profile-pic.webp"
        width={400}
        height={400}
        alt="profile pic"
        className="shadow-md rounded"
      />
      <h3 className="font-bold mt-3">President</h3>
      <p>John Example</p>
    </div>
  );
};

export default OfficerCard;
