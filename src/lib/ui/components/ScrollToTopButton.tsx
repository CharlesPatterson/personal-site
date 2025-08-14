'use client';
import UpArrowIcon from '~icons/mingcute/up-line.tsx';

export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className='fixed right-20 bottom-20 cursor-pointer'
      onClick={scrollToTop}
    >
      <UpArrowIcon className='transition-[color, border-color] size-8 rounded-[100%] border-2 duration-500 ease-in-out hover:size-12 hover:border-cyan-600 hover:text-cyan-600 [data-theme=""]:border-black [data-theme="dark"]:border-white' />
    </button>
  );
}
