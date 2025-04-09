import { useNavigate } from "react-router-dom";
import useAuth from "../context/useAuth";
import styles from "./User.module.css";

function User() {
  const { logout, user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logout();
    navigate("/");
  }
  if (!isAuthenticated) return;
  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;
