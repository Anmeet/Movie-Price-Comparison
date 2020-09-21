import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';
import LoadingPage from './LoadingPage';

const DashboardPage = props => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading();
      const res = await axios
        .get('https://challenge.lexicondigital.com.au/api/filmworld/movies', {
          headers: {
            'content-type': 'application/json',
            'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
          },
        })
        .then(res => {
          const movie = res.data.Movies;
          setMovies(movie);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  if (loading) {
    return <LoadingPage />;
  } else {
    return (
      <div className='page-header'>
        <div className='content-container'>
          <h1 className='page-header__title'> Prince's Theartre </h1>
          <h2 className='page-header__subtitle'>Classic Movies At Home</h2>
          <p className='page-header__paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <div className='page-body'>
            {movies.map(movie => (
              <Movie
                key={movie.ID}
                id={movie.ID}
                poster={movie.Poster}
                title={movie.Title}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardPage;
