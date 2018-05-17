import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import googleButton from '../web/1x/btn_google_signin_dark_normal_web.png'
export class Login extends Component {
    state = {
        name: "",
        password: "",
        error:""
    };

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    loginUser = () => {
        if(this.state.name==='' || this.state.password==='')
        {
            this.setState({
                error:"Invalid Credentials."
            });
        }
        else
        {
            let user = {
                'name': this.state.name,
                'password': this.state.password
            };
            this.props.Onlogin(user);
        }
    };


    render() {
        return (
            <div id='wrapper'>
                <table align='center'>
                    <tbody>
                    <tr>
                        <th colSpan='2'><h1>Login Page.</h1></th>
                    </tr>
                    <tr>
                        <span style={{color:"red"}}>{this.state.error}</span>
                    </tr>
                    <tr>
                        <td>
                            <label>Username : </label>
                        </td>
                        <td>
                            <input type='name' onChange={this.onChange} id='name'/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Password : </label>
                        </td>
                        <td>
                            <input type='password' onChange={this.onChange} id='password'/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan='2'>
                            <button onClick={this.loginUser} id='login'>Login</button><br/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        loginReducer:state.loginReducer
    }
}
const matchDispatchToProps=(dispatch)=>{
    debugger;
    return {
        Onlogin : (user)=>{
            dispatch({
                type:"LOGIN",
                payload:user,
            })
        }

    }
}


export default withRouter(connect(mapStateToProps, matchDispatchToProps)(Login));