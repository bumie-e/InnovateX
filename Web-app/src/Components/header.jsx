import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

function Header() {
  return (
    <>
      <header className="flex-between mx-auto py-6 max-w-[1140px] ">
        <div>
          <img src={logo} alt="" />
        </div>
        {/* desktop nav */}
        <nav className=" ">
          <div>
            <div>
              <a href="#">Features</a>
              <a href="#">How it Works</a>
              <a href="#">Pricing</a>
              <a href="#">Suport</a>
            </div>
          </div>
        </nav>

        <Link to="/login" className="">
          Login
        </Link>
      </header>
    </>
  );
}

export default Header;
