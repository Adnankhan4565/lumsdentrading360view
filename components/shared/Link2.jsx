'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Link2 = ({ name, href }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = open;
  return (
    <div className='flex h-[100px] justify-center px-3 py-10'>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='relative w-fit h-fit'
      >
        <Link href={href} className=' text-black'>
          {name}
          <span
            style={{
              transform: showFlyout ? 'scaleX(1)' : 'scaleX(0)',
            }}
            className='absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-[#ef4b2f] transition-transform duration-300 ease-out'
          />
        </Link>
      </div>
    </div>
  );
};

export default Link2;
