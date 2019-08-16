import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// const homepersistConfig = {
//   key: 'home',
//   storage,
//   whitelist: ['BasicInformationList','loginStatus']//持续化白名单
// };

const reducer = combineReducers({
});

export default reducer;
