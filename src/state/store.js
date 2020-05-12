import { createStore, compose as reduxCompose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { root as rootReducer } from "./reducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const debug = process.env["NO_DEBUG"] !== "1";
const compose =
  (debug && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || reduxCompose;

const store = createStore(persistedReducer, compose());
const persistor = persistStore(store);

export { store, persistor };
