import { configureStore } from '@reduxjs/toolkit';
//import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/SazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (middleware)=> getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
