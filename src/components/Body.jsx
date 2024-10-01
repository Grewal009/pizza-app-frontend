import Item from "./Item";

const Body = () => {
  return (
    <div className="w-full h-[800px] p-2">
      <h1>Body</h1>
      <h1>Search</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item /> <Item />{" "}
        <Item /> <Item /> <Item /> <Item />
      </div>
    </div>
  );
};

export default Body;
