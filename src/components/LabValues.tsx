import styles from "../styles/LabValues.module.css";
import { FaMicroscope } from "react-icons/fa6";
import { LuTarget } from "react-icons/lu";
import { MdVerifiedUser } from "react-icons/md";

const LabValues = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        {" "}
        <div className={styles.box1}>
          <h2 className={styles.header}>
            <FaMicroscope size="25" /> <span>Mission</span>
          </h2>
          <p>
            To understand the mechanisms by which abnormal function of the bone
            marrow and hematopoietic stem cells may contribute to the etiology
            of disease, such as type 1 diabetes and associated cardiovascular
            disease, and to harness these insights for disease prevention and
            treatment.
          </p>
        </div>
        <div className={styles.box2}>
          <h2 className={styles.header}>
            <LuTarget size="25" /> <span>Research Focus</span>
          </h2>
          <p>
            The current focus of the Alagpulinsa lab is to use single cell
            analyses, genetic and pharmacologic manipulations, and targeted
            therapeutic delivery strategies to define alterations in the bone
            marrow and to treat type 1 diabetes in preclinical murine models.
          </p>
        </div>
        <div className={styles.box3}>
          {" "}
          <h2 className={styles.header}>
            <MdVerifiedUser size="25" /> <span>Vic Project List</span>
          </h2>
          <ul className={styles.ul}>
            <li>
              Single cell analysis of the bone marrow microenvironment in type 1
              diabetes
            </li>
            <li>
              Development of strategies to restore bone marrow function in type
              1 diabetes
            </li>
            <li>
              Development of strategies for targeted delivery of therapeutic
              cargo to the pancreatic islets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LabValues;
