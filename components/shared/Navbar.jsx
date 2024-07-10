'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Logo from './Logo';
import Link2 from './Link2';
import Dropdown from './Dropdown';

function NavigationMenuDemo() {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 300],
    ['rgba(0, 0, 0, 0)', 'rgba(29, 56, 104, 0.7)']
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 300],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 4px 12px rgba(0,0,0,0.15)']
  );
  const translateY = useTransform(scrollY, [0, 300], ['0px', '-100px']);

  const blurEffect = useTransform(
    scrollY,
    [0, 300],
    ['blur(0px)', 'blur(10px)']
  );

  return (
    <>
      <motion.nav
        className='fixed top-[42px] z-30 w-full px-6 text-black transition-all duration-300 ease-out lg:px-12'
        style={{
          background,
          backdropFilter: blurEffect,
          WebkitBackdropFilter: blurEffect, // For Safari support
          boxShadow,
          translateY,
        }}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between'>
          <div className='flex items-center gap-2'>
            <Logo />
          </div>
          <div className='hidden gap-6 lg:flex'>
            <div className='flex items-center '>
              <Link2 name='Home' href='/' />
              <Dropdown />
              <Link2 name='Locations' href='/' />
              <Link2 name='Contact' href='/' />
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default NavigationMenuDemo;
