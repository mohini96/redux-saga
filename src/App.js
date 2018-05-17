import React, {Component} from 'react';
import './App.css';
import {Button} from 'react-bootstrap'
import {withRouter, Redirect, Route, Switch, NavLink, BrowserRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from './component/login'
import Success from './component/success'
import About from './component/About';
import Home from './component/Home';
import User from './component/user';
import Product from './component/Product';
import SignupForm from "./component/SignupForm";

class App extends Component {

    constructor() {
        super();
        debugger;
    }

    logout = () => {
        this.props.onLogout();
    };

    render() {
        debugger;
        const Public = ({component: Component, ...rest}) => {
            return (
                <Route {...rest} render={(routerProps) => {
                    return !localStorage.getItem('user') ?
                        <Component {...routerProps}/>
                        :
                        <Redirect to='/success'/>
                }}/>
            )
        };
        const Private = ({component: Component, ...rest}) => {

            return (
                <Route {...rest} render={(routerProps) => {
                    return localStorage.getItem('user') ?
                        <Component {...routerProps} />
                        :
                        <Redirect to='/'/>
                }}/>
            )
        };

        return (
            <div className="App">

                <div className="container">

                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Welcome To React </a>
                            </div>
                            <ul className="nav navbar-nav">
                                <NavLink class="font-custom-navlink" to={'/home'}> Home</NavLink> ||
                                <NavLink class="font-custom-navlink" to={'/about'}>About</NavLink> ||
                                {
                                    localStorage.getItem('user') ?
                                        <span><NavLink class="font-custom-navlink" to={'/user'}>User</NavLink>||<NavLink
                                            class="font-custom-navlink" to={'/product'}>Product</NavLink></span>
                                        : " "
                                }

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                {
                                    !localStorage.getItem('user') ?
                                        <span><NavLink class="glyphicon glyphicon-user font-custom-navlink"
                                                       to={'/signup'}>SignUp</NavLink>  <NavLink
                                            class="glyphicon glyphicon-log-in font-custom-navlink"
                                            to={'/login'}>login</NavLink> </span>
                                        : <Button onClick={this.logout}>Logout</Button>
                                }
                            </ul>
                        </div>
                    </nav>

                    <div className="col-md-12" id="content">
                        <Switch>
                            <Public exact path='/home' component={Home}/>
                            <Public exact path='/login' component={Login}/>
                            <Public exact path='/signup' component={SignupForm}/>
                            <Route exact path='/about' component={About}/>
                            <Private exact path='/success' component={Success}/>
                            <Private exact path='/user' component={User}/>
                            <Private exact path='/product' component={Product}/>
                        </Switch>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.loginReducer,
    };
};
const matchDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {
            dispatch({type: 'LOGOUT'})
        }
    };
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(App));


