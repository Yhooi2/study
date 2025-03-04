import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      Position lat={lat}, lng={lng}
      <button onClick={() => setSearchParams({ lat: 50, lng: 100 })}>
        new position
      </button>
    </div>
  );
}

export default Map;
