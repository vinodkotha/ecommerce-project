import { createSelector } from "reselect";

const userState = (state) => state.userReducer;

//pulling currentUser
export const currentUserSelector = createSelector(
  [userState],
  (userReducer) => userReducer.currentUser
);
