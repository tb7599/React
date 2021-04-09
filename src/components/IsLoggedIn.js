import React, { Component } from 'react'
import CreateUserComponent from './CreateUserComponent'
// import ListUserComponent from './(not used)ListUserComponent'
import ButtonAppBar from './HeaderComponent'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import UserListComponent from './UserListComponent'
import DiagTestComponent from './DiagTestComponent'
import CreateDiagTestComponent from './CreateDiagTestComponent'
class IsLoggedIn extends Component {
    render() {
        return (
            <>
           <ButtonAppBar />   
                <Router> 
                <Switch>
                <div className="container">
                          <Route path = "/user" exact component = {UserListComponent}></Route>
                          <Route path = "/users" exact component = {UserListComponent}></Route>
                          <Route path = "/add-user" component = {CreateUserComponent}></Route>
                          <Route path = "/test" exact component = {DiagTestComponent}></Route>
                          <Route path = "/add-test" exact component = {CreateDiagTestComponent}></Route>
                </div>
                </Switch>
                </Router>
           
            </>
        )
    }
}

export default IsLoggedIn
