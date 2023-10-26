import footer_logo from "/assets/footer-logo.png";
import fb from "/assets/fb.png";
import instagram from "/assets/instagram.png";
import twitter from "/assets/twitter.png";
import linkedin from "/assets/linkedin.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className=" bg-[#2A2954] text-[#E4E3E3]  ">
        <div className="flex flex-col gap-16 lg:gap-0 lg:flex-row lg:justify-around pt-16 pl-6 pb-12">
          <div>
            <img src={footer_logo} alt="" />
            <div className=" mt-16">
              <p className="text-[#BBBFC3]">Follow us on Social Media</p>
              <div className="flex items-center mt-4 gap-6 ">
                <img src={fb} className=" w-6" alt="fb" />
                <img src={instagram} className=" w-6" alt="instagram" />
                <img src={twitter} className=" w-6" alt="twitter" />
                <img src={linkedin} className=" w-6" alt="linkedin" />
              </div>
            </div>
          </div>

          <div>
            <h3 className=" text-[#FCFCFC]">Company</h3>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="#">About Us</Link>
              <Link to="#">Pricing</Link>
              <Link to="#">Support</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </div>

          <div>
            <h3 className=" text-[#FCFCFC]">Legal</h3>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="#">Terms and Conditions</Link>
              <Link to="#">Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className=" text-center py-6">
          <img src="" alt="" />
          <p>InnovateX Team 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
