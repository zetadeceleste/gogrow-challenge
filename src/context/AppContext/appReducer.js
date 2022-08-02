import { types } from "../../types";
import { isAppData, setAppData } from "../../utils/SessionUtil";

const initialState = {
  language: "enUk",
};

export const initializer = () => (isAppData() ? setAppData() : initialState);

export const appReducer = (state = {}, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case types.SAVE_LANGUAGE:
      return {
        ...state,
        language: payload.language,
      };
    default:
      return state;
  }
};
