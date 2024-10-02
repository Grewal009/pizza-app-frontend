import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {Array(5)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default Shimmer;
