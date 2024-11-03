import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full h-20 bg-yellow-200 ">
      <div className="flex h-full justify-evenly items-center text-lg font-semibold text-gray-700 ">
        <Link to="/" className="cursor-pointer w-20 hover:font-bold">
          Home
        </Link>
        <Link to="/contact" className="cursor-pointer w-20 hover:font-bold">
          Contact
        </Link>
        <Link to="/login" className="cursor-pointer w-40  hover:font-bold">
          Customer Sign in
        </Link>
        <Link to="/signup" className="cursor-pointer w-40 hover:font-bold">
          Customer Sign up
        </Link>
        <Link to="/adminsignin" className="cursor-pointer w-32 hover:font-bold">
          Admin Sign in
        </Link>
      </div>
    </div>
  );
};

export default Footer;
