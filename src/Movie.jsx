import axios from 'axios';
import React, { useState } from 'react';
import './movie.css'; // Assuming you have a custom CSS file for additional styling.

const Movie = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const[selectmovie,setselectmovie]=useState(null);

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

    const handlemovieclick=async(imdbID)=>{
        try{
            let info=await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=a5ef1268`);
            setselectmovie(info.data);
        }
        catch(error){
            console.error(error);
            
        }
    }
    console.log(data);
    

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

            {data.length > 0 && !selectmovie &&(
                <div className="movies-list">
                    {data.map((item, index) => (
                        <div key={index} className="movie-item" onClick={() => handlemovieclick(item.imdbID)}> 
                            <img
                                className="movie-poster"
                                src={item.Poster}
                                alt=""
                            />
                            <p className="movie-title">{item.Title}</p>
                        </div>
                    ))}
                </div>
            )}

{selectmovie && (
                <div className="movie-details" >
                    <h2>{selectmovie.Title}</h2>
                    <img
                        className="movie-detail-poster"
                        src={selectmovie.Poster}
                        alt={selectmovie.Title}
                    />
                    <p><strong>Year:</strong> {selectmovie.Year}</p>
                    <p><strong>Genre:</strong> {selectmovie.Genre}</p>
                    <p><strong>Director:</strong> {selectmovie.Director}</p>
                    <p><strong>Plot:</strong> {selectmovie.Plot}</p>
                    <button onClick={() => setselectmovie(null)} className="back-button">
                        Back to Search
                    </button>
                </div>
            )}

            {/* {search ==search && <p className="no-results">No results found for "{search}"</p>} */}
        </div>
    );
};

export default Movie;
