import React, {Component} from 'react';
import CardWrapper from './components/CardWrapper';
import SearchWrapper from './components/SearchWrapper';
import FilterWrapper from './components/FilterWrapper';
import './app.scss';

import axios from "axios";

class App extends Component {
    componentWillMount() {
        axios({
          method: "get",
          url: "/test"
        })
          .then(response => {
            if (response.status === 200) {
                console.log(response.data);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    render(){
        return( 
            <div>
                <SearchWrapper/>
                <FilterWrapper/>
                <CardWrapper/>
            </div>
        );
    }
}

export default App;