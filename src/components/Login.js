import React, { Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import red from '@material-ui/core/colors/red'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LoginService from '../services/LoginService';
import axios from 'axios';
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             error:'',
             errorState:false
        }
        this.handleUserChange=this.handleUserChange.bind(this);
        this.handlePassChange=this.handlePassChange.bind(this);
        this.handleLogClick=this.handleLogClick.bind(this);
    }
    handleUserChange=(event)=>{
        this.setState({username:event.target.value})
    }
    handlePassChange=(event)=>{
        this.setState({password:event.target.value})
    }
    handleLogClick = (u)=>{
        u.preventDefault()

        let users ={
            username : this.state.username,
            password : this.state.password,
        }
        // try {
        //     const resp = await axios.get('http://localhost:9000/login/loginuser',users)
        //     console.log(resp.data)
        // } catch (error) {
        //     console.log(error)
        // }
        
        // console.log(this.state.username)
        // console.log(this.state.password)
         LoginService.loginUser(users).then(res=>{
             console.log(res.data);
             if(res.data === "Login Success"){
             this.props.history.push('/user');
             }
         }).catch(error=>{
                this.setState({
                    error:error.response.data,
                    errorState:true
                });
              this.props.history.push('/login');
          });
    }
    render() {
        
        const paperStyle={padding :20,height:'70vh',width:320, margin:"70px auto"}
        const avatarStyle={backgroundColor:red[400]}
        const buttonStyle={margin:'8px 0'}
        const typeStyle={margin : '15px 0'}
        return (
            <div>
                <Grid>
                    <Paper elevation={15} style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}><LocalHospitalIcon/></Avatar>
                            <h2>Sign In</h2>
                        </Grid>
                        <Grid style={typeStyle}>
                        <TextField label='Username' placeholder='Enter username' error={this.state.errorState} onChange={this.handleUserChange} fullWidth required/>
                        </Grid>
                        <Grid style={typeStyle}>
                        <TextField label='Password' placeholder='Enter password' type='password' error={this.state.errorState} onChange={this.handlePassChange} fullWidth required/>
                        </Grid>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember me"
                         />
                        <Button type='submit' color='primary' 
                        variant="contained" 
                        style={buttonStyle} 
                        onClick={this.handleLogClick} 
                        fullWidth>Sign in</Button>
                        <Typography variant="caption" color="error">{this.state.error}</Typography>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

export default Login
