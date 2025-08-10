'use client';
import { useState, useEffect } from 'react';
import MoonLogo from '~icons/solar/moon-outline.jsx';
import SunLogo from '~icons/solar/sun-2-outline.jsx';

const DarkModeSlider = () => {
  const [theme, setTheme] = useState(() => {
    /*
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
    }
      */

    return 'light';
  });

  /*
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  */

  return (
    <div className='flex flex-row items-center font-bold hover:text-cyan-600'>
      <label htmlFor='checkbox' className='cursor-pointer'>
        <input
          className='peer hidden cursor-pointer'
          type='checkbox'
          id='checkbox'
          onChange={(e) => {
            const theme = e.target.checked ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', theme);
            setTheme(theme);
          }}
          defaultChecked={theme === 'dark'}
        />
        {theme && theme === 'dark' ? (
          <span>
            Dark Mode <MoonLogo className='inline-block' />
          </span>
        ) : (
          <span>
            Light Mode <SunLogo className='inline-block' />
          </span>
        )}
      </label>
    </div>
  );
};
export default DarkModeSlider;
