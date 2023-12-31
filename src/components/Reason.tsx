// import { useColorMode } from "@chakra-ui/react";
import styles from "../styles/Reason.module.css";
import r1 from "../assets/Reason Pics/R1.jpg";
import r2 from "../assets/Reason Pics/R2.jpg";
import r3 from "../assets/Reason Pics/R3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useColorMode } from "@chakra-ui/react";

export function Reason() {
  // const { colorMode } = useColorMode();

  useEffect(() => {
    AOS.init();
  }, []);

  const { colorMode } = useColorMode();
  const backgroundStyle = colorMode === "dark" ? "#1a202c" : "#e9ecec";
  const borderStyle =
    colorMode === "dark" ? "1px solid rgb(19, 48, 79)" : "none";
  const spanColor = colorMode === "light" ? "#0d5f79" : "#fff";

  return (
    <>
      <h2 className={styles.header2}>
        <span style={{ color: spanColor }}>Why A-Labs?</span>
      </h2>
      <div data-aos="fade-up-right" className={styles.box1}>
        <h3 className={styles.header3}>
          <span
            style={{ color: `${colorMode === "light" ? "#12947a" : "#fff"}` }}
          >
            1.Expertise and Experience
          </span>
        </h3>
        <p
          style={{
            color: `${colorMode === "light" ? "#6e7277" : "#d5e0ef"}`,
            backgroundColor: backgroundStyle,
            border: borderStyle,
          }}
        >
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

      <div data-aos="fade-up-left" className={styles.box2}>
        <h3 className={styles.header3}>
          <span style={{ color: spanColor }}>2.Quality Deliverables</span>
        </h3>
        <p
          style={{
            color: `${colorMode === "light" ? "#6e7277" : "#d5e0ef"}`,
            backgroundColor: backgroundStyle,
          }}
        >
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

      <div data-aos="flip-left" className={styles.box2}>
        <h3 className={styles.header3}>
          <span
            style={{ color: `${colorMode === "light" ? "#12947a" : "#fff"}` }}
          >
            3.Strong Communication
          </span>
        </h3>
        <p
          style={{
            color: `${colorMode === "light" ? "#6e7277" : "#d5e0ef"}`,
            backgroundColor: backgroundStyle,
          }}
        >
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
