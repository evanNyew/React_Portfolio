import React from 'react';
import logo from './logo.svg';
import './App.css'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import SingleProject from "./pages/SingleProject"
import Error from "./pages/Error"
import {Route, Switch} from 'react-router-dom' 
import Navbar from './components/NavBar'

function App(){
    return(
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/:slug" component={SingleProject}/>
            <Route component={Error}/>
        </Switch>
        </>
    )
}

export default App;
