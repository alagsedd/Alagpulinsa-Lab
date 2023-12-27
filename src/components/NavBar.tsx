import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
// import SwitchPopOver from "./SwitchPopOver";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brandNameBox}>
          <span>Alagpulinsa Labs</span>
        </div>
        <ul className={styles.horizonNav}>
          <li>Our Company</li>
          <li>Our Products</li>
          <li>Health Tips</li>
          <li>Careers</li>
          <li>Sign up</li>
          <li>Contact Us</li>
        </ul>

        {showMenu ? (
          <IoIosCloseCircle
            className={styles.close}
            size="30"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <TiThMenu
            className={styles.menu}
            onClick={() => setShowMenu(true)}
            size="30"
          />
        )}
      </nav>

      {showMenu && (
        <ul className={styles.verticalNav}>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>Our Company</li>

          <li>Health Tips</li>
          <li>
            <Link to={"sign-up"}>Sign up</Link>
          </li>
          <li>Contact Us</li>
          <li>Pay your bill Online</li>
          <li>
            <Link className={styles.link} to={"/admin"}>
              Log in as Admin
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default NavBar;
