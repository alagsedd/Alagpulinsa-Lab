import {
  FormLabel,
  Input,
  FormHelperText,
  FormControl,
  Button,
} from "@chakra-ui/react";
import styles from "../styles/SignupPage.module.css";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase/FirebaseConfig";
// import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";
import AlertDialogue from "../components/AlertDialogue";
import { useNavigate } from "react-router-dom";

interface FormData {
  username: string;
  email: string;
  password: string;
}
const SignupPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  // const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { getValues } = useForm<FormData>();

  const createNewUser = () => {
    createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res, "Success");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleClose = () => {
    setShowAlert(false);
  };

  //   const handelSubmission = () => {};

  return (
    <>
      {showAlert && <AlertDialogue onClose={handleClose} />}
      <div className={styles.parent}>
        <div className={styles.nameBox}>
          {" "}
          <span className={styles.name}>A-Labs</span>
          <p>Trusted Quality Healthcare</p>
        </div>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input type="text" />

          <FormLabel>Email address</FormLabel>
          <Input type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel>Password</FormLabel>
          <Input type="password" />
          <FormHelperText>We'll never share your password.</FormHelperText>
        </FormControl>

        <div className={styles.buttonBox}>
          <Button onClick={createNewUser} colorScheme={"messenger"}>
            Sign up
          </Button>

          <span>Or</span>

          <Button onClick={signUpWithGoogle} colorScheme={"messenger"}>
            Continue with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
