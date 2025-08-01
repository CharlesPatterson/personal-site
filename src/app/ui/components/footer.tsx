import Image from 'next/image';

const social_links = [
  {
    name: 'Github',
    destination: 'https://github.com/ua-cpatterson',
    svg: '/github-octocat-svgrepo-com.svg',
  },
  {
    name: 'LinkedIn',
    destination:
      'https://www.linkedin.com/in/charles-patterson-fullstack-engineer/',
    svg: '/linkedin-color-svgrepo-com.svg',
  },
];

export default function Footer() {
  return (
    <footer className='row-start-3 mb-5 flex flex-wrap items-center justify-center gap-[24px] font-mono'>
      {social_links.map(({ name, destination, svg }) => {
        return (
          <a
            key={name}
            href={destination}
            className='flex items-center gap-2 font-extrabold hover:underline hover:underline-offset-4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src={svg}
              alt='File icon'
              width={16}
              height={16}
            />
            {name}
          </a>
        );
      })}

      <p>
        <a
          href='https://nextjs.org/'
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/vercel.svg'
            alt='File icon'
            width={16}
            height={16}
          />
          Powered by Next.js
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Charles Patterson</p>
    </footer>
  );
}
