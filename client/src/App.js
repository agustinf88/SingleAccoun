import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";

import Page from "./containers/Page";


const store = createStore(reducers);

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
