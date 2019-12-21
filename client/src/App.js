import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";


const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
      </div>
    </Provider>
  );
};

export default App;
