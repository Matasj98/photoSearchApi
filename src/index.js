import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Thunk from "redux-thunk";
import { allReducer } from "./Reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(allReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
