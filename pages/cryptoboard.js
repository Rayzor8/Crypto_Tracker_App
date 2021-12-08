import React from 'react';
import Link from 'next/link';
import axios from 'axios';

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
   return (
      <div className="px-6">
         <ul>
            {cryptoData.map((data) => {
               return (
                  <li
                     key={data.symbol}
                     className="flex flex-col my-4  shadow-xl text-xs md:text-base"
                  >
                     <div className="flex gap-2 md:gap-10 justify-start items-center bg-blue-300 px-4 py-2 md:py-2  rounded-md flex-wrap">
                        <div className="flex items-center gap-4">
                           <p>
                              Rank :{' '}
                              <span className="font-bold">
                                 {data.market_cap_rank}
                              </span>
                           </p>
                           <img
                              src={data.image}
                              alt="symbol"
                              className=" w-6 h-6 md:w-10 md:h-10"
                           />
                           <h1 className="text-base md:text-xl font-mono font-bold">
                              {data.name}
                           </h1>
                           <p className="bg-white italic px-4 text-xs md:text-sm rounded-xl font-bold">
                              {data.symbol.toUpperCase()}
                           </p>
                        </div>

                        <p>MarketCap : {data.market_cap}</p>
                        <p>Total Volume : {data.total_volume}</p>
                        <p
                           className={
                              data.market_cap_change_percentage_24h > 0
                                 ? 'text-green-700 font-bold'
                                 : 'text-red-500 font-bold'
                           }
                        >
                           {data.market_cap_change_percentage_24h}%{' '}
                           <span className="text-black font-normal">
                              / 24 hours
                           </span>
                        </p>
                        <p>Total Supply : {data.total_supply}</p>
                        <p>
                           Ath Change :{' '}
                           <span
                              className={
                                 data.market_cap_change_percentage_24h > 0
                                    ? 'text-green-700 font-bold'
                                    : 'text-red-500 font-bold'
                              }
                           >
                              {data.ath_change_percentage}
                           </span>{' '}
                        </p>
                     </div>
                  </li>
               );
            })}
         </ul>
         <Link href="/">
            <a>Back to Home</a>
         </Link>
      </div>
   );
};

export default cryptoboard;
