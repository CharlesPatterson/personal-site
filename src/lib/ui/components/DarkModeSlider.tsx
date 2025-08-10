'use client';
import { useState, useEffect } from 'react';

const DarkModeSlider = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
    }

    return 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className='flex flex-row items-center gap-4'>
      <span className='text-[14px]'>☀️</span>
      <label
        className='relative inline-block h-[34px] w-[60px]'
        htmlFor='checkbox'
      >
        <input
          className='peer hidden'
          type='checkbox'
          id='checkbox'
          onChange={(e) => {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            setTheme(theme);
          }}
          defaultChecked={theme === 'dark'}
        />
        <div className='slider absolute top-0 right-0 bottom-0 left-0 cursor-pointer rounded-[34px] bg-gray-400 duration-200 peer-checked:bg-cyan-600 before:absolute before:bottom-[4px] before:left-[4px] before:h-[26px] before:w-[26px] before:rounded-[50%] before:bg-white before:duration-300 peer-checked:before:translate-x-[26px]'></div>
      </label>
      <span className='text-[14px]'>🌒</span>
    </div>
  );
};
export default DarkModeSlider;
