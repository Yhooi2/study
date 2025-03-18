import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import useCities from "../../context/useCities";
import Spinner from "../spinner/Spinner";
import { formatDate } from "./formatDate";
import { useEffect } from "react";
import ButtonBack from "../ButtonBack";

function City() {
  const { id } = useParams();
  const { isLoading, cityInfo, getCityInfo } = useCities();
  useEffect(
    function () {
      getCityInfo(id);
    },
    [id]
  );
  const { cityName, emoji, date, notes } = cityInfo;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>
      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>
      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}
      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
      <div>
        <ButtonBack />
      </div>
    </div>
  );
}

export default City;
