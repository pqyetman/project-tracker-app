import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEmployees = createAsyncThunk("pemployees/fetchEmployees", () => {
  // return a Promise containing the data we want
  return fetch("/employees")
    .then((response) => response.json())
    .then((data) => data);
});

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    entities: [], // array of projects
    status: "idle", // loading state
  },
  reducers: {
    employeeAdded(state, action) {
      // using createSlice lets us mutate state!
      state.entities.push(action.payload);
    },
    employeesUpdated(state, action) {
      const employee = state.entities.find((employee) => employee.id === action.payload.id);
      employee.title = action.payload.open;
    },
    employeesDeleted(state, action) {
      
      state.entities.filter(((employee) => employee.id !== action.payload.id));
    },

  },
  extraReducers: {
    // handle async actions: pending, fulfilled, rejected (for errors)
    [fetchEmployees.pending](state) {
      state.status = "loading";
    },
    [fetchEmployees.fulfilled](state, action) {
      state.entities = action.payload;
      state.status = "idle";
    },
  },
});

export const { employeeAdded, employeesUpdated, employeesDeleted } = employeesSlice.actions;

export default employeesSlice.reducer;