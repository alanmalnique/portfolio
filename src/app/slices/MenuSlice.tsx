import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface MenuState {
    activePage: string;
}

const initialState: MenuState = {
    activePage: 'home'
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setActivePage: (state, action: PayloadAction<string>) => {
            state.activePage = action.payload;
        }
    },
});

export const { setActivePage } = menuSlice.actions;

export default menuSlice.reducer;