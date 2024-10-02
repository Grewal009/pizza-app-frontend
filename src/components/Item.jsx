/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Item = (props) => {
  console.log(props);
  const { name, image, ingredients, allergens, price } = props;
  return (
    <div className="w-52 h-64 border bottom-2 border-transparent hover:border-gray-400 p-2 cursor-pointer">
      <img src={image} className="w-full h-32 object-cover" />
      <h1>{name}</h1>
      <h2>{price}</h2>
    </div>
  );
};

export default Item;
