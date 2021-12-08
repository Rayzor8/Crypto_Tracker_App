import React from 'react';

const SearchForm = ({setSearchData}) => {
   return (
      <form className="py-6 flex gap-2 justify-center items-center">
         <input
            type="text"
            className="px-4 py-1 shadow-md rounded-xl border-2 border-blue-400"
            onChange={(e) => setSearchData(e.target.value)}
         />
         <button className="bg-blue-400 font-mono px-4 py-1 rounded-lg shadow-md text-gray-900 font-bold">
            Search
         </button>
      </form>
   );
};

export default SearchForm;
