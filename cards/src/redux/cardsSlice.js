import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: null,
  reducers: {
    getCards(state, action) {
      return action.payload;
    },
    removeCards(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = cardsSlice;
export const { getCards, removeCards } = actions;
export default reducer;
