import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './MovieDetails.css';

function MovieDetails() {
    let { id } = useParams();
    const movieId = id;
    const [movieDetails, setMovieDetails] = useState([]);
    const navigate = useNavigate();
    async function fetchMovieDetailsData() {
        const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        try {
            const movieDetailsResponce = await fetch(movieDetailsUrl);
            const moveiDetailsData = await movieDetailsResponce.json();
            setMovieDetails(moveiDetailsData);
        } catch (error) {
            alert("Error Occurred ...");
        }
    }
    useEffect(() => {
        fetchMovieDetailsData();
    }, [])

    return (
        <div className='movie-details-container'>
            <button onClick={() => navigate(-1)}>Previous Page</button>
            <p>
                
                {movieDetails.length!=0 &&
                    <div>
                        {movieDetails.original_title}
                        <img src={`https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`} alt="Image" height={500} />
                    </div>
                }
            </p>
        </div>
    );
}

export default MovieDetails;