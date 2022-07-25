import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { type } from "os";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import raznimeApi from "./api/raznime";

const Home: NextPage = () => {
  const [ongoing, setOngoing] = useState<Array<any>>([{}])

  async function fetchAPI() {
    raznimeApi
      .get("/top-airing")
      .then((response) => {
        console.log(response.data);
        setOngoing(response.data)
      })
      .catch((err) => console.log(err));
      console.log(ongoing);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Head>
        <title>AnimIngfo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main className="">
        <div className="banner w-full h-96 bg-slate-300"></div>
        <h1 className="text-3xl text-center mb-4">Top Ongoing Animes</h1>
        <ul className="grid grid-cols-2">
          {ongoing.map(anime => {
            return(
              <li key={anime.animeId}>
                <img className="w-1/2" src={anime.animeImg}/>
                {anime.animeTitle}
              </li>
            )
          })}
        </ul>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
