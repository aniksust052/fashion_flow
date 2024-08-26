import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Header =  ( {data} ) => {
    const {theme, setTheme} = useContext(ThemeContext);
    function toggle(){
        setTheme((prev) => !prev);
        console.log(theme);
    }
    return (
        <div className="head bg-drk">
            <div className="logo bg-c-pink">
                <div className="search-bar flx-wrp bg-c-pink res-cntre">
                    <a className="bg-c-pink" href="#"><img className="bg-c-pink" src={data.fashionFlowIcon} alt="Fashion Flow" /></a>
                    <div className="search">
                        <input type="search" className="search-box bg-c-pink col-outline" />
                        <img className="bg-c-pink" src={data.searchIcon} alt="Search" />
                    </div>
                    <div className="login-mode bg-c-pink">
                        <a className="login bg-c-pink" href="#">
                            {data.log} <img src={data.loginIcon} alt={data.log} />
                        </a>
                        <a className="mode bg-c-pink" href="#" onClick={toggle}>
                            {data.mode} <img className="bg-c-pink" src={data.modeChangeIcon} alt={data.mode} />
                        </a>
                    </div>
                </div>
            </div>
            <ul className="nav-bar flx-gp-32 flx-wrp">
                {
                    data.navBar.map( (el, i) => {
                        return (
                            <li key={i}>
                                <a className={(el === 'home'? "txt-upper pink-col f-wt" : "u-list-item txt-upper bg-drk")} href="#">{el}</a>
                            </li>
                        );
                    } )
                }
            </ul>
        </div>
    );
  }
  
  export default Header
  