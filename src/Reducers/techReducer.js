import {
  GET_TECHS,
  DELETE_TECH,
  ADD_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from "../Actions/types";
const initalState = {
  techs: null,
  loading: false,
  error: null,
};
export default (state = initalState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
        loading: false,
      };
    case TECHS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
