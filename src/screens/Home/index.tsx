import { useFetch } from '../../hooks/useFetch';

import styles from './index.module.scss';

import { IMG_BASE_URL, BACKDROP_SIZES } from '../../constants/imagesConfig';

const Home = () => {
  
  const { data} = useFetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
  
  return (
    <>
      { data &&
        <div className={styles.home}>
          <img src={`${IMG_BASE_URL}${BACKDROP_SIZES.original}/${data.results[0].backdrop_path}`} className={styles.backgroundImg} />
          <p className={styles.subheader}>Original de <span className="bold">Liteflix</span></p>
          <p className={styles.title}>{data.results[0].title}</p>
        </div>
      }
    </>
  );
};

export default Home;