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
      <div className="lds-ring" style={{ width: width, height: height }}>
        <div style={{ width: width - 16, height: height - 16 }}></div>
        <div style={{ width: width - 16, height: height - 16 }}></div>
        <div style={{ width: width - 16, height: height - 16 }}></div>
      </div>
      <h2 className="font-bold">{` ${title ? title : ""}`}</h2>
    </div>
  );
};

export default LoadingRing;
