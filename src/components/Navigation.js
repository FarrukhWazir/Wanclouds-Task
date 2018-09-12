import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './Nav.css';
const Navigation = () => {
return (
<header className="App-header">
<center>
<h1 className="App-title"> Wanclouds React Assignment</h1>
<NavLink to="/"><button className="nav-button">Add Data</button></NavLink>
<NavLink to="view"><button className="nav-button">View Data</button></NavLink>
</center>
   </header>


);


};

export default Navigation;