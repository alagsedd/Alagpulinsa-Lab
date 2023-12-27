import HealthCard from "../cards/HealthCard";
import styles from "../styles/HealthTips.module.css";

const HealthTips = () => {
  const healthTips = [
    {
      id: 1,
      title: "I can fit whatever health tip you have here ",
      description: "",
      link: "Read More",
    },
    {
      id: 2,
      title: "I can do same here",
      description: "",
      link: "Read More",
    },
    {
      id: 3,
      title: "Women are 30 Times More Likely to Have UTI than Men: Here's Why",
      description: "",
      link: "Read More",
    },
    {
      id: 4,
      title: "Women are 30 Times More Likely to Have UTI than Men: Here's Why",
      description: "",
      link: "Read More",
    },
  ];

  return (
    <>
      <h1 className={styles.header1}>
        <span>Be well and stay healthy</span>
      </h1>
      <div className={styles.parent}>
        <div className={styles.cardsContainer}>
          {healthTips.map((item) => (
            <HealthCard
              key={item.id}
              description={item.description}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HealthTips;
