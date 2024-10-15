import { MdDelete } from "react-icons/md";

const ItemLayout = (prop) => {
  const { itemId, s, q, p } = prop;

  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-8 py-4">{itemId}</td>
      <td className="border px-8 py-4">{s}</td>

      <td className="border px-8 py-4">{p}</td>
      <td className="border px-8 py-4">{q}</td>
      <td className="border px-8 py-4">{p * q}</td>
      <td className="border px-8 py-4">
        <MdDelete size={20} />
      </td>
    </tr>
  );
};

export default ItemLayout;
