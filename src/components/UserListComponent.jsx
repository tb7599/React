import React, { Component } from 'react'
import {Box, Button, Grid, Grow} from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import UserServices from '../services/UsersServices'
import UserContainer from './UserContainer'
import ButtonAppBar from './HeaderComponent'
import { Provider } from "react-redux";
import store from "../redux/store";
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import DigtestContainer from './DigtestContainer'
class UserListComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             users:[],
             deleteClick:false,
             userId:0
        }
        this.addUser=this.addUser.bind(this);
        this.deleteUser=this.deleteUser.bind(this);
        this.deleteUserClick=this.deleteUserClick.bind(this);
        this.onChangeId=this.onChangeId.bind(this);
    }
    componentDidMount(){
        UserServices.getAllUsers().then((res)=>{
            this.setState({users:res.data});
        });
    }
    addUser(){
        this.props.history.push('/add-user');
    }
    deleteUser(id){
        UserServices.deleteUser(id).then((res)=>{
            this.setState({users:this.state.users.filter(user =>user.userId!==id)});
        });
    }
    deleteUserClick(){
        this.setState({
            deleteClick:true
        })
    }
    onChangeId=(event)=>{
        this.setState({
            userId:event.target.value
        });
    }
    render() {
        return (
            <>
            <ButtonAppBar />
            <div className="container">
               
                    
                        <Button variant="contained"
                            color="primary"
                            style={{width:200, height:35,margin:"25px"}}
                            startIcon={<SaveIcon />} onClick={this.addUser}> 
                            Add User
                         </Button>
                      
                    
                 
                 <br></br>

                 <Provider store={store}>
                 <UserContainer/>
                 </Provider>
            </div>
            </>
        )
    }
}

export default UserListComponent
