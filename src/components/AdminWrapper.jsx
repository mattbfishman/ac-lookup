import React, {Component} from 'react';
import Login from 'fish-ui-ac/dist/Form/Login/Login';
import helpers from '../helpers/helpers.js';
import {requests} from '../helpers/constants.js';

var makeRequest     = helpers.makeRequest,
    POST            = requests.POST,
    GET             = requests.GET;

class AdminFormWrapper extends Component {
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            loggedIn: false
        }
    }

    async onClick(e){
        let response = await makeRequest(POST, '/login', {username: "admin", password: "password"}),
            error    = response.error || false;

        if(!error){
            let token = response.accessToken || '';
            localStorage.setItem("token", token);
            this.setState({
                loggedIn: true
            });
        } else {
            console.log(response.errorMsg);
        }
    }

    async componentWillMount(){
        let token = localStorage.getItem("token");
        if(token){
            let authed = await makeRequest(GET, "/isAuthed", token, true);
            if(authed === "OK"){
                this.setState({
                    loggedIn: true
                });
                let items = await makeRequest(GET, "/adminItems", token, true);
            }
        }
    }

    render(){
        var me          = this,
            state       = me.state,
            loggedIn    = state.loggedIn,
            ele;
        
        if(loggedIn){
            ele = (
                <h1>Logged in yo</h1>
            );
        } else {
            ele = <Login/>;
        }
        return(
            <div className="login-wrapper" onClick={this.onClick}>
                {ele}
            </div>
        );
    }
}

export default AdminFormWrapper;