import play from '../../assets/img/play-circle.svg';

import styles from './index.module.scss';

interface Props {
    title: string;
    imgUrl?: string;
    className?: string;
}

const MovieThumbnail = ({ title, imgUrl, className }: Props) => {
  return (
    <div className={`${styles.container} ${className}`} style={{ backgroundImage: `url(${imgUrl})`}}>
      <div className={styles.gradient} />
      <div className={styles.content}>
        <img src={play} className={styles.playIcon} />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  );
};

export default MovieThumbnail;
