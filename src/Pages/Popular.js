import './Popular.css';
import React from 'react';
import Card from '../Components/Card';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkletonLoadin from '../Components/CardSkletonLoadin';
function Popular(props) {
  const popularMoies = props.popular;
  return (
    <>
      <h2 className='upcoming-title'>Popular Movies </h2>
      {popularMoies.length == 0 ?
        <CardSkletonLoadin />
        :
        <div className='upcomig-container'>
          {
            popularMoies.map((movie) => {
              return <Card movie={movie} key={movie.id}/>;
            })
          }
        </div>}
    </>
  );
}

export default Popular;