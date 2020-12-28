import { combineReducers, createStore, applyMiddleware } from 'redux';
import communityReducer from './reducers/communityReducer';
import userReducer from './reducers/userReducer';
import storeReducer from './reducers/storeReducer';
import productReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoryReducer';
import addProductReducer from './reducers/addProductReduser';
import {
    getAllCommunitiesFromDb,
    getCommunityById,
    checkPermission,
    onAuthStateChanged,
    getAllProducts,
    getAllCategories,
    newProduct,
    createNewCategory,
    deleteProduct,
    deleteCategory,
    addNewImageToProduct
} from './middleWares/crud'
import editHomeStoreReducer from './reducers/editHomeStore.reducer';
import searchReducer from './reducers/searchReducer'
import logoReducer from './reducers/logoReducer'
import sortReducer from './reducers/sortReducer'


import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './action';

const reducers =
    combineReducers({
        communityReducer,
        userReducer,
        storeReducer,
        editHomeStoreReducer,
        logoReducer,
        productReducer,
        categoriesReducer,
        searchReducer,
        addProductReducer,
        sortReducer
    })

const store = createStore(
    reducers,
    applyMiddleware(
        getAllCommunitiesFromDb,
        getCommunityById,
        checkPermission,
        onAuthStateChanged,
        getAllProducts,
        getAllCategories,
        newProduct,
        createNewCategory,
        deleteProduct,
        deleteCategory,
        addNewImageToProduct
    )
    // composeWithDevTools()

)
window.store = store;
store.dispatch(actions.onAuthStateChanged());
store.dispatch(actions.getAllProducts());
store.dispatch(actions.getAllCategories());
export default store;