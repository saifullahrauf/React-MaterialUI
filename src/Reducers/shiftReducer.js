import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    shiftName: "Morning",
    startTime: "08:00",
    endTime: "12:00",
    modifiedDate: "2020-01-21",
  },
  {
    id: uuid(),
    shiftName: "Afternoon",
    startTime: "12:00",
    endTime: "16:00",
    modifiedDate: "2020-01-21",
  },
  {
    id: uuid(),
    shiftName: "Evening",
    startTime: "16:00",
    endTime: "20:00",
    modifiedDate: "2020-01-21",
  },
];

const shiftReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_SHIFT_INFO":
      return [
        ...state,
        {
          id: uuid(),
          shiftName: payload.shiftName,
          startTime: payload.startTime,
          endTime: payload.endTime,
          modifiedDate: payload.modifiedDate,
        },
      ];
    case "DELETE_SHIFT_INFO":
      const copyState = [...state];
      let index = copyState.findIndex((iterator) => iterator.id === payload.id);
      copyState.splice(index, 1);
      return [...copyState];
    default:
      return state;
  }
};

export default shiftReducer;
