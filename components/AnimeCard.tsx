import Link from "next/link";
import Image from "next/image";

export const AnimeCard = (props: any) => {
  return(
    <Link href={`/anime-details/${props.anime.animeId}`}>
    <div
      key={props.anime.animeId}
      className="card cursor-pointer flex flex-col items-center bg-white p-2 rounded-md hover:border-blue-200 hover:border-2 hover:border-solid"
    >
      <div className="w-3/4 md:w-full aspect-[3/4] rounded">
        <Image
          src={props.anime.animeImg}
          width={600}
          height={800}
          alt="anime image"
        />
      </div>
      <p className="anime-title text-center font-bold">
        {props.anime.animeTitle}
      </p>
      <div className="genres"></div>
    </div>
  </Link>
  );
};
