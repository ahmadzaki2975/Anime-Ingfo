import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { Navbar } from "../../components/Navbar";
import raznimeApi from "../api/raznime";

export default function AnimeDetails() {
  const router = useRouter();
  const [anime, setAnime] = useState({
    animeTitle: "[Anime Title]",
    animeImg: "/",
    episodesList: [{ episodeNum: 1, episodeUrl: "?", episodeId: "" }],
    status: "[Anime Status]",
    releasedDate: 0,
    synopsis: "[Anime Synopsis]",
    otherNames: "...",
  });

  useEffect(() => {
    if (router.isReady) {
      raznimeApi
        .get(`/anime-details/${router.query.animeTitle}`)
        .then((response) => {
          console.log(response.data);
          if (response.data !== undefined) {
            setAnime(response.data);
          }
        })
        .catch((err) => console.error(err));
    }
  }, [router.isReady]);

  return (
    <>
    <Head>
      <title>{anime.animeTitle} - Anime Ingfo</title>
    </Head>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <div className="flex flex-col items-center">
          <div className="w-1/2 aspect-[3/4] z-0 mt-10">
            <Image
              src={anime.animeImg}
              width={600}
              height={800}
              alt="anime image"
            />
          </div>
          <h1 className="text-3xl font-bold text-center px-5">
            {anime.animeTitle}
          </h1>
          {anime.status !== "Completed" ? (
            <h2 className="text-lg font-bold text-blue-400">{anime.status}</h2>
          ) : (
            <h2 className="text-lg font-bold text-green-700">{anime.status}</h2>
          )}
          <p className="px-10 mt-4 text-justify">{anime.synopsis}</p>
          <h3 className="font-bold mt-3">Other Names:</h3>
          <p className="px-10 text-center">{anime.otherNames}</p>
          <h3 className="font-bold mt-3">Release Date:</h3>
          <p className="px-10 text-center">{anime.releasedDate}</p>
          <h2 className="font-bold mt-6 mb-3">Episodes</h2>
          <ul className="grid grid-cols-10 gap-2 w-full px-5 place-items-center">
            {anime.episodesList.map((episode) => {
              return (
                <a
                  href={episode.episodeUrl}
                  key={episode.episodeId}
                  className="hover:underline"
                >
                  <li className="text-blue-400 text-center">
                    {episode.episodeNum}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </main>
      <footer className="mt-10 p-5 text-center bg-blue-500">
        &copy; INGFOOS
      </footer>
    </>
  );
}
