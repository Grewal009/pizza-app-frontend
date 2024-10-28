import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full px-2 text-center">
      <h2 className="font-bold text-xl text-gray-700">Contact page</h2>
      <Link to="/adminsignin">
        <h3>Admin Sign in</h3>
      </Link>
    </div>
  );
};

export default Contact;
