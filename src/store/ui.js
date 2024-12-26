import { createSlice } from "@reduxjs/toolkit";

const initialUiState = { CartIsVisible: true, notification: null }

const uiSlice = createSlice({
    name: "ui",
    initialState: initialUiState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        toggle(state) {
            state.CartIsVisible = !state.CartIsVisible;
        },
    }
});

export default uiSlice;
export const uiAction = uiSlice.actions;

