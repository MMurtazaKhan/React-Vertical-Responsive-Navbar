import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {BiCircle} from 'react-icons/bi';
import * as Io5 from "react-icons/io5"
import {HiOutlineDocumentReport} from 'react-icons/hi';


export const SideBarData = [
    
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome/>,
        
    },
    {
        title: "Report",
        path: "/",
        icon: <HiOutlineDocumentReport/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav : [
            {
                title: "Analysis",
                path: "/analysis",
                icon: <Io5.IoAnalyticsOutline/>
            },
            {
                title: "Bar Charts",
                path: "/bar-chart",
                icon: <AiIcons.AiOutlineBarChart/>
            },
            

        ]
    },

    {
        title: "UI Elements",
        path: "/",
        icon: <BiCircle/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,

        subNav : [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <AiIcons.AiFillDashboard/>
            },
            {
                title: "Details",
                path: "/details",
                icon: <AiIcons.AiOutlineFolderView/>
            },
            

        ]
    },

    {
        title: "Form Elements",
        path: "/form-elements",
        icon: <AiIcons.AiOutlineForm/>
    },

    {
        title: "Contact",
        path: "/contact",
        icon: <AiIcons.AiOutlineContacts/>
    },

    {
        title: "About Us",
        path: "/about",
        icon: <Io5.IoInformationCircleOutline/>
    },

    {
        title: "Documentation",
        path: "/documentation",
        icon: <Io5.IoDocumentOutline/>
    },
]