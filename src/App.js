import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Form from "./components/Form";
import View from "./components/View";
import Navigation from './components/Navigation';


class App extends Component {
  render() {
  
    return (
    
       <BrowserRouter>
       <div>

       <Navigation/>
       <br/> <br/>
       <Switch>
       <Route   path="/"  component={Form}  exact />
       <Route   path="/view"  component={View}   />
        </Switch>

        </div>
       </BrowserRouter>

 
    );
  }
}




export default App;