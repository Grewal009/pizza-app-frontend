/* eslint-disable react/prop-types */
const Item = (props) => {
  console.log(props);
  const { itemName, itemPrice } = props;
  return (
    <div className="w-52 h-64 border bottom-2 border-transparent hover:border-gray-400 p-2 cursor-pointer">
      <img
        src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg"
        className="w-full"
      />
      <h1>{itemName}</h1>
      <h2>{itemPrice}</h2>
    </div>
  );
};

export default Item;
