import {items} from '../data/items.js';
import {Fish} from '@styled-icons/fa-solid/Fish';
import {Spider} from '@styled-icons/fa-solid/Spider';
import {Gift} from '@styled-icons/fa-solid/Gift';
import Card from 'fish-ui-ac/dist/Card/Card';
import React from 'react';
import forEach from 'lodash/forEach';
import {typeConstants} from './constants.js';

var FISH    = typeConstants.FISH,
    INSECT  = typeConstants.INSECT;

function isObjectEmpty(obj){
    if(obj){
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
    return false;
}

function getTypeLogo(type){
    if(type === FISH){
        return <Fish/>;
    } else if (type === INSECT){
        return <Spider/>;
    }
    return <Gift/>;
}

function getCardItems(filter){
    var returnItems = [],
        filtered    = filter || false,
        searchFilter= filter && filter.search || false, 
        typeFilter  = filter && !isObjectEmpty(filter.types) && filter.types || false,
        shouldAdd, type, typeLogo, title;

    forEach(items, function(item){
        type = item.type.toLowerCase();
        typeLogo = getTypeLogo(type);
        title = item.title || '';
        shouldAdd = true;
        if(filtered){
            if(typeFilter && !typeFilter[type]){
                shouldAdd = false;
            } 
            if(searchFilter && !title.toLowerCase().startsWith(searchFilter)){
                shouldAdd = false;
            }
        }
            
        if(shouldAdd){
            returnItems.push(
                <Card key={title} title={title} typeLogo={typeLogo} type={type} price={item.price} />,
            )
        }
    });
    return (
        <div className="cards">
           {returnItems}
        </div>
    );    
}

export default {
    getCardItems: getCardItems
};