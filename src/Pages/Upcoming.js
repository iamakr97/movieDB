import './Upcoming.css';
import 'react-loading-skeleton/dist/skeleton.css';
import Card from '../Components/Card';
import React, { useEffect, useState } from 'react';
import CardSkletonLoadin from '../Components/CardSkletonLoadin';

function Upcoming() {
    const [upComingMovies, setUpComingMovies] = useState([]);

    async function fetchUpcomingMovies() {
        const upComing = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US';
        try {
            const upComingResult = await fetch(upComing);
            const upComingData = await upComingResult.json();
            setUpComingMovies(upComingData.results);
        } catch (error) {
            console.log("Error Fetching Upcoming Movies List ");
        }

    }
    useEffect(() => {
        fetchUpcomingMovies();
    }, []);
    return (
        <>
            <h2 className='upcoming-title'>UpComing Movies </h2>
            {upComingMovies.length == 0 ?
                <CardSkletonLoadin/>
                :
                <div className='upcomig-container'>
                    {
                        upComingMovies.map((movie) => {
                            return <Card movie={movie} key={movie.id} />;
                        })
                    }
                </div>}
        </>
    );
}

export default Upcoming;