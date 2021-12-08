import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import CriptoList from '../components/CriptoList';
import SearchForm from '../components/SearchForm';

export const getStaticProps = async () => {
   const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
   );
   const data = res.data;
   return {
      props: {
         cryptoData: data,
      },
   };
};

const cryptoboard = ({ cryptoData }) => {
   const [searchData, setSearchData] = useState('');

   return (
      <div className="px-6">
         <SearchForm setSearchData={setSearchData} />
         <ul>
            {cryptoData
               .filter((data) => {
                  if (searchData === '') {
                     return data;
                  } else if (
                     data.name.toLowerCase().includes(searchData.toLowerCase())
                  ) {
                     return data;
                  }
               })
               .map((data) => {
                  return (
                     <li
                        key={data.symbol}
                        className="flex flex-col my-4  shadow-xl text-xs md:text-base"
                     >
                        <CriptoList data={data} />
                     </li>
                  );
               })}
         </ul>
      </div>
   );
};

export default cryptoboard;
