import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setLogin } from "../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import image from "/assets/login.png";
import login_with_google from "/assets/login_with_google.png";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  }

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = input;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const accessToken = user.accessToken;
        dispatch(
          setLogin({
            user: user,
            token: accessToken,
          })
        );
        toast("Login Successful"); // Display a success toast
        setTimeout(() => {
          navigate("/dashboard");
        }, 3000);
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // login with google
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
      .then((result) => {
        // This gives you the result of the redirect operation.
        // if (result.credential) {
        // This gives you the Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // }

        // The signed-in user info.
        const user = result.user;

        // You can access the user's basic information like name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const uid = user.uid;

        // You can do something with the user's information here.
        console.log("User Info:", user);

        // ...
      })
      .catch((error) => {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  return (
    <>
      <div className=" px-4 h-[100vh] flex items-center justify-center">
        <div className="flex justify-center items-center lg:gap-20 xl:gap-[150px]">
          {/* image */}
          <div className="hidden lg:block ">
            <img src={image} alt="" />
          </div>

          <div className="   px-[25px] lg:px-0 ">
            <h2 className=" font-semibold text-[28px] text-5xl">Login</h2>
            <button
              className="text-pry-col gap-[10px] rounded-lg mt-10 lg:mt-14 lg:mb-8 mb-6 border-[#5250CD] border-[1px] w-full py-[18px]  flex-center"
              onClick={loginWithGoogle}
            >
              <img src={login_with_google} alt="" />
              <span>Log in with Google</span>
            </button>
            <p>Or login with email</p>

            <form onSubmit={handleSubmit}>
              <div className=" my-8">
                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="text"
                    value={input.email}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div className=" text-red-500">{errors && errors.email}</div>
                </div>

                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    name="password"
                    type="password"
                    value={input.password}
                    onChange={handleChange}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                  {errors.password && (
                    <div className="text-[red]">{errors.password}</div>
                  )}
                </div>
              </div>
              <div className=" text-right">Forgot password</div>

              <button className=" bg-pry-col mt-4 text-white w-full py-4 rounded-lg">
                Log In
              </button>
              <ToastContainer />

              <div className=" mt-4 text-center">
                <span>Don&apos;t have an account yet?</span>
                <Link to="/register" className=" text-pry-col ml-2">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
