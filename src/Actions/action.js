export const addQuery = name => ({
  type: "addQuery",
  name
});

export const changedQuery = query => ({
  type: "changedQuery",
  query
});
