import React, {Component} from 'react';
import FilterField from 'fish-ui-ac/dist/Form/Filter/FilterField';
import {filters} from '../configs/filters';
import { connect } from 'react-redux';
import { setFilters } from '../actions/cards';


class FilterWrapper extends Component {
    constructor(props){
        super(props);
        this.updateFilter = this.updateFilter.bind(this);
        this.state = {
            filter: {}
        }
    }

    updateFilter(event){
        var me            = this,
            props         = me && me.props,
            state         = me && me.state,
            filter        = state &&{ ...state.filter },
            updateFilters = props && props.updateFilters,
            target        = event && event.target,
            checked       = target && target.checked,
            name          = target && target.name;

        if(checked){
            filter[name] = checked;
        }else{
            delete filter[name];
        }

        this.setState({
            filter: filter
        },updateFilters(filter))
    }

    render(){
        var me              = this,
            updateFilter    = me && me.updateFilter;
        return(
            <div className="filter-wrapper">
                <FilterField checkboxes={filters} changeFilter={updateFilter}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateFilters(filter){
            dispatch(setFilters(filter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterWrapper);