import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Reason.module.css";
import r1 from "../assets/Reason Pics/R1.jpg";
import r2 from "../assets/Reason Pics/R2.jpg";
import r3 from "../assets/Reason Pics/R3.jpg";

export function Reason() {
  const { colorMode } = useColorMode();

  const paragrapgBackgroundcolor = () => {
    colorMode === "dark" && "rgb(11, 52, 95)";
  };
  return (
    <>
      <h2 className={styles.header2}>
        <span>Why A-Labs?</span>
      </h2>
      <div className={styles.box1}>
        <h3 className={styles.header3}>
          <span>1.Expertise and Experience</span>
        </h3>
        <p>
          We pride ourself on the extensive expertise my team brings to the
          table. With years of experience under our belts and a string of
          successful projects, we've honed our skills to provide clients with
          top-tier solutions that really make a difference.
        </p>
        <img
          src={r1}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />
      </div>

      <div className={styles.box2}>
        <h3 className={styles.header3}>
          <span>2.Quality Deliverables</span>
        </h3>
        <p style={{ color: `${paragrapgBackgroundcolor}` }}>
          We are dedicated to ensuring that every deliverable is of the highest
          quality. My goal is not just to meet expectations but to surpass them,
          consistently providing exceptional results that truly add value to my
          clients' projects.{" "}
        </p>
        <img
          src={r2}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />
      </div>

      <div className={styles.box2}>
        <h3 className={styles.header3}>
          <span>3.Strong Communication</span>
        </h3>
        <p>
          Effective communication is key in any successful collaboration. I make
          sure my clients are well-informed throughout the project, maintaining
          clear lines of communication to ensure we're always on the same page.{" "}
        </p>
        <img
          src={r3}
          alt="Your browser doesn't support this image"
          className={styles.image}
        />
      </div>
    </>
  );
}
