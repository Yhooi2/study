import CitiesContext from "./CitiesContext";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cityInfo, setCityInfo] = useState({});

  useEffect(() => {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCityInfo(id) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const date = await res.json();
      setCityInfo(date);
    } catch {
      alert("There was an error loading data...");
    } finally {
      setIsLoading(false);
    }
  }

  async function addCity(newCity) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const date = await res.json();
      setCities((cities) => [...cities, date]);
    } catch {
      alert("There was an error create city...");
    } finally {
      setIsLoading(false);
    }
  }
  async function deleteCity(id) {
    setIsLoading(true);
    try {
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert("There was an error delete city...");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, cityInfo, getCityInfo, addCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

export default CitiesProvider;
