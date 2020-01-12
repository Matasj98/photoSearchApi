const initialState = {
  queries: []
};

export const savedQueries = (state = initialState, action) => {
  switch (action.type) {
    case "addQuery":
      return {
        ...state,
        queries: state.queries.concat(action.name)
      };
    case "changedQuery":
      return {
        ...state,
        queries: action.query
      };
    default:
      return state;
  }
};
