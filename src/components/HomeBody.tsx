import { useEffect } from "react";
import styles from "../styles/HomeBody.module.css";
import HealthTips from "./HealthTips";
import { Reason } from "./Reason";
import AOS from "aos";
import "aos/dist/aos.css";
import { useColorMode } from "@chakra-ui/react";

const HomeBody = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { colorMode } = useColorMode();

  const borderStyle =
    colorMode === "dark" ? "1px solid rgb(19, 48, 79)" : "none";
  const backgroundStyle = colorMode === "dark" ? "#1a202c" : "#e9ecec";
  const spanColor = colorMode === "light" ? "#0d5f79" : "#fff";

  return (
    <>
      <div className={styles.parent}>
        <div className={styles.box1}>
          <h2 className={styles.header2}>
            <span style={{ color: spanColor }}>A Lab at Your convience</span>
          </h2>
          <p
            style={{
              color: `${colorMode === "light" ? "#6e7277" : "#d5e0ef"}`,
              border: borderStyle,
              backgroundColor: backgroundStyle,
            }}
            data-aos="flip-up"
          >
            <strong
              style={{ color: `${colorMode === "light" ? "#12947a" : "#fff"}` }}
              data-aos="fade-right"
            >
              {" "}
              Alagpulinsa Laboratories
            </strong>{" "}
            is pleased to offer its services to you and your patients. You can
            use our webpage to learn about the services we provide from the
            comfort of your own home. Alagpulinsa Laboratories provides numerous
            patient services with convenient hours. Our secure electronic health
            records guarantee confidential information for you and your patients
            by increasing lab productivity and providing you with the support
            and information that you need.
          </p>
        </div>

        <Reason />

        <HealthTips />
      </div>
    </>
  );
};

export default HomeBody;
