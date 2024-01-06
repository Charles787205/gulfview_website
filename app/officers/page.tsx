import OfficerCard from "@/components/cards/OfficerCard";

const OfficersPage = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden p-3 max-h-[calc(100vh-70px)] mb-10 m-3">
      <h1 className="text-center font-bold text-[40px]">GVEHAI Officers</h1>
      <div className="flex items-center flex-col gap-4 mt-10">
        <OfficerCard />
        <div className="flex flex-row gap-4">
          <OfficerCard />
          <OfficerCard />
        </div>
        <div className="flex flex-row overflow-auto max-w-[100%] gap-4">
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
    </div>
  );
};

export default OfficersPage;
