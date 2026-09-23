import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './features/event-slice';
import eventsListReducer from './features/events-slice';

export const store = configureStore({
  reducer: {
    event: eventReducer,
    eventsList: eventsListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;