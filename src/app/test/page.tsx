"use client"
import React, { useRef,useState } from 'react';
import { useContext } from 'react';
import { SearchContext } from '@/src/context/searchContext';

const Test = () => {

  const {search} = useContext(SearchContext);

  return (
    <div>
      
      <div>
        the value of ref is {search.value}
      </div>
    </div>
  );
}

export default Test;


// import React, { useRef } from 'react'

// const page = () => {

//     const searchBarRef : any = useRef('');
//     const value = useRef(searchBarRef.current.value);
//     console.log(value);

//   return (
//     <div>
//       the value of ref is {value.current}
//     </div>
//   )
// }

// export default page
