import React from 'react'
import Grid from '@material-ui/core/Grid';
import BaseMaterialTable from '../MaterialTable';
import { MTableToolbar } from 'material-table';

function ProductCatalog() {
    const columns = [{
        title: "Name",
        field: "name"
    }, {
        title: "Is Expired?",
        field: "isExpire"
    }, {
        title: "Expiry Date ",
        field: "expiryDate",
        type: "date"
    }, {
        title: "Price",
        field: "price",
        type:"integer",
        currency:'$'
    }, {
        title: "Discount Price",
        field: "discountPrice",
    }, {
        title: "Cover Image",
        field: "coverImage",
        sorting:false,
        filtering:false,
        render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.coverImage}
          />
        ),
    }
    ];

    return (
        <>
            <Grid container >
                <BaseMaterialTable
                    options={{
                        showTitle: true,
                        search: true,
                        paging: true,
                        filtering: true,
                        toolbarButtonAlignment: 'left',
                        tableLayout: 'fixed',
                        exportButton: false,
                        emptyRowsWhenPaging: false,
                        searchFieldVariant: "outlined",
                        // paginationType:'stepped',
                        // showFirstLastPageButtons:false,
                        // searchFieldAlignment:'left',
                        toolbar: true,
                        header: true,
                        headerStyle: {
                            borderWidth: '1px 1px 1px 1px',
                            borderStyle: 'solid',
                            borderColor: 'lightgray',
                            fontWeight: '700',
                            // color: '#0000ff',
                            backgroundColor: '#EEE',
                        },
                        cellStyle: {
                            borderWidth: '1px 1px 1px 1px',
                            borderStyle: 'solid',
                            borderColor: 'lightgray',
                            // color: '#0000ff'
                        },
                        filterCellStyle: {
                            borderWidth: '1px 1px 1px 1px',
                            borderStyle: 'solid',
                            borderColor: 'lightgray',
                            // color: '#0000ff'
                        },
                        searchFieldStyle: {
                            
                        }
                    }}
                    parentMaxWidth={'100%'}
                    parentWidth={'100%'}
                    style={{
                        // borderWidth:'1px 1px 0px 1px',
                        // borderStyle: 'solid', 
                        // borderColor:'lightgray',
                        // margin: '10px'
                    }}
                    columns={columns}
                    data={productCatalogSampleData}
                    title={'Product Catalog'}
                    localization={{
                        pagination: {
                            labelDisplayedRows: '{from} - {to} of {count}'
                        }
                    }}
                    toolbarButtonAlignment='left'
                    components={{
                        Toolbar: props => (
                                <div style={{ marginLeft: '-20px' }}>
                                    <MTableToolbar {...props} />
                                </div>
                        )
                    }}
                />
            </Grid>
        </>
    )
}
const productCatalogSampleData = [{
    name: 'Product Name 1',
    isExpire: 'No',
    expiryDate: new Date(),
    price: '1200.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
}, {
    name: 'Product Name 2',
    isExpire: 'Yes',
    expiryDate: new Date(),
    price: '1200.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
}, {
    name: 'Product Name 3',
    isExpire: 'No',
    expiryDate: new Date(),
    price: '1500.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
},{
    name: 'Product Name 4',
    isExpire: 'No',
    expiryDate: new Date(),
    price: '1200.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
}, {
    name: 'Product Name 5',
    isExpire: 'Yes',
    expiryDate: new Date(),
    price: '1200.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
}, {
    name: 'Product Name 6',
    isExpire: 'No',
    expiryDate: new Date(),
    price: '15700.0 $',
    discountPrice: '200.0 $',
    coverImage: 'TODO'
},
];
export default ProductCatalog;
