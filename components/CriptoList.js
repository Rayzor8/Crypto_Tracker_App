import React from 'react';

const CriptoList = ({ data }) => {
   return (
      <div className="flex gap-2 md:gap-10 justify-start items-center bg-blue-300 px-4 py-2 md:py-2  rounded-md flex-wrap">
         <div className="flex items-center gap-4">
            <p>
               Rank : <span className="font-bold">{data.market_cap_rank}</span>
            </p>
            <img
               src={data.image}
               alt="symbol"
               className=" w-6 h-6 md:w-10 md:h-10"
            />
            <h1 className="text-sm md:text-base font-mono font-bold">
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
            <span className="text-black font-normal">/ 24 hours</span>
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
   );
};

export default CriptoList;
