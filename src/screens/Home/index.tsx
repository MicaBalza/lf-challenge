import { useFetch } from '../../hooks/useFetch';

import Button from '../../components/Button';

import styles from './index.module.scss';

import { IMG_URL, IMG_SIZES } from '../../constants/imagesConfig';

const Home = () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const { data} = useFetch(url);
  
  return (
    <>
      { data &&
        <div className={styles.home}>
          <img
            src={`${IMG_URL}${IMG_SIZES.original}/${data.results[0].backdrop_path}`} className={styles.backgroundImg}
          />
          <div className={styles.container}>
            <p className={styles.subheader}>Original de <span className="bold">Liteflix</span></p>
            <p className={styles.title}>{data.results[0].title}</p>
            <div>
              <Button text='Reproducir' />
              <Button text='Reproducir' variant='outlined' className={styles.rightButton} />
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Home;
