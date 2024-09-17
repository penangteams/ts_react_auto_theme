/** @format */

import { useNavigate } from "react-router-dom";

const DropDownCard = ({ data = [], setOpen }) => {
  const navigate = useNavigate();
  return (
    <div className="shadow h-auto w-56 absolute">
      <ul className="text-left">
        {data.map((item, i) => (
          <li
            key={i}
            className="p-2 border text-red-700 lg:hidden
             hover:text-white hover:bg-indigo-700 cursor-pointer bg-green-400
             max-w-24"
            onClick={() => {
              setOpen(false);
              navigate("/" + item.toLowerCase());
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownCard;
