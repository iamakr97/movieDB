
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import { useState, useEffect } from 'react';
import Upcoming from './Pages/Upcoming';
import TopRated from './Pages/TopRated';
import Popular from './Pages/Popular';
import MovieDetails from './Pages/MovieDetails';
import SearchMovies from './Pages/SearchMovies';
import ErrorPage from './Pages/ErrorPage';

function App() {
  const [popular, setPopular] = useState([]);
  const [searchbox, setSearchbox] = useState([]);
  async function fetchData() {
    const popularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US";
    try {
      const responce = await fetch(popularUrl);
      const data = await responce.json();

      setPopular(data.results);
    } catch (error) {
      alert("Error Occurred ...");
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header setSearchbox={setSearchbox} searchbox={searchbox} />
      <Routes>
        <Route path='/' element={<Home popular={popular} />} />
        <Route path='/movies/popular' element={<Popular popular={popular} />} />
        <Route path='/movies/upcoming' element={<Upcoming />} />
        <Route path='/movies/toprated' element={<TopRated />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/search' element={<SearchMovies searchbox={searchbox} />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
