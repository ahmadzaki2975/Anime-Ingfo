import Link from "next/link";

export const Menu = () => {
  return (
    <div className="menu inactive w-3/4 fixed right-0 flex items-center bg-blue-300 h-[100vh]">
      <ul className="bg-slate-200 p-10 w-full text-lg menu-list flex flex-col gap-5">
        <li>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={"/anime-details"}>
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href={"/upcoming-movies"}>
            <a>Upcoming Movies</a>
          </Link>
        </li>
        {/* <li>
          <Link href={"#"}>
            <a>Popular</a>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};
