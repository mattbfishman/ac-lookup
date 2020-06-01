import React, {Component} from 'react';
import AddForm from 'fish-ui-ac/dist/Form/AddForm/AddForm';
import helpers from '../helpers/helpers.js';
import {fields} from '../configs/addForm';
import {requests} from '../helpers/constants.js';

var makeRequest     = helpers.makeRequest,
    POST            = requests.POST;

class AddFormWrapper extends Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, form){
        //can add user permissions here later
        let addForm = {...form};
        addForm.isPending = true;
        makeRequest(POST, '/add', addForm);
    }

    render(){
        var me           = this,
            props        = me && me.props,
            handleSubmit = me && me.handleSubmit,
            header       = props && props.header;

        return(
            <div className="add-wrapper">
                <AddForm header={header} fields={fields} submit={handleSubmit}/>
            </div>
        );
    }
}

export default AddFormWrapper;