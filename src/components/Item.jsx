/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const Item = (props) => {
  console.log(props);
  const { name, image, id } = props;
  console.log(props);
  return (
    <div className="w-52 h-40 cursor-pointer transition duration-700 hover:scale-110">
      <Link to={"/order/" + id}>
        <img src={image} className="w-full h-32 object-cover rounded-3xl" />
      </Link>
      <h1 className="leading-4 text-center text-base font-medium text-gray-700">
        {name}
      </h1>
    </div>
  );
};

export default Item;
