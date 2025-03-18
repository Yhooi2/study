import Spinner from "../spinner/Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "../Message";
import useCities from "../../context/useCities";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  }

  const countries = [
    ...new Map(cities.map((city) => [city.country, city])).values(),
  ];

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.id} />
      ))}
    </ul>
  );
}

export default CountryList;
