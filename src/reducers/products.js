import { ActionTypes } from "../constants/actionTypes";

let initialProducts = {
    data: [

    ],
    appliedFilters: {
    }
}

const products = (state = { ...initialProducts }, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.FiltersUpdate:
            return {
                ...state, appliedFilters: action.filtersChanged
            }
        case ActionTypes.ResultsUpdate:
            return {
                ...state, data: action.data
            }
        default:
            return state;
    }
};
export default products;