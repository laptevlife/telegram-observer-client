
import { mainApi } from '../api'; // Импортируйте ваш API
import userReducer from '../features/userSlice'

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  [mainApi.reducerPath]: mainApi.reducer,
  userReducer,
});

const serviceMiddlewares = [
  mainApi.middleware,

];

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false })
        .concat(...serviceMiddlewares)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
