import { Link } from 'react-router-dom';
import './Card.css';
import React from 'react';

function Card(props) {
    const movie = props.movie;
    return (
        <>
            <Link to={`/movies/:${movie.imdbID}`} >
                <div className='movie-card-container'>

                    <img
                        src={movie.Poster}
                        className='card-movie-poster'
                    />
                    <div className="hover-details">
                        <h3>{movie.Title}</h3>
                        <p id='card-span'>
                            <span>{movie.Year}</span>
                        </p>
                    </div>
                </div >
            </Link>
        </>
    );
}

export default Card;