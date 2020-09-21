import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieComparison = props => {
  const [cinemaWorld, setCinemaWorld] = useState('');
  const [filmWorld, setFilmWorld] = useState('');

  useEffect(() => {
    async function fetchData() {
      const idCinema = props.match.params;
      const res = await axios
        .get(
          `https://challenge.lexicondigital.com.au/api/cinemaworld/movie/${idCinema.id}`,
          {
            headers: {
              'content-type': 'application/json',
              'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
            },
          }
        )
        .then(res => {
          const movie = res.data;
          setCinemaWorld(movie);
        })
        .catch(error => {
          console.error(error);
        });

      const idFilm = 'fw' + idCinema.id.slice(2, 9);

      const resFilm = await axios
        .get(
          `https://challenge.lexicondigital.com.au/api/filmworld/movie/${idFilm}`,
          {
            headers: {
              'content-type': 'application/json',
              'x-api-key': 'Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7',
            },
          }
        )
        .then(resFilm => {
          const movie = resFilm.data;
          setFilmWorld(movie);
        })
        .catch(error => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'> Prince's Theartre</h1>

        <div>
          <Link to='/movies'>
            <button className='button'>
              {' '}
              <i
                className='material-icons'
                style={{
                  fontSize: '26px',
                  verticalAlign: 'middle',
                  marginLeft: '-10px',
                }}
              >
                chevron_left
              </i>
              Back
            </button>
          </Link>
        </div>
        <div className='movie-single'>
          <img src={cinemaWorld.Poster} alt='' />
          <span>{cinemaWorld.Title} </span>
          <strong>Cinema World: ${cinemaWorld.Price} </strong>
          <strong>Film World: ${filmWorld.Price}</strong>
        </div>
      </div>
    </div>
  );
};

export default MovieComparison;
