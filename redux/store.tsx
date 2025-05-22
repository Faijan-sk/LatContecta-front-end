import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './rootReducer'
import storageSession from 'redux-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from 'redux'

const persistConfig = {
  key: 'root',
  storage: storageSession,
}

const combinedReducer = combineReducers(rootReducer)
const persistedReducer = persistReducer(persistConfig, combinedReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export { store, persistor }
