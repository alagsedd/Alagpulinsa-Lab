import styles from "../styles/HomeBody.module.css";
import HealthTips from "./HealthTips";
import { Reason } from "./Reason";

const HomeBody = () => {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.box1}>
          <h2 className={styles.header2}>
            <span>A Lab at Your convience</span>
          </h2>
          <p>
            <strong> Alapulinsa Laboratories</strong> is pleased to offer its
            services to you and your patients. You can use our webpage to learn
            about the services we provide from the comfort of your own home.
            Alagpulinsa Laboratories provides numerous patient services with
            convenient hours. Our secure electronic health records guarantee
            confidential information for you and your patients by increasing lab
            productivity and providing you with the support and information that
            you need.
          </p>
        </div>

        <Reason />

        <HealthTips />
      </div>
    </>
  );
};

export default HomeBody;
{
  /* <h2 className={styles.header1}>
            <span>Be well and stay healthy</span>
          </h2> */
}
