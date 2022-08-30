import React, { useState, useEffect } from 'react';
import "./style.css";
import {
    FaBars,
}from "react-icons/fa";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SideBarData} from "./SideNavData"
import SubMenu from './SubMenu';

const SideNav = () => {
    const [sidebar, setSidebar] = useState(false);
    const [text, setText] = useState("Overview")

    const showSidebar = () => setSidebar(!sidebar);

    // useEffect(()=>{
    //     setText(text);
    // }, [])

    const sideBarCss = {
         left:  sidebar ? '0' : '-100%',
         background: "#15171c",
         width: "250px",
         height: "100vh",
         display: "flex",
         justifyContent: "center",
         position: "fixed",
         top: 0,
         transition: "350ms",
         zIndex: 10

    }

    const changeText = ({txt}) => {
        setText(txt);
    }
  return (
    <>
    <div className='Nav'>
        <Link to="" className='NavLink'>
            <FaBars className='Bar-icon' onClick={showSidebar}/>   
        </Link>
    </div>

    <nav className='SideBarNav' style={sideBarCss}>
        <div className='SideBarWrap'>
            <Link className='NavLink' to="" >
                <FaIcons.FaArrowLeft onClick={showSidebar} />
            </Link>

            {SideBarData.map((item, index)=>{
              
                return( <SubMenu item={item} key = {index}/>
                   
                );
            })}
        </div>
    </nav>

    
    </>
  )
}

export default SideNav