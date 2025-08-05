import React, { useEffect, useState } from 'react'

const Header = (probs) => {
  const handleSearchChange = (event) => {
    probs.setSearchText(event.target.value);
  };
  useEffect(()=>{
    // console.log(probs.searchText);
    
  }, [probs.searchText])
  return (
    <div className='bg-black md:h-20 top-0 md:sticky grid grid-cols-2 place-items-center place-content-around md:flex z-10 gap-2.5'>
        <div className='flex'>
        <img src="/logo.png" className="md:h-15 h-10 mt-1 md:m-auto w-auto rounded-sm" alt="" />
      <div className='text-white text-xl md:text-3xl font-serif border-l-2 md:mx-3 mx-2 px-3 py-3 border-l-green-600'>
        PocketPixel
      </div>
        </div>

      <div className="mx-4">
        <input placeholder='Search Latest Device' onChange={handleSearchChange} className='bg-white rounded-lg md:h-10 h-8 md:w-80 w-[100%] p-2'/>
      </div>
    </div>
  )
}

export default Header
