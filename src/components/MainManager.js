import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DiagTestComponent from './DiagTestComponent'
import IsLoggedIn from './IsLoggedIn'
import Login from './Login'
import UserListComponent from './UserListComponent'
import CreateUserComponent from './CreateUserComponent'
import CreateDiagTestComponent from './CreateDiagTestComponent'
class MainManager extends Component {
    render() {
        return (
           <>
                <Router> 
                <Switch>
                <Route path = "/" exact component = {Login}></Route>
                <Route path = "/login" component = {Login}></Route>
                <Route path="/user" component = {UserListComponent}></Route>
                <Route path = "/users" exact component = {UserListComponent}></Route>
                <Route path = "/add-user" component = {CreateUserComponent}></Route>
                <Route path="/test" component = {DiagTestComponent}></Route>
                <Route path = "/add-test" exact component = {CreateDiagTestComponent}></Route>
                
                </Switch>
               </Router>
            </>
        )
    }
}

export default MainManager
