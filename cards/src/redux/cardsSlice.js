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
    // addToTeam(state, action) {
    //   let card = action.payload.card;
    //   if (card.onTeam === false) {
    //     card.onTeam === true;
    //     console.log(card.onTeam);
    //   } else {
    //     card.onTeam === false;
    //     console.log(card.onTeam);
    //   }
    // },
  },
});

const { actions, reducer } = cardsSlice;
export const { getCards, removeCards, addToTeam } = actions;
export default reducer;
