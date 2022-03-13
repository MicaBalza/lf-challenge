import { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';

// import { useLocalStorage } from '../../hooks/useLocalStorage';

import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import MovieThumbnail from '../../components/MovieThumbnail';

import plus from '../../assets/img/plus.svg';
import play from '../../assets/img/play.svg';

import styles from './index.module.scss';

import { IMG_URL, IMG_SIZES } from '../../constants/imagesConfig';
import { DROPDOWN_OPTIONS } from './constants';

const Home = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const { data } = useFetch(url);

  // const [myMovies] = useLocalStorage('h', '');
  // console.log(myMovies);

  const [movieCategory, setMovieCategory] = useState('popular');

  return (
    <>
      {data && (
        <div
          className={styles.home}
          style={{
            backgroundImage: `url(${IMG_URL}${IMG_SIZES.original}/${data.results[0].backdrop_path})`,
          }}
        >
          <div className={styles.container}>
            <div className={styles.mainMovie}>
              <p className={styles.subheader}>
                Original de <span className="bold">Liteflix</span>
              </p>
              <p className={styles.title}>{data.results[0].title}</p>
              <div>
                <Button text="Reproducir" iconSrc={play} />
                <Button
                  text="Mi lista"
                  variant="outlined"
                  className={styles.secondaryButton}
                  iconSrc={plus}
                />
              </div>
            </div>
            <div className={styles.otherMovies}>
              <Dropdown
                options={DROPDOWN_OPTIONS}
                className={styles.dropdown}
                setOption={setMovieCategory}
              />
              <div className={styles.movies}>
                {movieCategory === 'popular' &&
                  data.results
                    .slice(1, 5)
                    .map((movie: any) => (
                      <MovieThumbnail
                        key={movie.id}
                        title={movie.title}
                        imgUrl={`${IMG_URL}${IMG_SIZES.w300}/${movie.backdrop_path}`}
                        className={styles.movie}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
