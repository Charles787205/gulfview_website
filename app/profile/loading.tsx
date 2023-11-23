import { LoadingRing } from "@/components";

const Loading = () => {
  return (
    <div className="w-[100vh] flex justify-center h-[100vh] items-center">
      <LoadingRing width={100} height={100} />
    </div>
  );
};

export default Loading;
