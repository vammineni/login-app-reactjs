import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { productCatalogDashboardData } from './ProductDashboard/testData';
import { ActionTypes } from './constants/actionTypes';
import { getFilteredResults } from './ProductDashboard/UpdateResults';

const defaultFilters = {
  name: '',
  price: [0, 50000],
  expiryDate: ''
}


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
  const productsSelector = useSelector(state => state.products);
  const dispatch = useDispatch();
  const [appliedFilters, setAppliedFilters] = React.useState(defaultFilters);

  useEffect(() => {
    dispatch({ type: ActionTypes.FiltersUpdate, appliedFilters });
    const data = getFilteredResults(productCatalogDashboardData, appliedFilters);
    dispatch({ type: ActionTypes.ResultsUpdate, data });
    //eslint-disable-next-line 
  }, [appliedFilters]);

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  const [selected/*, setSelected*/] = useState(getSelectedSidebarItem());

  const [inputs, setInputs] = React.useState(defaultFilters);

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.id]: event.target.value }));
  }

  const handlePriceChange = (id, value) => {
    setInputs(inputs => ({ ...inputs, [id]: value }));
  }
  const updateFilters = (filter) => {
    setAppliedFilters(appliedFilters => ({ ...appliedFilters, [filter.filterBy]: defaultFilters[filter.filterBy] }));
    setInputs({ ...appliedFilters, [filter.filterBy]: defaultFilters[filter.filterBy] });
  }

  const applyFilters = () => {
    setAppliedFilters(inputs);
  }

  const onReset = () => {
    setAppliedFilters(defaultFilters);
    setInputs(defaultFilters);
  }

  return (
    <>
      <PrimarySearchAppBar toggleSidebar={showSidebar} sidebar={sidebar} handleLogout={handleLogout} />
      <Grid container>
        {/* <Grid item style={{ width: sidebar ? '14%' : '0%', background: '#252831', minHeight: size.y - 56 }}>
          <Sidebar showSidebar={showSidebar} sidebar={sidebar} setPage={setPage} selected={selected} />
        </Grid> */}

        <Grid item /* xs={sidebar?2:false} */ style={{ width: sidebar ? '14%' : '0%' }}>
          <div style={{ border: '1px solid #dedede', minHeight: size.y - 56 }}>
            <FilterSidebar sidebar={sidebar} appliedFilters={inputs} handleInputChange={handleInputChange}
              onReset={onReset} applyFilters={applyFilters}
              handlePriceChange={handlePriceChange}
            />
          </div>
        </Grid>
        <Grid item style={{ width: sidebar ? '86%' : '100%' }}>
          <Grid>
            <PageHeader title={pageHeaders[selected.category] + (pageHeaders[selected.category] !== selected.title ? ' -> ' + selected.title : '')} />
          </Grid>
          <Grid style={{ padding: '5px' }}>
              <ProductCatalogDashboard data={productsSelector.data} appliedFilters={appliedFilters} updateFilters={updateFilters} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DashboardWithFilterSidebar;
