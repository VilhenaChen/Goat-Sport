import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  token: string | null;
  name: string | null;
  teamName: string | null;
  chosenSport: string | null;
  loggedIn: boolean;
}

const initialUserState: UserState = {
  token: null,
  name: null,
  teamName: null,
  chosenSport: null,
  loggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    loginUser: (
      state,
      action: {
        payload: { name: string; token: string; teamName: string };
        type: string;
      }
    ) => {
      state.name = action.payload.name;
      state.token = action.payload.token;
      state.teamName = action.payload.teamName;
      state.loggedIn = true;
    },
    logoutUser: (state) => {
      state.loggedIn = false;
    },
    changeSport: (
      state,
      action: {
        payload: { chosenSport: string };
        type: string;
      }
    ) => {
      state.chosenSport = action.payload.chosenSport;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
