import './Home.css';
import { AiFillStar } from 'react-icons/ai';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Popular from './Popular';

function Home(props) {
    const popular=props.popular;
    return (
        <div className='home-container'>
            <Carousel
                autoPlay="true"
                infiniteLoop="true"
                interval={4000}
                transitionTime={1000}
                showThumbs={false}
                showIndicators={true}
                className='crousel-container'
            >
                {
                    popular.map((movie) => {
                        return <div className='poster-container' key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                className='crousel-poster'

                            />
                            <div className="movie-details">
                                <p id='movie-titel'>{movie.original_title}</p>
                                <p id='release-data'>{movie.release_date}   {movie.vote_average}<AiFillStar /> </p>
                                <p id='overview'>{movie.overview}</p>
                            </div>
                        </div>;
                    })
                }
            </Carousel>
            
            <Popular popular={popular} />
        </div>
    );
}

export default Home;