import { useRouter } from "next/router";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
import raznimeApi from "../api/raznime";

export default function animeDetails() {
  const router = useRouter();
  const animeTitle = router.query.animeTitle;
  const [anime, setAnime] = useState({
    animeTitle: "?",
    animeImg: "?",
    episodesList: [],
    status: "?",
    releasedDate: 0,
    synopsis: "?",
  });

  console.log(animeTitle);

  useEffect(() => {
    async function fetchAnimeDetails() {
      raznimeApi
      .get(`/anime-details/${animeTitle}`)
      .then((response) => {
        console.log(response.data);
        setAnime(response.data);
      })
      .catch((err) => console.error(err));
    }

    fetchAnimeDetails();
  }, []);

  return(
    <div>
      <h1>{animeTitle}</h1>
    </div>
  )
}
