import styles from "../styles/Admin.module.css";
import { FaUsers } from "react-icons/fa";
import { IoMailUnread } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Admin = () => {
  return (
    <>
      <div className={styles.parent}>
        <h2 className={styles.header}>
          <span>Dashboard</span>
        </h2>
        <div className={styles.usersBox}>
          <FaUsers className={styles.icon} size="30" />
          <p>Users</p>
        </div>

        <div className={styles.messagesBox}>
          {" "}
          <IoMailUnread className={styles.icon} size="30" />
          <p>Comments</p>
        </div>

        <div className={styles.messagesBox}>
          {" "}
          <MdAttachMoney className={styles.icon} size="30" />
          <p>Payments</p>
        </div>

        <div className={styles.messagesBox}>
          {" "}
          <CgProfile className={styles.icon} size="30" />
          <p>Set up Admin Profile</p>
        </div>
      </div>
    </>
  );
};

export default Admin;
