import { playCircle } from '../../assets/img';
import { ReactComponent as PlayCircle } from '../../assets/img/play-circle.svg';
import styles from './index.module.scss';

interface Props {
  title: string;
  imgUrl?: string;
  rating?: string;
  year?: string;
  className?: string;
}

const MovieThumbnail = ({ title, imgUrl, rating, year, className }: Props) => {
  return (
    <div
      className={`${styles.container} ${className}`}
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div className={styles.gradient} />
      <div className={styles.hoverGradient} />
      <div className={styles.content}>
        <img src={playCircle} alt={`Reproducir ${title}`} />
        <p className={styles.title}>{title}</p>
      </div>
      <div className={styles.hoverContent}>
        <div className={styles.movieTitle}>
          <PlayCircle className={styles.playIcon} />
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.movieInfo}>
          <p className={styles.rating}>{rating}</p>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieThumbnail;
