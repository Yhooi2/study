import CityItem from "./CityItem";
import Spinner from "../spinner/Spinner";
import styles from "./CityList.module.css";
import Message from "../Message";
import useCities from "../../context/useCities";

function CityList() {
  const { cities, isLoading } = useCities();
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  if (isLoading) return <Spinner />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
