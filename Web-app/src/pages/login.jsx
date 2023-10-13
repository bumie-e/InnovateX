import { useState } from "react";
import { Link } from "react-router-dom";
import image from "/assets/login.png";
import login_with_google from "/assets/login_with_google.png";

function Login() {
  const [input, setInput] = useState({
    nameOrEmail: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setErrors({ ...errors, [name]: "" });
  }

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
            <button className="text-pry-col gap-[10px] rounded-lg mt-10 lg:mt-14 lg:mb-8 mb-6 border-[#5250CD] border-[1px] w-full py-[18px]  flex-center">
              <img src={login_with_google} alt="" />
              <span>Log in with Google</span>
            </button>
            <p>Or login with email</p>

            <form>
              <div className=" my-8">
                <div className="mb-3 settings-form-field">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    name="nameOrEmail"
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
