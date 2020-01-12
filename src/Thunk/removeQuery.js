import { changedQuery } from "../Actions/action";

export const removeQuery = name => (dispatch, getState) => {
  const copy = [...getState().savedQueries.queries];
  const index = copy.indexOf(name);
  copy.splice(index, 1);
  dispatch(changedQuery(copy));
};
