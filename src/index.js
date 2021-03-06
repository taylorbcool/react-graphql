import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Import css file from bushido-strap for global style overhaul
import "bushido-strap/css/main.css";

// Keep this puppy here for later!
import * as serviceWorker from "./serviceWorker";

// Set up Redux/Router
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import logger from "redux-logger";
import thunk from "redux-thunk";

// Import reducer/index.js as root reducer, it's where we're combining all our reducer files
import rootReducer from "./store/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const client = new ApolloClient({
  // uri: "https://vm8mjvrnv3.lp.gql.zone/graphql"
  uri: "http://localhost:4000/"
});

// You can add a theme prop to ThemeProvider and pass it any theme of your choosing
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
