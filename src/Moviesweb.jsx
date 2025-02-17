import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Moviesweb = () => {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    // const[selectmovie,setselectmovie]=useState(null);

    const web = async (event) => {
        event.preventDefault();
        try {
            let info = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`);
            setData(info.data.Search || []); // Ensure Search is available in the response
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };
  return (
 

<div className="movie-container">
            <div className="search-section">
                <form onSubmit={web} className="search-form">
                    <input
                        type="search"
                        onChange={handleChange}
                        value={search}
                        className="search-input"
                        placeholder="Search for movies..."
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>

            {data.length > 0 &&(
                <div className="movies-list">
                    {data.map((item, index) => (
                        <div key={index} className="movie-item"> 
                      <Link to={`/movieslink/${item.imdbID}`}>     <img
                                className="movie-poster"
                                src={item.Poster}
                                alt=""
                            />
                            </Link> 
                            <p className="movie-title">{item.Title}</p>
                        </div>
                    ))}
                </div>
            )}
    </div>
  )
}

export default Moviesweb