import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const data = ['jj1', 'mww2', 'item3']; // Your data source
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const handleSearch = (e) => {
     e.preventDefault()
    const results = data.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase()));
      searchform.classList.toggle('movedown')
    



    

    setSearchResults(results);
    setShowNoResults(results.length === 0);
  };



  const expandSearch = () => {
    const searchInput = document.getElementById('searchinput');
    searchInput.classList.toggle('search');

  };

  return (
    <div>
      <form onSubmit={ handleSearch }>
        <figure className="flex items-center bg-blue-500 opacity-70 md:p-1 text-xs cursor-pointer  border-cyan-500 rounded-full">
          <BsSearch
            className="m-0.5 hover:text-lg text-white text-xs"
            onClick={expandSearch}
          />
          <input
            className="rounded-full hidden placeholder-white w-[40vw] h-full   p-1.5 transition-all ease-in-out bg-slate-500 opacity-70"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          
            id="searchinput"
          />
        </figure>
      </form>
      {showNoResults && <div className='mt-5 text-xs'> No matching results.</div> }
      <div>
        {searchResults.map((result, index) => (
         searchQuery && <div  className='mt-5 bg-white border-2 border-blue-500 rounded w-2/3  mx-auto text-xs' onSubmit={handleSearch}  id="searchform" key={index}>{result} </div>
         
        ))}
      </div>
     
    </div>
  );
};

export default Search;
