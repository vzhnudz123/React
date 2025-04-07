import React, { useState } from 'react';
import Langcontextt from './Langcontext';

const Langprovider = ({ children }) => {
    const language1 = "malayalam";
    const language2 = "English";

    
    const [lang, setLang] = useState(language1);


    const toggleLang = () => {
        setLang(prevLang => prevLang === language1 ? language2 : language1);//is previous langage state it represent current language
    };

    return (
        <Langcontextt.Provider value={{ lang, toggleLang,language1,language2 }}>
            {children}
        </Langcontextt.Provider>
    );
};

export default Langprovider;
