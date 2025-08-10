'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeSlider from './DarkModeSlider';
import DocumentLogo from '~icons/basil/document-outline.jsx';
import PersonLogo from '~icons/ic/outline-person.jsx';
import GithubSilhouetteLogo from '~icons/icon-park-outline/github.jsx';
import LinkedInSilhouetteLogo from '~icons/circum/linkedin.jsx';

const social_links = [
  {
    name: 'Github',
    destination: 'https://github.com/CharlesPatterson',
  },
  {
    name: 'LinkedIn',
    destination:
      'https://www.linkedin.com/in/charles-patterson-fullstack-engineer/',
  },
];

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
    <div className='header font-inter sticky top-0 row-start-3 mt-5 flex flex-wrap items-center justify-center gap-[24px] sm:text-base'>
      {links.map(({ name, destination }) => {
        const isSelected = destination === currentLink?.destination;
        return (
          <Link
            key={name}
            href={destination}
            className={
              (isSelected ? 'text-cyan-600 ' : '') +
              'flex w-full items-center justify-center rounded-full px-4 text-sm font-extrabold sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px]'
            }
          >
            {name}
            {name === 'Resume' ? (
              <DocumentLogo className='inline-block pl-1' />
            ) : (
              ''
            )}
            {name === 'About' ? (
              <PersonLogo className='inline-block pl-1' />
            ) : (
              ''
            )}
          </Link>
        );
      })}
      {social_links.map(({ name, destination }) => {
        return (
          <a
            key={name}
            href={destination}
            className='flex w-full items-center justify-center rounded-full px-4 text-sm font-extrabold sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px]'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='pr-2 pl-2'>{name}</span>
            {name === 'Github' ? (
              <GithubSilhouetteLogo className='inline-block' />
            ) : (
              ''
            )}
            {name === 'LinkedIn' ? (
              <LinkedInSilhouetteLogo className='inline-block' />
            ) : (
              ''
            )}
          </a>
        );
      })}

      <DarkModeSlider />
    </div>
  );
}
