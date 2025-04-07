import React, { useContext } from 'react';
import Langcontextt from './Langcontext';

const Contentpage = () => {
    const { lang, toggleLang,language1,language2 } = useContext(Langcontextt);


    return (
        <div>
            <h3>{lang === language1 ? language2 : language1}</h3>
            <button onClick={toggleLang} className='bg-red-600'>Click </button>
        </div>
    );
}

export default Contentpage;
