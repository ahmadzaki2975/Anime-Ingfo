import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { signInWithGoogle } from "../pages/api/firebase";

export const Navbar = () => {
  return (
    <div className="navbar w-full p-5 fixed text-2xl bg-blue-500 text-white flex justify-between items-center">
      <Link href="/">
        <h1 className="cursor-pointer">Anime Ingfo</h1>
      </Link>
      <div className="nav-buttons flex gap-3">
        <div className="sign-in-btn cursor-pointer" onClick={() => {
          signInWithGoogle();
        }}>
          <FaUser />
        </div>
        <div
          className="text-3xl cursor-pointer"
          onClick={() => {
            document.querySelector(".menu")?.classList.toggle("inactive");
          }}
        >
          <FiMenu />
        </div>
      </div>
    </div>
  );
};
