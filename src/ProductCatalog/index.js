import React from 'react'
import Grid from '@material-ui/core/Grid';
import BaseMaterialTable from '../MaterialTable';
import { MTableToolbar } from 'material-table';
import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { BaseSwipeableDrawer, BaseDrawerContent } from '../Components/Drawer/BaseDrawer';

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
        type:"currency"
    }, {
        title: "Discount Price",
        field: "discountPrice",
        type:"currency"
    }, {
        title: "Cover Image",
        field: "coverImage",
        sorting:false,
        filtering:false,
        render: rowData => (
        //   <img
        //     style={{ height: 36, borderRadius: '50%' }}
        //     src={rowData.coverImage}
        //   />
        <Link onClick={() => {showCoverImage(rowData)}} style={{cursor:'pointer'}}> <FontAwesomeIcon icon={faSearchPlus}></FontAwesomeIcon></Link> 
        ),
    }
    ];
    const [selectedProduct, setSelectedProduct] = React.useState({});


    const [openConfigDrawer, setOpenConfigDrawer] = React.useState(false);
    const showCoverImage = (rowData) => {
        setOpenConfigDrawer(true);
        setSelectedProduct(rowData);
    }

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'click' && 'MuiBackdrop-root' === event.target.className) {
          return;
        }
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenConfigDrawer(open);
      };
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
            <Grid container>
            <BaseSwipeableDrawer
            open={openConfigDrawer}
            anchor='right'
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}>
                <BaseDrawerContent
                    anchor='right'
                    drawerTitle={selectedProduct.name}
                    toggleDrawer={toggleDrawer}
                    drawerContent={ <img
                            alt={''} 
                            style={{ height: '100%', width:'auto'}}
                            src={'images/' + selectedProduct.coverImage}
                          />}
                    customDialogActions={false}
                />
            </BaseSwipeableDrawer>
        </Grid>
        </>
    )
}
const productCatalogSampleData = [{
    name: 'Product Name 1',
    isExpire: 'No',
    expiryDate: new Date(),
    price: 1200.0,
    discountPrice: 200.0,
    coverImage: 'product2.png'
}, {
    name: 'Product Name 2',
    isExpire: 'Yes',
    expiryDate: new Date(),
    price: 1200.0,
    discountPrice: 200.0,
    coverImage: 'product1.png'
}, {
    name: 'Product Name 3',
    isExpire: 'No',
    expiryDate: new Date(),
    price: 1500.0,
    discountPrice: 200.0,
    coverImage: 'product2.png'
},{
    name: 'Product Name 4',
    isExpire: 'No',
    expiryDate: new Date(),
    price: 1200.0,
    discountPrice: 200.0,
    coverImage: 'product1.png'
}, {
    name: 'Product Name 5',
    isExpire: 'Yes',
    expiryDate: new Date(),
    price: 1200.0,
    discountPrice: 200.0,
    coverImage: 'product2.png'
}, {
    name: 'Product Name 6',
    isExpire: 'No',
    expiryDate: new Date(),
    price: 15700.0,
    discountPrice: 200.0,
    coverImage: 'product1.png'
},
];
export default ProductCatalog;
