'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeSlider from './DarkModeSlider';

const links = [
  {
    name: 'About',
    destination: '/',
  },
  {
    name: 'Resume',
    destination: '/resume',
  },
];

export default function Header() {
  const currentPathname = usePathname();
  const currentLink = links.find(
    (element) => element.destination === currentPathname,
  );

  return (
    <div className='row-start-3 mt-5 flex flex-wrap items-center justify-center gap-[24px] font-mono'>
      {links.map(({ name, destination }) => {
        const isSelected = destination === currentLink?.destination;
        return (
          <Link
            key={name}
            href={destination}
            className={
              (isSelected ? 'text-orange-500 ' : '') +
              'flex w-full items-center justify-center rounded-full px-4 text-sm font-extrabold sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px]'
            }
          >
            {name}
          </Link>
        );
      })}

      <DarkModeSlider />
    </div>
  );
}
