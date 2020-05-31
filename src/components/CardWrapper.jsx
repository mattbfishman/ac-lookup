import React, {Component} from 'react';
import helpers from '../helpers/helpers.js';
import { connect } from 'react-redux';
import isEqual from 'lodash/isEqual';
import {requests} from '../helpers/constants.js';

var getCardItem     = helpers.getCardItems,
    makeRequest     = helpers.makeRequest,
    GET             = requests.GET;

class CardWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards:  [],
            cardArray: [],
            filters: {}
        }
    }

    async componentWillMount(){
        let items = await makeRequest(GET, "/items");
        if(items && items.length){
            this.setState({
                cardArray:items,
                cards:getCardItem(items)
            });
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
            cardsArray      = state && {...state.cardArray},
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
            cards = getCardItem(cardsArray, filter);
            this.setState({
                filter: filter,
                cards: cards
            });
        }
        return true;
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