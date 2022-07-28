import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <div className="navbar w-full p-5 fixed text-2xl bg-blue-500 text-white flex justify-between items-center">
      <h1>Anime Ingfo</h1>
      <div className="text-3xl cursor-pointer" onClick={() => {
        document.querySelector('.menu')?.classList.toggle('inactive')
      }}>
        <FiMenu />
      </div>
    </div>
  );
};
