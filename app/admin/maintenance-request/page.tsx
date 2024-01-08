import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
const MaintenanceRequestPage = () => {
  return (
    <div className="w-full flex flex-col items-center p-5">
      <h1 className="text-[30px] mb-10 font-bold">Maintenance Requests</h1>
      <Card className="w-[80%] ">
        <CardHeader>Request #23</CardHeader>
        <Divider />
        <CardBody>
          <div className="grid grid-cols-[.1fr_.5fr_1fr_.8fr] items-baseline">
            <p className="border-r-1 border-neutral-600 p-2">adf</p>
            <p className="border-r-1 border-neutral-600 p-2">adf</p>
            <p className="border-r-1 border-neutral-600 p-2">adf</p>
            <p className="p-2">adf</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MaintenanceRequestPage;
