import UserStatus from "@/lib/constants/user-status";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  status: UserStatus.PENDING,
  firstName: "",
  lastName: "",
  phoneNumber: "",
  loading: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },

    setUser: (state, action) => {
      const { email, status, firstName, lastName, phoneNumber } =
        action.payload;
      state.email = email ? email : state.email;
      state.status = status
        ? status
        : firstName
        ? UserStatus.ACTIVE
        : state.status;
      state.firstName = firstName ? firstName : state.firstName;
      state.lastName = lastName ? lastName : state.lastName;
      state.phoneNumber = phoneNumber ? phoneNumber : state.phoneNumber;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setLoading, setUserEmail } = userSlice.actions;

export default userSlice.reducer;
