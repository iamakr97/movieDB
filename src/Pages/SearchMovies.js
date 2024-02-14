import './SearchMovies.css';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import SearchCard from '../Components/SearchCard';
import CardSkletonLoadin from '../Components/CardSkletonLoadin';
import ErrorPage from './ErrorPage';
import { useNavigate } from 'react-router-dom';

function SearchMovies(props) {

    // console.log(props.searchbox)

    return (
        <>
            {((props.searchbox)===undefined || (props.searchbox).length===0) ?
                (<CardSkletonLoadin />):
                <div className='search-movies-container'>
                    {(props.searchbox).map((movie, index) => {
                        return <SearchCard movie={movie} key={index} />
                    })}
                </div>    
            }
        </>
    );
}

export default SearchMovies;