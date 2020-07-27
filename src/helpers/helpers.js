import {Fish} from '@styled-icons/fa-solid/Fish';
import {Spider} from '@styled-icons/fa-solid/Spider';
import {Gift} from '@styled-icons/fa-solid/Gift';
import Card from 'fish-ui-ac/dist/Card/Card';
import React from 'react';
import forEach from 'lodash/forEach';
import {typeConstants, requests} from './constants.js';
import axios from "axios";

var FISH    = typeConstants.FISH,
    INSECT  = typeConstants.INSECT,
    GET     = requests.GET,
    POST    = requests.POST;

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

function getCardItems(items, filter){
    var returnItems = [],
        filtered    = filter || false,
        searchFilter= filter && filter.search || false, 
        typeFilter  = filter && !isObjectEmpty(filter.types) && filter.types || false,
        isPending   = true,
        shouldAdd, type, typeLogo, title;

    forEach(items, function(item){
        type = item.type.toLowerCase();
        typeLogo = getTypeLogo(type);
        title = item.title || '';
        isPending = item.isPending;
        shouldAdd = true;
        if(filtered){
            if(typeFilter && !typeFilter[type]){
                shouldAdd = false;
            } 
            if(searchFilter && !title.toLowerCase().startsWith(searchFilter)){
                shouldAdd = false;
            }
        }
        
        if(shouldAdd && !isPending){
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

async function makeRequest(type, url, data, useToken){
    if(url){
        if(type === GET){
            return await getRequest(url, data, useToken);
        }
        else{
            return await postRequest(url, data);
        }
    }  
    return false;
}

function postRequest(url, data){
    return new Promise(resolve => {
        axios({
            method: POST,
            url: url,
            data: data
        })
        .catch(error => {
            resolve(false);
        })
        .then(response => {
            if (response && response.status === 200) {
                let data = response.data;
                if(data){
                    resolve(data);
                }
            }
        });
    })
}

function getRequest(url, data, useToken){
    if(useToken){
        return new Promise(resolve => {
            axios({
                method: GET,
                url: url,
                headers: {
                    'Authorization': `token ${data}`
                  }
            })
            .catch(error => {
                resolve(false);
            })
            .then(response => {
                if (response && response.status === 200) {
                    let data = response.data;
                    if(data){
                        resolve(data);
                    }
                }
            });
        })
    }
    else {
        return new Promise(resolve => {
            axios({
                method: GET,
                url: url,
            })
            .catch(error => {
                resolve(false);
            })
            .then(response => {
                if (response && response.status === 200) {
                    let data = response.data;
                    if(data){
                        resolve(data);
                    }
                }
            });
        })
    }
}
    

export default {
    getCardItems: getCardItems,
    makeRequest : makeRequest
};