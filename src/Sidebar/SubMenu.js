import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
  
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 40px;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    background: #252831;
    //border-left: 4px solid green;
    cursor: pointer;
  }
`;
  
const SidebarLabel = styled.span`
  margin-left: 10px;
`;
  
const DropdownLink = styled(Link)`
  background: #252831;
  height: 40px;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;
  border-width:0px 0px 0px 4px;
  border-style:solid;
  border-color:#252831;
  
  &:hover {
    //background: green;
    background: #3f51b5;
    color:#fff;
    border-color:#3f51b5;
    cursor: pointer;
  }
`;
  
const SubMenu = ({ item, setPage, selected }) => {
  const [subnav, setSubnav] = useState(selected.category === item.category || false);
  
  const showSubnav = () => setSubnav(!subnav);
  const onClickHandle = (i) => {
      setPage(i);
  }
  return (
    <>
      <SidebarLink to={'#'} //to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel //onClick={()=>onClickHandle(item)}
          >{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={()=>onClickHandle(item)}
            style={{borderColor:(selected.page===item.page?'#3f51b5':'')}}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};
  
export default SubMenu;