import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import styled from "styled-components";

import Home from "./components/Home";
import Foo from "./components/Foo";

const store = configureStore();

//Styled Components syntax
const Container = styled("div")`
  background: papayawhip;
  color: brown;
  font-size: 1.5rem;
  font-family: "Raleway", sans-serif;
  text-decoration: none;
  height: 100vh;
  box-sizing: border-box;
  margin: auto;
  text-align: center;

  a {
    text-decoration: none;
    color: brown;
    font-size: 4rem;
  }
  a:hover {
    background: #aba490;
  }
`;

const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/foo" component={Foo} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
};

export default App;
