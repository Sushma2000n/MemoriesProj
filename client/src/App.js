import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter,Switch,Route } from "react-router-dom";
import Navbar  from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from './components/Auth/Auth';
import {useEffect} from 'react';


const App = () => {
  function handleCallbackResponse(response){
    console.log("Encoded JWT ID Token:"+ response.credential);
  }
  

useEffect(()=>{
      window.google.accounts.id.initialize({
        client_id:'',
        callback:handleCallbackResponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById('signInDiv'),
        {
          theme:'outline',
          size:'large',

        },
      );
      google.accounts.prompt()
      },[]);
return(
<div className="App">
  <div id="signInDiv"></div>
<BrowserRouter>
 
 <Container maxWidth="md" maxheight="120">
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
        
      </Switch>
     
    </Container>
 
 </BrowserRouter>
 </div>
);
}
export default App;
