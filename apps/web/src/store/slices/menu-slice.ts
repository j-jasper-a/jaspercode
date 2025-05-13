import { RootState } from "@/store";
import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
  isMenuOpen: boolean;
};

const initialState: MenuState = {
  isMenuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    menuToggle(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },

    menuClose(state) {
      state.isMenuOpen = false;
    },

    menuOpen(state) {
      state.isMenuOpen = true;
    },
  },
});

export const { menuToggle, menuClose, menuOpen } = menuSlice.actions;
export const selectIsMenuOpen = (state: RootState) => state.menu.isMenuOpen;
export default menuSlice.reducer;
