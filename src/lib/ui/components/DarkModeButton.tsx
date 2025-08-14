'use client';
import { useState } from 'react';
import MoonLogo from '~icons/solar/moon-outline.jsx';
import SunLogo from '~icons/solar/sun-2-outline.jsx';

const DarkModeButton = () => {
  const [theme, setTheme] = useState(() => {
    return 'light';
  });

  return (
    <div className='flex flex-row items-center text-sm font-bold hover:text-cyan-600'>
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
export default DarkModeButton;
