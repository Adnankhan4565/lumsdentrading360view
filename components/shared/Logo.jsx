import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import logo from '@/public/assets/images/logo.webp';

const Logo = () => {
  return (
    <Link
      aria-label='AccordSecurity Logo'
      href='/'
      className='flex items-center'
    >
      {/* <Image
        src={logo}
        alt='AccordSeccurity Logo'
        height={32}
        width={32}
        className='mr-2'
      /> */}
      <p className='self-center text-2xl font-extrabold whitespace-nowrap text-gray-800'>
        Lumsden <span className='text-green-600'>Trading</span>
      </p>
    </Link>
  );
};

export default Logo;
