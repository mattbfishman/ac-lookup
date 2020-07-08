import React, {Component} from 'react';
import Login from 'fish-ui-ac/dist/Form/Login/Login';
import helpers from '../helpers/helpers.js';
import {requests} from '../helpers/constants.js';

var makeRequest     = helpers.makeRequest,
    POST            = requests.POST;

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
            console.log("NO ERROR");
            this.setState({
                loggedIn: true
            });
        } else {
            console.log(response.errorMsg);
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