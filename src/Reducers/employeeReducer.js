import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    deptName: "IT",
    shiftName: "Morning",
    employeeName: "Haaris",
    startDate: "2020-08-01",
    endDate: "2021-12-10",
  },
  {
    id: uuid(),
    deptName: "Accounts",
    shiftName: "Morning",
    employeeName: "Asad",
    startDate: "2020-08-01",
    endDate: "2021-12-10",
  },
  {
    id: uuid(),
    deptName: "HR",
    shiftName: "Evening",
    employeeName: "Qasim",
    startDate: "2020-08-01",
    endDate: "2021-12-10",
  },
];

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_EMPLOYEE_INFO":
      return [
        ...state,
        {
          id: uuid(),
          deptName: payload.deptName,
          shiftName: payload.shiftName,
          employeeName: payload.employeeName,
          startDate: payload.startDate,
          endDate: payload.endDate,
        },
      ];
    case "DELETE_EMPLOYEE_INFO":
      const copyState = [...state];
      let index = copyState.findIndex((iterator) => iterator.id === payload.id);
      copyState.splice(index, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default employeeReducer;
