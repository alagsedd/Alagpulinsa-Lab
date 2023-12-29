import { Button } from "@chakra-ui/react";
import styles from "../styles/Logout.module.css";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseConfig";

const Logout = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  const handleLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <div className={styles.closeButton}>
          <IoClose className={styles.icon} size="25" />
        </div>
        <p>Are you sure you want to log out?</p>

        <p>Unsaved data would be lost</p>

        <div className={styles.buttonBox}>
          <Button onClick={handleGoBack} colorScheme="telegram">
            Back
          </Button>
          <Button onClick={handleLogOut} colorScheme="red">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
