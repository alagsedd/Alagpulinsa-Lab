import styles from "../styles/HealthCard.module.css";
import { useColorMode } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
  link: string;
}
const HealthCard = ({ description, link, title }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.card}>
      <p
        style={{
          color: `${colorMode === "light" ? "#6e7277" : "#d5e0ef"}`,
        }}
        className={styles.title}
      >
        {title}...
      </p>

      <p className={styles.description}>{description}</p>

      <a href={link} target="_blank" className={styles.link}>
        {" "}
        Read Article
      </a>
    </div>
  );
};

export default HealthCard;
