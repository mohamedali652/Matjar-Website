import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CiShoppingCart , CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../../Pictures/logo.png"
import Css from "./NavBar.module.css"
const NavBar = () => {
const [setClass, getClass] = useState(false);
const [GetHehight, ChangeHeight] = useState(false);
const ChangeHaights = ()=>{
  // console.log("Welcome", window.scrollY );
  if (window.scrollY >= 373) {
    ChangeHeight(true)
  }else{
    ChangeHeight(false)
  }
}
window.addEventListener("scroll" , ChangeHaights)
const Menu = () => {
    getClass(!setClass);
};
    return (
        <div>
        <div className={`${Css.header} ${GetHehight? Css.bg : ""}`}>
        <header className={`${Css.fixedNavBar}`}>
          <nav>
            <div className={Css.img}>
              <img src={logo} alt="" />
            </div>
            <ul className={`${Css.hide} ${setClass ? Css.show : ""}`}>
              <li><NavLink to="/">الرئيسيه</NavLink></li>
              {/* <li><NavLink to="about">خدماتنا</NavLink></li> */}
              <li className={Css.dropBar}> <Link>الخدمات <IoIosArrowDown /></Link>
            <ul className={Css.dropdownMenu}>
                <li><Link>تيست</Link></li>
                <li><Link>تيست</Link></li>
                <li><Link>تيست</Link></li>
                <li><Link>تيست</Link></li>
                <li><Link>تيست</Link></li>
            </ul>
              </li>
              <li><NavLink to="work">اعمالنا</NavLink></li>
              <li><NavLink to="work">تواصل معنا</NavLink></li>
              <li className={Css.dropBar}>  <Link>روابط سريعه<IoIosArrowDown /></Link>
                <ul className={Css.dropdownMenu}>
                    <li><Link>تيست</Link></li>
                    <li><Link>تيست</Link></li>
                    <li><Link>تيست</Link></li>
                </ul>
              </li>
            </ul>
            <div className={Css.icons}>
                <div className={Css.icon}>
                  <Link to="/"><CiShoppingCart  /></Link>
                  <Link to="/"> <CiSearch  /></Link>
              </div>
              <div className={Css.menu}>
                <button onClick={() => Menu()}>
                  <AiOutlineMenu />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
        </div>
    );
}

export default NavBar;
