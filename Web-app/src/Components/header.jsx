import { Link } from "react-router-dom";
import logo from "/assets/logo.png";
import menu from "/assets/menu.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#EFECF5] px-8">
        <div className=" flex-between mx-auto py-6 max-w-[1140px] ">
          <div>
            <img src={logo} width={121} alt="" />
          </div>
          {/* desktop nav */}
          <nav className="hidden lg:flex ">
            <div>
              <div className="flex gap-8 ">
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
            <img
              src={menu}
              width={32}
              onClick={() => setIsOpen(!isOpen)}
              alt=""
            />
          </div>

          {/* mobile nav */}
          <div
            className={`${
              !isOpen ? "hidden" : "block w-[80vw] md:w-[50vw] transition-all"
            } 
              lg:hidden drop-shadow-mobile-nav
           border-[#E1E6EF] border-y-[0.298611px]  
           border-solid pb-10 pt-12 fixed bottom-0 overflow-auto top-[83px] right-0 bg-white z-10`}
          >
            <div className="px-4 pt-2 pb-3">
              <h4>
                <Link className="text-pry-blue-600 block mb-8 " to="/">
                  Home
                </Link>
              </h4>

              <h6 className="mt-[50px] mb-8 w-[217px]">
                Navigating immigration? We have visa options tailored for you
              </h6>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
