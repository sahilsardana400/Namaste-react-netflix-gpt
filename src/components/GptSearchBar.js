import React from 'react';
import { lang } from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
const currentLang = useSelector((store) => store.lang.currentLang);

  return (
    <div className="pt-[12%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[currentLang].search_movies}/>
            <button className="col-span-3 py-2 px-4 bg-red-700 m-4 text-white rounded-lg">{lang[currentLang].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar