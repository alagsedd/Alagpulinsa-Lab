import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import styles from "../styles/SignupPage.module.css";
import { auth, googleProvider } from "../Firebase/FirebaseConfig";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { useState } from "react";
import { Button, Input, Stack } from "@chakra-ui/react";

interface FormData {
  email: string;
  username: string;
  password: string;
}

const Auth = () => {
  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user, "succesful");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const createNewAccount = () => {
    createUserWithEmailAndPassword(
      auth,
      getValues("email"),
      getValues("password")
    )
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

          <form
            className={styles.form}
            onSubmit={handleSubmit(createNewAccount)}
          >
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
              {...register("username", { required: true, maxLength: 6 })}
              className={styles.input}
              type="text"
              placeholder="Username"
            />
            {errors.username?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
            {errors.username?.type === "maxLength" && (
              <p className="text-danger">
                The username cannot be more than 6 characters
              </p>
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
              Sign up
            </Button>
          </form>

          <span className={styles.or}>OR</span>

          <Stack spacing={4} direction={"column"} className={styles.alt}>
            {/* <p> Don't have an account? </p> */}

            <Button
              colorScheme="messenger"
              leftIcon={<SiGmail />}
              onClick={signInWithGoogle}
              variant={"solid"}
            >
              Sign in With Google
            </Button>
          </Stack>
          <p>
            Already have an account?{" "}
            <Link className={styles.link} to={"/log-in"}>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Auth;
