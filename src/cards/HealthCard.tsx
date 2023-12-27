import styles from "../styles/HealthCard.module.css";

interface Props {
  title: string;
  description: string;
  link: string;
}
const HealthCard = ({ description, link, title }: Props) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}...</p>

      <p className={styles.description}>{description}</p>

      <a href={link} target="_blank" className={styles.link}>
        {" "}
        Read Article
      </a>
    </div>
  );
};

export default HealthCard;
