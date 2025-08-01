import Link from "next/link";

const links = [
  {
    name: "Home",
    destination: "/",
  },
  {
    name: "About",
    destination: "/about",
  },
  {
    name: "Contact",
    destination: "/contact",
  },
  {
    name: "Resume",
    destination: "/resume",
  },
];

export default function Header() {
  return (
    <div className="font-mono row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-3">
      {links.map(({ name, destination }) => {
        return (
          <Link
            key={name}
            href={destination}
            className="rounded-xl border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
