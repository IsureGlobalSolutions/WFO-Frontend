import { authReducer } from '../features/auth/authSlice'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { fteReducer } from '../features/auth/authSlice'

// Configuration for persisting the Redux state
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'fte', ], // Specify which reducers to persist
};

// Combine your reducers
const rootReducer = combineReducers({
   auth:authReducer,
    fte: fteReducer,
});



// Persist the combined reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Create a persistor to handle the persist state
const persistor = persistStore(store);

export { store, persistor };







