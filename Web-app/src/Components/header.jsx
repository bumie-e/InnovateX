import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import menu from "/assets/menu.png";

function Header() {
  return (
    <>
      <header className="bg-[#EFECF5] px-8">
        <div className=" flex-between mx-auto py-6 max-w-[1140px] ">
          <div>
            <img src={logo} alt="" />
          </div>
          {/* desktop nav */}
          <nav className="hidden lg:flex ">
            <div>
              <div>
                <a href="#">Features</a>
                <a href="#">How it Works</a>
                <a href="#">Pricing</a>
                <a href="#">Suport</a>
              </div>
            </div>
          </nav>

          <Link
            to="/login"
            className="hidden lg:block rounded-lg border-[#656565] border-[1px] py-[18px] px-14"
          >
            Login
          </Link>

          {/* harmburger menu */}
          <div className=" lg:hidden ">
            <img src={menu} alt="" />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
