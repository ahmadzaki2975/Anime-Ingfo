import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className="w-full p-5 text-2xl bg-blue-500 text-white fixed flex justify-between items-center">
      <h1>Anime Ingfo</h1>
      <div className="text-3xl cursor-pointer">
        <FiMenu />
      </div>
    </div>
  );
};
