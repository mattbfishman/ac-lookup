import React, {Component} from 'react';
import Login from 'fish-ui-ac/dist/Form/Login/Login';

class AdminFormWrapper extends Component {
    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="login-wrapper">
                <Login/>
            </div>
        );
    }
}

export default AdminFormWrapper;