import UserStatus from "@/lib/constants/user-status";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  status: UserStatus.PENDING,
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, status, firstName, lastName, phoneNumber } =
        action.payload;
      state.email = email;
      state.status = status;
      state.firstName = firstName;
      state.lastName = lastName;
      state.phoneNumber = phoneNumber;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
