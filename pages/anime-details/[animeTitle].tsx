import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import { Navbar } from "../../components/Navbar";
import raznimeApi from "../api/raznime";

export default function animeDetails() {
  const router = useRouter();
  const animeTitle = router.query.animeTitle;
  const [anime, setAnime] = useState({
    animeTitle: "?",
    animeImg: "?",
    episodesList: [{episodeNum:1, episodeUrl:'?', episodeId:''}],
    status: "?",
    releasedDate: 0,
    synopsis: "?",
  });

  console.log(animeTitle);

  useEffect(() => {
    if (router.isReady) {
      console.log(router);
      raznimeApi
        .get(`/anime-details/${router.query.animeTitle}`)
        .then((response) => {
          console.log(response.data);
          setAnime(response.data);
        })
        .catch((err) => console.error(err));
    }
  }, [router.isReady]);

  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <div className="flex flex-col items-center">
          <img src={anime.animeImg} className="w-1/2 aspect-[3/4]" />
          <h1 className="text-2xl font-bold">{anime.animeTitle}</h1>
          <p className="px-10 ">{anime.synopsis}</p>
          <h2 className="font-bold mt-2">Episodes</h2>
          <ul className="grid grid-cols-10 gap-2">
            {anime.episodesList.map(episode => {
              return(
                <a href={episode.episodeUrl} key={episode.episodeId}>
                  <li className="text-blue-400 text-center">{episode.episodeNum}</li>
                </a>
              )
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
