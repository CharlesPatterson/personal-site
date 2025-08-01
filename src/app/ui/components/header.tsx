"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const currentPathname = usePathname();
  const currentLink = links.find(
    (element) => element.destination === currentPathname
  );

  return (
    <div className="font-mono row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      {links.map(({ name, destination }) => {
        const isSelected = destination === currentLink?.destination;
        return (
          <Link
            key={name}
            href={destination}
            className={
              (isSelected ? "text-blue-500 " : "") +
              "rounded-full transition-colors flex items-center justify-center font-extrabold text-sm sm:text-base sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            }
          >
            {name}
          </Link>
        );
      })}
    </div>
  );
}
