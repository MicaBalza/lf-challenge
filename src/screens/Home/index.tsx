import { useMemo, useState } from 'react';
import classNames from 'classnames';

import { useFetch } from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import Button from '../../components/Button';
import Dropdown from '../../components/Dropdown';
import MovieThumbnail from '../../components/MovieThumbnail';
import Spinner from '../../components/Spinner';

import { plus, play } from '../../assets/img';
import styles from './index.module.scss';

import { IMG_URL, IMG_SIZES } from '../../constants/imagesConfig';
import { DROPDOWN_OPTIONS } from './constants';

const Home = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const { data, loading } = useFetch(url);
  const [myMovies] = useLocalStorage('userMovies', '');
  const [movieCategory, setMovieCategory] = useState('popular');

  const moviesList = useMemo(() => {
    if (data) {
      return movieCategory === 'popular'
        ? data.results.slice(1, 5)
        : JSON.parse(myMovies || '[]');
    }
  }, [data, movieCategory, myMovies]);

  const renderMovies = (data: []) => {
    return data.map((movie: any) => (
      <MovieThumbnail
        key={movie.id || movie.title}
        title={movie.title}
        imgUrl={
          movie.backdrop_path
            ? `${IMG_URL}${IMG_SIZES.w300}/${movie.backdrop_path}`
            : movie.img
        }
        rating={movie.vote_average || '-'}
        year={movie.release_date?.slice(0, 4) || '-'}
        className={styles.movie}
      />
    ));
  };

  return (
    <>
      <div
        className={classNames(styles.splash, {
          [styles.hideSplash]: !loading,
        })}
      >
        <Spinner className={styles.spinner} />
      </div>
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
              <div className={styles.buttons}>
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
              <div className={styles.movies}>{renderMovies(moviesList)}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
