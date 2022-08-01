import Image from "next/image";
import Link from "next/link";

export const EpisodeCard = (props: any) => {
  return (
    <a href={props.episode.episodeUrl}>
      <div
        key={props.episode.animeId}
        className="card cursor-pointer flex flex-col items-center bg-white p-2 rounded-md hover:border-blue-200 hover:border-2 hover:border-solid"
      >
        <div className="w-3/4 md:w-full aspect-[3/4] rounded">
          <Image
            src={props.episode.animeImg}
            width={600}
            height={800}
            alt="anime image"
          />
        </div>
        <p className="anime-title text-center font-bold">
          {props.episode.animeTitle}
        </p>
        <h1>Episode {props.episode.episodeNum} [{props.episode.subOrDub}]</h1>
        <div className="genres"></div>
      </div>
    </a>
  );
};
