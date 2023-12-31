import { Button, Stack, Textarea, useColorMode } from "@chakra-ui/react";
import styles from "../styles/Footer.module.css";
import { useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { database } from "../Firebase/FirebaseConfig";

const Footer = () => {
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const { colorMode } = useColorMode();
  const commentsDBRef = collection(database, "comments");

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      addDoc(commentsDBRef, {
        comment: message,
        createdAt: serverTimestamp(),
        name: "Anonymous",
      });
      setMessage("");
    }
  };

  const backgroundStyle = colorMode === "dark" ? "#1a202c" : "#e9ecec";
  const spanColor = colorMode === "light" ? "#0d5f79" : "#fff";
  const borderStyle =
    colorMode === "dark" ? "1px solid rgb(19, 48, 79)" : "none";

  return (
    <div style={{ backgroundColor: backgroundStyle }} className={styles.parent}>
      <div style={{ border: borderStyle }} className={styles.child1}>
        <h3 className={styles.header}>
          <span style={{ color: spanColor }} className={styles.name}>
            A-Labs
          </span>
        </h3>
        <p>For more info, visit us call us on</p>
        <ul>
          <li>0303094030303</li>
          <li>03394030303</li>
        </ul>
      </div>

      <div style={{ border: borderStyle }} className={styles.child}>
        <p> Leave a message</p>

        <form onSubmit={handleSubmission}>
          <Stack>
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter message here"
              size="sm"
            />
            <Button
              type="submit"
              onClick={() => setSubmit(true)}
              variant={"solid"}
              colorScheme="messenger"
            >
              Submit
            </Button>
          </Stack>
        </form>
      </div>

      {submit && (
        <div className={styles.success}>
          {" "}
          <IoMdCloseCircle
            onClick={() => setSubmit(false)}
            size="25"
            className={styles.close}
          />
          <div className={styles.inner}>
            {" "}
            <MdVerified className={styles.icon} size="30" />
            <p> Message submitted</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
