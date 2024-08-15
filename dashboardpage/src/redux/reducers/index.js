import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import dashboardReducer from './dashboardReducer'; 

const rootReducer = combineReducers({
    search: searchReducer,
    dashboard: dashboardReducer,
});

export default rootReducer;
