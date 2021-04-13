import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
  
export const SidebarData = [
  {
    title: "Product Catalog",
    category: "productCatalog", 
    page: 'productCatalog',
    path: "/productDashboard",
    // icon: <AiIcons.AiFillHome />,
    icon: <FontAwesomeIcon icon={faBriefcase}/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    // expandDefault:true,
    subNav: [
        {
          title: "Dashboard",
          category: "productCatalog", 
          page: 'productDashboard',
          path: "/productDashboard",
          icon: <IoIcons.IoIosPaper />,
        }
    ],
  }
];