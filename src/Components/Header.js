import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

function Header(props) {
    const navigate = useNavigate();
    const [movieName, setMovieName] = useState('');
    const [searchMoviesData, setSearchMoviesData] = useState();

    async function fecthSerchMovies(movieName) {
        const OMDb_API = `http://www.omdbapi.com/?s=${movieName}&apikey=c91a10f7`;
        console.log(movieName);

        axios.get(OMDb_API).then((res) => {
            if(res.data.Error==="Movie not found!") {
                navigate('*');
                return;
            }
            setSearchMoviesData((prev) => res);
            props.setSearchbox((prev) => res.data.Search);
        }).catch(error => console.log(error))
    }

    function changeHandler(event) {
        setMovieName(prev => event.target.value);
    }

    function searchHandler(event) {
        event.preventDefault();
        props.setSearchbox((prev) => undefined);
        setMovieName('');
        if (movieName === undefined || movieName === '') return;

        fecthSerchMovies(movieName);
        navigate('/movies/search');
    }
    useEffect(() => {
        console.log(searchMoviesData);
    }, [searchMoviesData]);

    return (
        <div className='header-container'>
            <div className='header-section'>
                <Link to='/' className='nav-items'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" className='imdbLogo' />
                </Link>
                <Link to='/movies/popular' className='nav-items'>Popular</Link>
                <Link to='/movies/upcoming' className='nav-items'>Up Coming</Link>
                <Link to='/movies/toprated' className='nav-items'>Top Rated</Link>
            </div>
            <form className='search-container' onSubmit={searchHandler}>
                <input type="text" placeholder='Search for Movies' name="search_box" id="search-id" onChange={changeHandler} value={movieName} />
                <button type='submit' id='submit-btn'>Search</button>
            </form>


        </div>
    );
}

export default Header;

// amit kuarmr ranjan hi this ia amit kuamr ranjan null 