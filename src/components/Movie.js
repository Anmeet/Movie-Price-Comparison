import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ id, poster, title }) => {
  return (
    <div className='movie'>
      <img src={poster} alt='' />
      <Link to={`/movie/${id}`}><span>{title}</span></Link>
    </div>
  );
};

export default Movie;
