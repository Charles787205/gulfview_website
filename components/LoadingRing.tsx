const LoadingRing = ({
  width,
  height,
  title,
}: {
  width: number;
  height: number;
  title?: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`lds-ring w-[${width}] h-[${height}]`}>
        <div className={`w-[${width - 16}] h-[${height - 16}]`}></div>
        <div className={`w-[${width - 16}] h-[${height - 16}]`}></div>
        <div className={`w-[${width - 16}] h-[${height - 16}]`}></div>
        <div className={`w-[${width - 16}] h-[${height - 16}]`}></div>
      </div>
      <h2 className="font-bold">Loading{` ${title ? title : ""}`}</h2>
    </div>
  );
};

export default LoadingRing;
