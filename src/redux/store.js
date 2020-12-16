import { combineReducers, createStore, applyMiddleware } from 'redux';
import communityReducer from './reducers/communityReducer';
import userReducer from './reducers/userReducer';
import storeReducer from './reducers/storeReducer';
import productReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoryReducer';
import { getAllCommunitiesFromDb, getCommunityById, checkPermission, onAuthStateChanged,getAllProducts,getAllCategories } from './middleWares/crud'
import editHomeStoreReducer from './reducers/editHomeStore.reducer';
import logoReducer from './reducers/logoReducer'


import { composeWithDevTools } from 'redux-devtools-extension';
import { actions } from './action';

const reducers =
    combineReducers({ communityReducer, userReducer, storeReducer, editHomeStoreReducer, logoReducer,productReducer,categoriesReducer })
const store = createStore(
    reducers,
    applyMiddleware(getAllCommunitiesFromDb, getCommunityById, checkPermission, onAuthStateChanged,getAllProducts,getAllCategories)
    // composeWithDevTools()

)
window.store = store;
store.dispatch(actions.onAuthStateChanged());
export default store;