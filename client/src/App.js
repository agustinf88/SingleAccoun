import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import Page from "./containers/Page";
import runActions from "./actions";
import { createEpicMiddleware } from "redux-observable";

const observableMiddleware = createEpicMiddleware();

const store = createStore(reducers, applyMiddleware(observableMiddleware));

runActions(observableMiddleware);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Page></Page>
        </header>
      </div>
    </Provider>
  );
};

export default App;
