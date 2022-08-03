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
        <div className="flex flex-col items-center sm:flex-row-reverse">
          <div className="w-1/2 aspect-[3/4] z-0 mt-10 sm:w-1/2 sm:p-10 sm:pt-10 sm:m-5 rounded bg-slate-200">
            <Image
              src={anime.animeImg}
              width={600}
              height={800}
              alt="anime image"
            />
            <div className="hidden sm:inline-block text-center w-full">
              <h3 className="font-bold mt-3">Release Date:</h3>
              <p className="px-10">{anime.releasedDate}</p>
              <h3 className="font-bold mt-3">Other Names:</h3>
              <p className="px-10">
                {anime.otherNames == "" ? "-" : anime.otherNames}
              </p>
            </div>
          </div>
          <div className="text-center w-3/4 ">
            <h1 className="text-3xl font-bold text-center px-5 sm:pt-10">
              {anime.animeTitle}
            </h1>
            {anime.status !== "Completed" ? (
              <h2 className="text-lg font-bold text-blue-400">
                {anime.status}
              </h2>
            ) : (
              <h2 className="text-lg font-bold text-green-700">
                {anime.status}
              </h2>
            )}
            <p className="synopsis px-10 mt-4 text-justify overflow-y-hidden max-h-48">
              {anime.synopsis}
            </p>
            <div
            className="expand-button mx-auto w-max hover:underline px-5 py-2 cursor-pointer"
            onClick={() => {
              document.querySelector(".synopsis")?.classList.toggle("max-h-48");
              document
                .querySelector(".expand-button")
                ?.classList.toggle("hidden");
              document
                .querySelector(".close-button")
                ?.classList.toggle("hidden");
            }}
          >
            Expand &darr;
          </div>
          <div
            className="close-button hidden mx-auto w-max hover:underline px-5 py-2 cursor-pointer"
            onClick={() => {
              document.querySelector(".synopsis")?.classList.toggle("max-h-48");
              document
                .querySelector(".close-button")
                ?.classList.toggle("hidden");
              document
                .querySelector(".expand-button")
                ?.classList.toggle("hidden");
            }}
          >
            Close &uarr;
          </div>
            <div className="sm:hidden">
              <h3 className="font-bold mt-3">Other Names:</h3>
              <p className="px-10 text-center">{anime.otherNames}</p>
              <h3 className="font-bold mt-3">Release Date:</h3>
              <p className="px-10 text-center">{anime.releasedDate}</p>
            </div>
          </div>
        </div>
        <div className="episode">
          <h2 className="font-bold mt-6 mb-3 text-center">Episodes</h2>
          <ul className="ep-list grid grid-cols-10 gap-2 w-full px-5 place-items-center max-h-40 overflow-y-hidden">
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
          <div
            className="expand-button mx-auto w-max hover:underline px-5 py-2 cursor-pointer"
            onClick={() => {
              document.querySelector(".ep-list")?.classList.toggle("max-h-40");
              document
                .querySelector(".expand-button")
                ?.classList.toggle("hidden");
              document
                .querySelector(".close-button")
                ?.classList.toggle("hidden");
            }}
          >
            Expand &darr;
          </div>
          <div
            className="close-button hidden mx-auto w-max hover:underline px-5 py-2 cursor-pointer"
            onClick={() => {
              document.querySelector(".ep-list")?.classList.toggle("max-h-40");
              document
                .querySelector(".close-button")
                ?.classList.toggle("hidden");
              document
                .querySelector(".expand-button")
                ?.classList.toggle("hidden");
            }}
          >
            Close &uarr;
          </div>
        </div>
      </main>
      <footer className="mt-10 p-5 text-center bg-blue-500">
        &copy; INGFOOS
      </footer>
    </>
  );
}
