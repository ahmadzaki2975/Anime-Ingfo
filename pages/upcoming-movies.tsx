import { NextPage } from "next";
import { useState, useEffect } from "react";
import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";
import raznimeApi from "./api/raznime";
import { AnimeCard } from "../components/AnimeCard";
import Head from "next/head";

const UpcomingMovies: NextPage = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([
    {
      animeTitle: "",
      animeImg: "/",
      animeId: "",
    },
  ]);

  useEffect(() => {
    raznimeApi
      .get("/anime-movies")
      .then((response:any) => {
        console.log(response.data);
        setUpcomingMovies(response.data);
      })
      .catch((err:any) => console.log(err));
    console.log(upcomingMovies);
  }, []);

  return (
    <>
      <Head>
        <title>Upcoming Anime Movies</title>
      </Head>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main className="bg-slate-100">
        <h1 className="text-3xl text-center mb-5 mt-10 font-bold">
          Upcoming Anime Movies
        </h1>
        <div className="grid grid-cols-2 gap-5 mx-5 md:grid-cols-5 sm:grid-cols-3 pb-10">
          {upcomingMovies.map((anime) => {
            return <AnimeCard anime={anime} key={anime.animeId} />;
          })}
        </div>
      </main>
    </>
  );
};

export default UpcomingMovies;
