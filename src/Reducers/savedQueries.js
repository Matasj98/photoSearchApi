const initialState = {
  queries: []
};

export const savedQueries = (state = initialState, action) => {
  switch (action.type) {
    case "addQuery":
      return {
        ...state,
        queries: action.query
      };
    case "changedQuery":
      return {
        ...state,
        queries: action.query
      };
    case "loadQuery":
      return {
        ...state,
        queries: action.query
      };
    default:
      return state;
  }
};
