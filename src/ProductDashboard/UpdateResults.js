export const getFilteredResults = (data, filters) => {
    const updatedResults = data.filter(function (prod) {
        const keys = Object.keys(filters);
        if(keys.length > 0) {
            // if(prod.name.indexOf(filters.name) !== -1) {
            if(checkProduct(keys, filters, prod)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    });
    return updatedResults;
}
function checkProduct(keys, filters, product) {
    let match = true;
    keys.forEach((key) => {
        let filterValue = filters[key];
        if(filterValue && key === 'name' && product[key].toString().indexOf(filterValue) === -1) {
            match = false;
        } else if(filterValue && key === 'expiryDate' && !checkExpiryDate(filterValue, product[key])) {
            match = false;
        } else if(filterValue && key === 'price' && !checkPriceRange(filterValue, product[key])) {
            match = false;
        }
    })
    return match;
}
function checkPriceRange(filterValues, productPrice) {
     return parseInt(filterValues[0], 10) <= parseInt(productPrice, 10) && parseInt(productPrice, 10) <= parseInt(filterValues[1], 10);
}

function checkExpiryDate(filterValue, productDate) {
    return productDate.toLocaleDateString() === filterValue;
}