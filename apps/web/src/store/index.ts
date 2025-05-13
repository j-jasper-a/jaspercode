import menuReducer from "@/store/slices/menu-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
