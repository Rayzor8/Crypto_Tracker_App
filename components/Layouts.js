import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layouts = ({ children }) => {
   return (
      <>
         <Head>
            <title>Rayzor - CryptoTracker.</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Navbar />
         <main className="pt-16">{children}</main>
         <Footer />
      </>
   );
};

export default Layouts;
