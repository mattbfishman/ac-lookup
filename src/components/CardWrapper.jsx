import React, {Component} from 'react';
import helpers from '../helpers/helpers.js';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
var getCardItem = helpers.getCardItems;

class CardWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:  getCardItem(),
            filters: {}
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        var me              = this,
            state           = me && me.state,
            filter          = state && {...state.filter },
            searchFilter    = filter && filter.search,
            typeFilterState = filter && filter.types,
            textFilter      = nextProps && nextProps.searchFilter,
            typeFilter      = nextProps && nextProps.filter,
            cards           = state && {...state.cards},
            shouldUpdate    = false;
    
        if(searchFilter !== textFilter){
            filter.search = textFilter;
            shouldUpdate = true;
        }
        if(!isEqual(typeFilterState, typeFilter)){
            filter.types = typeFilter;
            shouldUpdate = true;
        }

        if(shouldUpdate){
            cards = getCardItem(filter);
            this.setState({
                filter: filter,
                cards: cards
            });
        }
        return true;
        return false;

    }

    render(){
        var me              = this,
            state           = me && me.state,
            cards           = state && state.cards;
            
        return(
            <div className="cards">
                {cards}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        searchFilter: state.cards.searchFilter,
        filter: state.cards.filter
    };
}

export default connect(mapStateToProps, null)(CardWrapper);