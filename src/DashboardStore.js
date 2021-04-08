import React from 'react';
import { Provider } from 'react-redux';
import ProductCatalogDashboard from './ProductCatalogDashboard';
import { store } from './store';
// import { getUser } from './Utils/Common';

function DashboardStore(props) {
  // const user = getUser();

  return (
    <div>
      <Provider store={store}>
        <ProductCatalogDashboard/>
      </Provider>
    </div>
  );
}

export default DashboardStore;
