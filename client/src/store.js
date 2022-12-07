import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/projects/projectsSlice";
import employeesReducer from "./features/employees/employeesSlice";
import customersReducer from "./features/customers/customersSlice";
import tasksReducer from "./features/tasks/tasksSlice";



const store = configureStore({
  reducer: {
    projects: projectsReducer,
    employees: employeesReducer,
    customers: customersReducer,
    tasks: tasksReducer,
  
  },
});

export default store;