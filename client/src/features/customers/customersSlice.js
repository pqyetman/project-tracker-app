import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCustomers = createAsyncThunk("customers/fetchCustomers", () => {
  // return a Promise containing the data we want
  return fetch("/customers")
    .then((response) => response.json())
    .then((data) => data);
});

const customersSlice = createSlice({
  name: "customers",
  initialState: {
    entities: [], // array of projects
    status: "idle", // loading state
  },
  reducers: {
    customerAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    customersUpdated(state, action) {
      const customer = state.entities.find((customer) => customer.id === action.payload.id);
      customer.projects = action.payload.projects;
    }, 


    customersDeleted(state, action) {
      
      state.entities.filter(((customer) => customer.id !== action.payload.id));
    },

  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchCustomers.pending](state) {
      state.status = "loading";
    },
    [fetchCustomers.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { customerAdded, customersUpdated, customersDeleted } = customersSlice.actions;

export default customersSlice.reducer;