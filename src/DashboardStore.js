import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import DashboardWithFilterSidebar from "./DashboardWithFilterSidebar";

function DashboardStore() {

  return (
    <>
      <Provider store={store}>
        <DashboardWithFilterSidebar />
      </Provider>
    </>
  );
}

export default DashboardStore;
