import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './home/home';
import companyReducer from './company/company';

const reducer = combineReducers({
  countriesReducer,
  companyReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
