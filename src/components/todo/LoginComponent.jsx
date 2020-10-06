import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'

class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value 
            }
        )
    }
    
    loginClicked(){
        if(this.state.username==='koraykg' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginFailed: false})
        }
        else{
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }
    
    
        render(){
            return(
                <>
                <h1>Login</h1>
                <div className="container">
                    <div>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.showSuccessMessage && <div>Login Succesfull</div>}
                    User Name: <input type="text" name= "username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name= "password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </div>
                </div>
                </>
            )
        }
    }

    export default LoginComponent