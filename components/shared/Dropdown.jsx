'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { aboutus } from '@/constants/navbar';

const Dropdown = () => {
  return (
    <div className='flex h-[100px] justify-center px-3 py-10 '>
      <FlyoutLink className='' href='#' FlyoutContent={PricingContent}>
        About Us
      </FlyoutLink>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  const handleClose = () => setOpen(false);

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className='relative w-fit h-fit'
    >
      <Link href={href} className=' text-black'>
        {children}
        <span
          style={{
            transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
          }}
          className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#ef4b2f] transition-transform duration-300 ease-out'
        />
      </Link>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: '-50%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='absolute left-1/2 top-12 bg-white text-black'
          >
            <div className='absolute -top-6 left-0 right-0 h-6 bg-transparent' />
            <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white' />
            <FlyoutContent handleClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = ({ handleClose }) => {
  return (
    <div className='w-[700px] flex flex-col md:flex-row bg-gray-800 text-white'>
      <div className='w-1/2 p-6'>
        <h2 className='text-2xl font-bold mb-4'>About us</h2>
        <p className='text-sm mb-6'>
          We are a dedicated team with a mission to deliver quality, embodying
          integrity and pushing the boundaries of what's possible.
        </p>
        <Link
          href='/about-us'
          className='text-blue-400 align-bottom hover:underline'
          onClick={handleClose}
        >
          Learn more →
        </Link>
      </div>
      <div className='grid grid-cols-2 bg-white text-black gap-4 p-10'>
        {aboutus.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className='block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
            onClick={handleClose}
          >
            <h5 className='mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white'>
              {item.title}
            </h5>
            <p className='text-sm font-normal line-clamp-3 text-gray-400 dark:text-gray-400'>
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
