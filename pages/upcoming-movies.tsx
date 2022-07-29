import { NextPage } from "next"
import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";

const UpcomingMovies:NextPage = () => {
  return(
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
      <h1 className="text-3xl text-center mb-5 mt-10 font-bold">
          Upcoming Anime Movies
      </h1>
      </main>
    </>
  )
}

export default UpcomingMovies;