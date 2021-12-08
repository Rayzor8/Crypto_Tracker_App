import Link from 'next/link';
import React from 'react';


const Navbar = () => {
   return (
      <nav className="bg-white h-16 text-blue-700 shadow-lg flex gap-4 font-bold  justify-center items-center py-4 fixed w-full z-10 top-0 text-sm md:text-2xl">
         <div className="logo text-white mr-6 md:mr-4">
            <img src="/raylogo.jpg" alt="logo"  className="animate-spin"/>
         </div>
         <Link href="/">
            <a>Home</a>
         </Link>
         <Link href="/about">
            <a>About</a>
         </Link>
         <Link href="/cryptoboard">
            <a>Crypto Board</a>
         </Link>
      </nav>
   );
};

export default Navbar;
