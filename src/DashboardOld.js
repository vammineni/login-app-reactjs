import React from 'react';
import { Provider } from 'react-redux';
// import ProductCatalogDashboard from './ProductCatalogDashboard';
import ProductCatalogDashboard from './ProductDashboard';
// import { getUser } from './Utils/Common';
import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";

import PageHeader from './Sidebar/PageHeader';
import PrimarySearchAppBar from './Sidebar/PrimarySearchAppBar';
import { SidebarData } from './Sidebar/SidebarData';
// import Sidebar from "./Sidebar/Sidebar";
import FilterSidebar from "./Sidebar/FilterSidebar";

import { removeUserSession } from './Utils/Common';

function getSelectedSidebarItem() {
  const currentPathName = window.location.pathname;
  if (!currentPathName || currentPathName === "/") {
    return { category: "productPortfolio", page: 'productPortfolio' };
  }
  let sel = {};
  SidebarData.map((item) => {
    return item.subNav && item.subNav.map((subItem) => {
      if (subItem.path === currentPathName) {
        sel = subItem;
      }
      return subItem;
    })
  });
  return sel;
}

const pageHeaders = {
  'productCatalog': 'Product Catalog'
};
function DashboardWithFilterSidebar() {

  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight
  });
  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight
    });
  useEffect(() => (window.onresize = updateSize), []);


  const handleLogout = () => {
    removeUserSession();
  }

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  const [selected, setSelected] = useState(getSelectedSidebarItem());
  const setPage = (item) => {
    setSelected(item);
  }
  return (
    <>
      <PrimarySearchAppBar toggleSidebar={showSidebar} handleLogout={handleLogout} />
      <Grid container>
        {/* <Grid item style={{ width: sidebar ? '14%' : '0%', background: '#252831', minHeight: size.y - 56 }}>
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} setPage={setPage} selected={selected} />
        </Grid> */}
        
        <Grid item /* xs={sidebar?2:false} */ style={{ width: sidebar ? '14%' : '0%', border:'1px solid #dedede', minHeight: size.y - 56 }}>
          <FilterSidebar showSidebar={showSidebar} sidebar={sidebar} setPage={setPage} selected={selected} />
        </Grid>
        <Grid item style={{ width: sidebar ? '86%' : '100%' }}>
          <Grid>
            <PageHeader title={pageHeaders[selected.category] + (pageHeaders[selected.category] !== selected.title ? ' -> ' + selected.title : '')} />
          </Grid>
          <Grid style={{ padding: '5px' }}>
            <div>
                <ProductCatalogDashboard />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardWithFilterSidebar;
