import React from 'react'
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import { RenderAppliedFilters } from '../Components/Filters';


function ProductCatalogDashboard({ data, appliedFilters, updateFilters }) {

    return (
        <>
            <Grid container >
                {/* <Grid container style={{ marginBottom: '10px' }}>
                    <DynamicSearchbar options={filterOptions} appliedFilters={appliedFilters} updateFilters={updateFilters}>
                </DynamicSearchbar></Grid> */}
              <Grid container style={{ marginBottom: '10px' }}><RenderAppliedFilters appliedFilters={appliedFilters} updateFilters={updateFilters}></RenderAppliedFilters>
              </Grid> 
                <Grid container >
                     {data.length > 0 && <Grid item xs={12} style={{paddingLeft:'10px'}}>
                        Showing {data.length} Results
                    </Grid> 
                    }
                    {data.length > 0 && data.map((product, i) =>
                        <Grid item key={i}
                            xs={12}
                            xl={3}
                            lg={3}
                            md={4}
                            style={{ padding: '10px' }} 
                            >
                            <ProductCard product={product} />
                        </Grid>
                    )}
                    {data.length === 0 && 
                    <Grid item xs={12} style={{textAlign:'center', padding:'20px'}}>No results found.</Grid>}
                </Grid>
            </Grid>
        </>
    )
}
export default ProductCatalogDashboard;
