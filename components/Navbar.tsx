import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="navbar w-full p-5 fixed text-2xl bg-blue-500 text-white flex justify-between items-center">
      <Link href='/'>
      <h1 className="cursor-pointer">Anime Ingfo</h1>
      </Link>
      <div className="text-3xl cursor-pointer" onClick={() => {
        document.querySelector('.menu')?.classList.toggle('inactive')
      }}>
        <FiMenu />
      </div>
    </div>
  );
};
