import React, {Component} from 'react';
import Search from 'fish-ui-ac/dist/Form/Search/SearchField';
import { setSearchFilter } from '../actions/cards';

import { connect } from 'react-redux';

class SearchWrapper extends Component {
    constructor(props){
        super(props);
        this.filter = this.filter.bind(this);
    }

    filter(e){
        var me           = this,
            props        = me && me.props,
            updateFilter = props && props.updateFilter,
            target       = e && e.target,
            value        = target && target.value;
        updateFilter(value);
    }

    render(){
        var me      = this,
            filter  = me && me.filter;

        return(
            <div className="search-wrapper">
                <Search placeholder="Search for an item" filter={filter} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchFilter: state.searchFilter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateFilter(searchFilter){
            dispatch(setSearchFilter(searchFilter));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchWrapper);