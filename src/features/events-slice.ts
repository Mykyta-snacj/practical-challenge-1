//redux
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

//types
import type { Data } from '../types/type';

type EventsListState = {
  events: Data[];
};

const savedEvents = localStorage.getItem("events");

const initialState: EventsListState = {
  events: savedEvents ? JSON.parse(savedEvents) : [],
};

const eventsListSlice = createSlice({
  name: 'eventsList',
  initialState,
  reducers: {
    addEvent: (state, action: PayloadAction<Data>) => {
      state.events.push(action.payload);
    },

     removeEvent: (state, action: PayloadAction<number>) => {
      state.events = state.events.filter(
        event => event.id !== action.payload,
      );
    },
  },
});

export const { addEvent, removeEvent } = eventsListSlice.actions;

export default eventsListSlice.reducer;