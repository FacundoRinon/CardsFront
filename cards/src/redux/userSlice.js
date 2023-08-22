import { createSlice, current } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setToken(state, action) {
      return action.payload;
    },
    removeToken(state, action) {
      return null;
    },
    toggleTeam(state, action) {
      let user = { ...action.payload.user };
      let team = [...action.payload.user.team];
      let card = action.payload.card;

      const isCardInTeam = team.some((teamCard) => teamCard._id === card._id);

      if (isCardInTeam) {
        const updatedTeam = team.filter(
          (teamCard) => teamCard._id !== card._id
        );
        user.team = updatedTeam;
      } else if (team.length >= 3) {
        user.team = team;
      } else {
        team = [...team, card];
        user.team = team;
      }
      return { ...user };
    },
    addCard(state, action) {
      let user = { ...action.payload.user };
      let unlocked = [...action.payload.user.unlockedCards];
      let card = action.payload.card;

      const isCardInCollection = unlocked.some(
        (collectionCard) => collectionCard._id === card._id
      );

      if (isCardInCollection) {
        user.unlockedCards = unlocked;
      } else {
        unlocked = [...unlocked, card];
        user.unlockedCards = unlocked;
      }
      return { ...user };
    },
  },
});

const { actions, reducer } = userSlice;
export const { setToken, removeToken, toggleTeam, addCard } = actions;
export default reducer;
