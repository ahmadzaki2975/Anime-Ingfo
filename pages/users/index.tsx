import { useEffect } from "react";
import { Menu } from "../../components/Menu";
import { Navbar } from "../../components/Navbar";
import { getDocument } from "../api/firebase";

const Users = () => {
  useEffect(() => {
    getDocument();
  },[])

  return(
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <h1 className="text-3xl font-bold">Users</h1>
      </main>
    </>
  )
}

export default Users;