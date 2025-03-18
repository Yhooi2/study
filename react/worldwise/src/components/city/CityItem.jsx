import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { formatDate } from "./formatDate";
import useCities from "../../context/useCities";

function CityItem({ city }) {
  const { cityInfo } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const { lat, lng } = position;

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          cityInfo?.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${lat}&lng=${lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
