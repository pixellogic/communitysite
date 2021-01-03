import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState();

  return (
    <header>
      <div className='fixed w-full h-16 md:h-20 bg-white flex items-center shadow-sm z-40'>
        <div className='container flex justify-between items-center'>
          <Link href='/'>
            <a>
              <img
                src='/images/logo.png'
                className='h-12 md:h-14 block'
                alt='logo'
              />
            </a>
          </Link>
          <div className='hidden md:block'>
            <Links />
          </div>
          <div
            className='block md:hidden  cursor-pointer'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`menuBar ${!menuOpen ? null : 'menuOnBar1'}`}></div>
            <div className={`menuBar ${!menuOpen ? null : 'menuOnBar2'}`}></div>
            <div className={`menuBar ${!menuOpen ? null : 'menuOnBar3'}`}></div>
          </div>
        </div>
      </div>
      <div
        className={`h-screen fixed w-full bg-white z-30 pt-24 md:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <Links />
      </div>
    </header>
  );
};

const Links = () => {
  const router = useRouter();
  return (
    <div className='md:flex md:items-center px-3 md:px-0 mx-auto'>
      <Link href='/'>
        <a className={`nav-link block ${router.pathname == '/' ? 'active-nav-link' : null}`}>
          Home
        </a>
      </Link>
      <Link href='/about'>
        <a className={`nav-link block ${router.pathname == '/about' ? 'active-nav-link' : null}`}>
          About
        </a>
      </Link>
      <Link href='/news'>
        <a className={`nav-link block ${router.pathname == '/news' ? 'active-nav-link' : null}`}>
          News
        </a>
      </Link>
      <Link href='/contact'>
        <a className={`nav-link block ${router.pathname == '/contact' ? 'active-nav-link' : null}`}>
          Contact us
        </a>
      </Link>
    </div>
  );
};

export default Header;
