import styles from "../styles/Alert.module.css";
import { MdVerified } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  onClose: () => void;
}
const AlertDialogue = ({ onClose }: Props) => {
  return (
    <div className={styles.alert}>
      <div className={styles.icons}>
        <IoIosCloseCircleOutline onClick={onClose} size="30" />;
      </div>

      <div className={styles.main}>
        <MdVerified size="50" />
        <p>
          <h2 className={styles.header}>
            <span>Welcome aboard! 🌟</span>
          </h2>
          Glad you're here! Ready to explore, learn, and grow together?
        </p>
      </div>
    </div>
  );
};

export default AlertDialogue;
