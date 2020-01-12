import { addQuery } from "../Actions/action";

export const saveQuery = name => (dispatch, getState) => {
  let copy = [...getState().savedQueries.queries];
  copy.push(name);
  window.localStorage.setItem("query", JSON.stringify(copy));
  dispatch(addQuery(copy));
};
