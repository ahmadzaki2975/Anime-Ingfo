import { Menu } from "../../components/Menu";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import raznimeApi from "../api/raznime";
import Link from "next/link";

export default function animeDetailsIndex() {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([{
    animeId: '',
    animeTitle:'',
    animeUrl: '',
    animeImg: '',
    status: ''
  }])


  function fetchSearchAPI() {
    raznimeApi.get(`/search?keyw=${searchKey}`)
    .then(response => {
      console.log(response.data);
      setSearchResult(response.data)
    })
  }

  return (
    <>
      <header>
        <Navbar />
        <Menu />
      </header>
      <main>
        <div className="flex flex-col items-center">
          <h1 className="text-lg">Search Anime</h1>
          <form onSubmit={() => {fetchSearchAPI()}}>
            <input
              type="text"
              className="w-60 h-10 border-blue-800 border-2 rounded"
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
            />
            <div
              className="button cursor-pointer bg-blue-200 mt-5 p-2 text-center rounded"
              onClick={() => {
                fetchSearchAPI();
              }}
            >
              Search
            </div>
            <div className="search-result">
              {
                searchResult.map(anime => {
                  return(
                    <div key={anime.animeId} className="hover:underline">
                      <Link href={`/anime-details/${anime.animeId}`}>
                      <a>{anime.animeTitle}</a>
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
