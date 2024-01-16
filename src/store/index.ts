import { configureStore } from '@reduxjs/toolkit';
import { artistsApi } from '../services/artistsApi';

export const store = configureStore({
    reducer: {
        [artistsApi.reducerPath]: artistsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(artistsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;