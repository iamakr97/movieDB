import { Link } from 'react-router-dom';
import './Card.css';
import { AiFillStar } from 'react-icons/ai';
import React from 'react';

function Card(props) {
    const movie = props.movie;
    let cardDesc = movie.overview;
    cardDesc = cardDesc.substring(0, 100);
    return (
        <Link to={`/movies/${movie.id}`} >
            <div className='movie-card-container'>

                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className='card-movie-poster'
                />
                <div className="hover-details">
                    <h3>{movie.title}</h3>
                    <p id='card-span'>
                        <span>{movie.release_date}</span>
                        <span>{movie.vote_average} <AiFillStar /> </span>
                    </p>
                    <p>{cardDesc}</p>
                </div>

            </div >
        </Link>
    );
}

export default Card;