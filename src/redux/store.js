import { combineReducers, createStore, applyMiddleware } from 'redux';
import communityReducer from './reducers/communityReducer';
import userReducer from './reducers/userReducer';
import storeReducer from './reducers/storeReducer';
import productReducer from './reducers/productReducer';
import categoriesReducer from './reducers/categoryReducer';
import cartReduser from './reducers/cartReduser';
import uploadFileReducer from './reducers/uploadFileReducer'
import addProductReducer from './reducers/addProductReduser';
import {
    checkPermission,
    onAuthStateChanged,
    getAllProducts,
    getAllCategories,
    newProduct,
    createNewCategory,
    deleteProduct,
    deleteCategory,
    editproduct,
    editCategory,
    newOrder,
    addNewImageToProduct,
    createNewStore,
    setUserId,
    uploadImage,
    setFile
} from './middleWares/crud'
import editHomeStoreReducer from './reducers/editHomeStore.reducer';
import searchReducer from './reducers/searchReducer'
import logoReducer from './reducers/logoReducer'
import viewModeReducer from './reducers/viewModeReducer'
import sortReducer from './reducers/sortReducer'
import openStoreReducer from './reducers/openStoreReducer';
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
        sortReducer,
        viewModeReducer,
        openStoreReducer,
        cartReduser,
        uploadFileReducer
    })

const store = createStore(
    reducers,

    composeWithDevTools(
        applyMiddleware(
            checkPermission,
            onAuthStateChanged,
            getAllProducts,
            getAllCategories,
            newProduct,
            createNewCategory,
            deleteProduct,
            deleteCategory,
            editproduct,
            editCategory,
            addNewImageToProduct,
            createNewStore,
            setUserId,
            uploadImage,
            newOrder,
            setFile
        ))
)
window.store = store;
store.dispatch(actions.onAuthStateChanged());
store.dispatch(actions.getAllProducts());
store.dispatch(actions.getAllCategories());

export default store;