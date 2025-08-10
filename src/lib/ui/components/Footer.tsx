import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='font-inter row-start-3 mb-5 flex flex-wrap items-center justify-center gap-[24px]'>
      <p>
        <a
          href='https://nextjs.org/'
          className='flex items-center gap-2 hover:underline hover:underline-offset-4'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            aria-hidden
            src='/personal-site/vercel.svg'
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
