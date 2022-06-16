import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const App = () => {


  return (
    <div className="App">
      
      <BrowserRouter>
        <Container maxWidth="md" maxheight="120">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
};
export default App;
