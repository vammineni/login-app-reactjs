export const getFilteredResults = (data, filters) => {
    const updatedResults = data.filter(function (prod) {
        const keys = Object.keys(filters);
        console.warn(keys);
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
        console.warn(product[key]);
        console.warn('filters[key]...'+filters[key]);
       if(product[key] && product[key].toString().indexOf(filters[key]) === -1) {
            match = false;
       }
    })
    return match;
}