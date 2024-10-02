import { LOGO_URL } from "../utils/constants.js";
const Header = () => {
  return (
    <>
      <div className="bg-yellow-200 w-full h-20 flex justify-between px-5 items-center">
        <img src={LOGO_URL} className="w-14 h-12" />
        <ul className="flex items-center gap-5 text-2xl font-bold text-orange-700">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
        <div className="flex">
          <button className="w-24 h-10 mx-5 bg-green-600 text-xl font-bold rounded-lg">
            Login
          </button>
          <button className="w-24 h-10 bg-red-500 text-xl font-bold rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
