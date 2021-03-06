// Import Dependencies
// =========================================================
    import { combineReducers } from "redux";
    import { connectRouter } from 'connected-react-router'
// Import Reducers
// =========================================================
    import categoryReducer from "./categoryReducer";
    import appReducer from "./appReducer";
    import shieldReducer from "./shieldReducer";
    import authReducer from './authReducer';
    import reviewReducer from './reviewReducer';
    import userReducer from './userReducer';

// Combine Reducers 
// =========================================================
    const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
        categories: categoryReducer,
        apps: appReducer,
        shields: shieldReducer,
        user: authReducer,
        reviews: reviewReducer,
        notifications: userReducer
    })

    export default createRootReducer

