import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function PageNav() {
  return (
    <div className={styles.nav}>
      <NavLink to="/">
        {" "}
        <Logo />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/pricing"> Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
