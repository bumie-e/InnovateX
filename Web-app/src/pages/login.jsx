import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { setLogin } from "../store";
import { useDispatch } from "react-redux";
import { auth } from "../firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import image from "/assets/login.png";

function Login() {
  const [loading, setLoading] = useState(false);

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

  async function handleSubmit(e) {
    setLoading(true);

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
        setInput({
          email: "",
          password: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);

        toast(error.code);
        console.log(error.code);
      });
  }

  // login with google

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
                {loading ? "Submitting..." : "Log In"}
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
