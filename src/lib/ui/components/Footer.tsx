import NextJSLogo from '~icons/logos/nextjs-icon.jsx';

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
          Powered by Next.js
          <NextJSLogo className='inline-block' />
        </a>
      </p>
      <p>&copy; {new Date().getFullYear()} Charles Patterson</p>
    </footer>
  );
}
