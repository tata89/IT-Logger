import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_LOGS,
} from "./types";
//fetching the logs from api
export const getLogs = () => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("./logs");
      const data = await res.json();
      dispatch({
        type: GET_LOGS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText,
      });
    }
  };
};
// adding the log having user input to the api
export const addLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch("./logs", {
        method: "POST",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({
        type: ADD_LOG,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText,
      });
    }
  };
};
// deleting the log having user inputas id to the api
export const deleteLog = (id) => {
  return async (dispatch) => {
    try {
      setLoading();
      await fetch(`./logs/${id}`, {
        method: "Delete",
      });
      dispatch({
        type: DELETE_LOG,
        payload: id,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText,
      });
    }
  };
};
// Updating the log having user input as log to the api
export const updateLog = (log) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`./logs/${log.id}`, {
        method: "PUT",
        body: JSON.stringify(log),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      dispatch({
        type: UPDATE_LOG,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText,
      });
    }
  };
};
//searching the logs from api
export const searchLogs = (text) => {
  return async (dispatch) => {
    try {
      setLoading();
      const res = await fetch(`./logs?q=${text}`);
      const data = await res.json();
      dispatch({
        type: SEARCH_LOGS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        payload: error.response.statusText,
      });
    }
  };
};
// set current log
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};
// clear current log
export const clearCurrent = (log) => {
  return {
    type: CLEAR_CURRENT,
  };
};
//setting the loading
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
