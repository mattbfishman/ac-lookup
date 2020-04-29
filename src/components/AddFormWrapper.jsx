import React, {Component} from 'react';
import AddForm from 'fish-ui-ac/dist/Form/AddForm/AddForm';
import {fields} from '../configs/addForm';



class AddFormWrapper extends Component {
    constructor(props){
        super(props);
    }

    render(){
        var me      = this,
            props   = me && me.props,
            header  = props && props.header;

        return(
            <div className="add-wrapper">
                <AddForm header={header} fields={fields}/>
            </div>
        );
    }
}

export default AddFormWrapper;