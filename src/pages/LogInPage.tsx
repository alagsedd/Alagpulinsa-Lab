import styles from "../styles/LogIn.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";

interface FormData {
  email: string;
  password: string;
}

const LogIn = () => {
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  if (
    getValues("email") === "dave@gmail.com" &&
    getValues("password") === "davealags"
  ) {
    navigate("/admin");
    return;
  }
  const signInUser = () => {
    signInWithEmailAndPassword(auth, getValues("email"), getValues("password"))
      .then((creds) => {
        navigate("/");
        console.log(creds.user, "submitted");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          setLoginError("auth/email-already-in-use");
        } else console.log(err.code);
      });
  };

  return (
    <>
      <div className={styles.container}>
        {" "}
        <div className={styles.parent}>
          <h1 className={styles.siteName}>
            <span>Alags Labs</span>
          </h1>
          <p className={styles.lure}>Trusted quality Healthcare.</p>

          <form className={styles.form} onSubmit={handleSubmit(signInUser)}>
            <Input
              {...register("email", { required: true })}
              className={styles.input}
              type="text"
              placeholder="Email"
            />
            {loginError === "auth/email-already-in-use" && (
              <p className="text-danger">Account already in use</p>
            )}
            {loginError === "auth/invalid-email" && (
              <p className="text-danger">Invalid Email</p>
            )}
            {loginError === "auth/invalid-password" && (
              <p className="text-danger">Incorrect password</p>
            )}
            {errors.email?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}

            <Input
              {...register("password", { required: true, minLength: 7 })}
              className={styles.input}
              type="text"
              placeholder="Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-danger">
                The username cannot be less than 5 characters
              </p>
            )}
            {errors.password?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}

            <Button colorScheme="messenger" type="submit" variant={"solid"}>
              {" "}
              Log In
            </Button>
          </form>

          <p className={styles.lastText}>
            Are you a new user?{" "}
            <Link className={styles.link} to={"/sign-up"}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
