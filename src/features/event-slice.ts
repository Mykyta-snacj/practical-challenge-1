//redux
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

//types
import type { FormData } from "../types/type";

//sevices
import { date } from "../services/date";
import { initialEvent } from "../services/initialEvent";

type EventState = {
    event: FormData;
};

type ChangePayload = {
  section: keyof FormData;
  value: string;
};

const initialState: EventState = {
    event: {
        ...initialEvent,
        startDate: date,
        finishDate: date,
      }
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        onChange: (
            state: EventState,
            action: PayloadAction<ChangePayload>
        ) => {
            const { section, value } = action.payload;

            state.event = {
                ...state.event,
                [section]: value,
             };
        },

        clearEvent: (state) => {
            state.event = {
                ...initialEvent,
                startDate: date,
                finishDate: date,
            }
        }
    }
})

export const { onChange, clearEvent } = eventSlice.actions;

export default eventSlice.reducer