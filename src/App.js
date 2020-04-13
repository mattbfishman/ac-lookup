import React, {Component} from 'react';
import CardWrapper from './components/CardWrapper';
import SearchWrapper from './components/SearchWrapper';
import FilterWrapper from './components/FilterWrapper';
import './app.scss';

class App extends Component {

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