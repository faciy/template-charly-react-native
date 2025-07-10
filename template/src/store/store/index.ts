import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { MMKV } from 'react-native-mmkv';
import { userSlice } from './slices/user/user.slice';

// Configuration MMKV pour Redux Persist
const storage = new MMKV();

const mmkvStorage = {
  setItem: (key: string, value: string) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};

const rootReducer = combineReducers({
  [userSlice.name]: userSlice.reducer,
});

// Configuration de Redux Persist
const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
  whitelist: [''], // Seuls les reducers à persister
  blacklist: ['user'], // Reducers à ne pas persister
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const loggerMiddleware = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        warnAfter: 128,
      },
    }).concat(loggerMiddleware as any),
});

export const persistor = persistStore(store);

export type TRootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;