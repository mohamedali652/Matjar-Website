import React from "react";
import { Link } from "react-router-dom";
import { SrcFooter } from "../../API/API";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsPhone } from "react-icons/bs";
import { FaLinkedinIn , FaInstagram , FaFacebookF  } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="cards">
            <div className="card">
              <h3>العنوان</h3>
              <p>مصر , القاهرة الجديدة <span><CiLocationArrow1/></span></p>
              <p>+2 0111 71 89 056 <span><BsPhone/></span></p>
              <div className="icons">
              <Link to="https://www.linkedin.com/in/mohamed-adel-226611286/"><FaLinkedinIn/></Link>
              <Link to="/"><FaInstagram/></Link>
              <Link to="/"><FaFacebookF/></Link>
              </div>
            </div>
            {SrcFooter?.map((e, index) => (
              <div className="card" key={index}>
                <h3>{e.title}</h3>
                <Link to="/">{e.srcOne}</Link>
                <Link to="/">{e.srcTwo}</Link>
                <Link to="/">{e.srcThree}</Link>
                <Link to="/">{e.srcFour}</Link>
              </div>
            ))}
          </div>
          <div className="cards">
           <div className="card">
            <h2>متجري</h2>
            <h3>موقع متجري الإلكتروني </h3>
            <h2>متجري أفضل موقع عربي لبيع المتاجر</h2>
            <Link to="https://www.linkedin.com/in/mohamed-adel-226611286/">قناتنا على اليوتيوب</Link>
           </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
