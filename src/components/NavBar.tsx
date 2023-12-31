import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import { IoIosCloseCircle } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { RiTeamLine } from "react-icons/ri";
import { MdHealthAndSafety } from "react-icons/md";
import { MdContacts } from "react-icons/md";
import { FaAmazonPay } from "react-icons/fa6";
import { RiAdminLine } from "react-icons/ri";
import { LuSmilePlus } from "react-icons/lu";
import { auth } from "../Firebase/FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import ColorModeSwitch from "../chakraUI/ColorModeSwitch";
import { useColorMode } from "@chakra-ui/react";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode } = useColorMode();

  const [user] = useAuthState(auth);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.brandNameBox}>
          <span
            style={{ color: `${colorMode === "light" ? "#0d5f79" : "#fff"}` }}
          >
            Alagpulinsa Labs
          </span>
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
        <ul
          style={{ color: `${colorMode === "light" ? "#12947a" : "#fff"}` }}
          className={styles.verticalNav}
        >
          <li>
            <Link className={styles.link} to={"/"}>
              <IoIosHome className={styles.icon} />
              Home
            </Link>
          </li>
          <li>
            <RiTeamLine className={styles.icon} />
            Our Company
          </li>

          <li>
            <MdHealthAndSafety className={styles.icon} />
            Health Tips
          </li>
          <li>
            {!user ? (
              <Link className={styles.link} to={"sign-up"}>
                {" "}
                <LuSmilePlus className={styles.icon} />
                Sign up/Log in
              </Link>
            ) : (
              <Link to={"log-out"}>Log out</Link>
            )}
          </li>
          <li>
            <MdContacts className={styles.icon} />
            Contact Us
          </li>
          <li>
            <FaAmazonPay className={styles.icon} />
            Pay your bill Online
          </li>
          <li>
            <Link className={styles.link} to={"/admin"}>
              <RiAdminLine className={styles.icon} /> Log in as Admin
            </Link>
          </li>
        </ul>
      )}

      <ColorModeSwitch />
    </>
  );
};

export default NavBar;
