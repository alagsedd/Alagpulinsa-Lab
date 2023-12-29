import { Input, Button } from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { database } from "../Firebase/FirebaseConfig";

const Messages = () => {
  const [message, setMessage] = useState("");
  const databaseCollectionRef = collection(database, "comments");

  const handleSubmitMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message) {
      addDoc(databaseCollectionRef, {
        // id: auth.currentUser?.uid,
        text: message,
        name: "Anonymous",
        createdAt: serverTimestamp(),
      })
        .then((res) => console.log(res, "success"))
        .catch((err) => console.error(err.message, "Failure"));
      setMessage("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmitMessage}>
        <Input
          width={"300px"}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          size={"md"}
          placeholder="Enter message here"
        ></Input>
        <Button type="submit" width={"70px"} colorScheme="messenger" m={1}>
          Submit
        </Button>
      </form>
    </>
  );
};

export default Messages;
