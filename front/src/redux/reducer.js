import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActive: {},
  userAppointmen: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserActive: (state, action) => {
      state.userActive = action.payload;
    },
    setUserAppointment: (state, action) => {
      state.userAppointmen = action.payload;
    },
    closeAccount: (state) => {
      state.userActive = {};
      state.userAppointmen = [];
    },
    cancelAppointmentAction: (state, action) => {
      state.userAppointmen = state.userAppointmen.map((appointment) => {
        if (appointment.id === action.payload) {
          return { ...appointment, status: "cancelled" };
        }
        return appointment;
      });
    },
  },
});

export const {
  setUserActive,
  setUserAppointment,
  closeAccount,
  cancelAppointmentAction,
} = userSlice.actions;
