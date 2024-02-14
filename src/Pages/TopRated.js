import './TopRated.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '../Components/Card';
import React, { useState, useEffect } from 'react'
import CardSkletonLoadin from '../Components/CardSkletonLoadin';

function TopRated() {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    async function fetchTopRatedMovies() {
        const topRatedLink = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
        try {
            const topRatedResult = await fetch(topRatedLink);
            const topRatedData = await topRatedResult.json();
            setTopRatedMovies(topRatedData.results);
        } catch (error) {
            console.log("Error Fetching Upcoming Movies List ");
        }

    }
    useEffect(() => {
        fetchTopRatedMovies();
    }, []);
    return (
        <>
            <h2 className='upcoming-title'>Top Rated Movies </h2>
            {topRatedMovies.length == 0 ?
                <CardSkletonLoadin/>
                :
                <div className='upcomig-container'>
                    {
                        topRatedMovies.map((movie) => {
                            return <Card movie={movie} key={movie.id} />;
                        })
                    }
                </div>}
        </>
    )
}

export default TopRated