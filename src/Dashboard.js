import React from 'react';
import ProductCatalog from './ProductCatalog';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();

  return (
    <div>
      Welcome {user}!<br /><br />
      <ProductCatalog/>
    </div>
  );
}

export default Dashboard;
