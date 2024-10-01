import Item from "./Item";

const Body = () => {
  return (
    <div className="w-full h-[800px] p-2">
      <h1>Body</h1>
      <h1>Search</h1>
      <div className="flex flex-wrap justify-center gap-5">
        <Item itemName="Heavy Heaven" itemPrice="328" />
        <Item itemName="Kebabpizza" itemPrice="328" />
        <Item itemName="Thai Chicken" itemPrice="340" />
      </div>
    </div>
  );
};

export default Body;
