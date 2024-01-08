import OfficerCard from "@/components/cards/OfficerCard";

const OfficersPage = () => {
  return (
    <div className="p-3 pb-10 flex flex-col items-center gap-10 ">
      <h1 className="text-center font-bold text-[40px]">GVEHAI Officers</h1>

      <OfficerCard />
      <div className="flex flex-row gap-4">
        <OfficerCard />
        <OfficerCard />
      </div>
      <div className="flex flex-row overflow-x-auto max-w-[100%] gap-4">
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
        <OfficerCard />
      </div>
    </div>
  );
};

export default OfficersPage;
