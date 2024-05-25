import { applyMiddleware, createStore } from "redux";
import RootReducer from "./CombineReducer";
import ProductReducer from "./ProductReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key:'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer)
const store = createStore(persistedReducer)
//const store = createStore(ProductReducer);
const persistor = persistStore(store)
export default store;
export {persistor};

