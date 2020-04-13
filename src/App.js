import React, {Component} from 'react';
import CardWrapper from './components/CardWrapper';
import SearchWrapper from './components/SearchWrapper';
import FilterWrapper from './components/FilterWrapper';
import Navbar from 'fish-ui-ac/dist/Navbar/Navbar';
import {navItems} from './configs/nav';
import navLogo from './images/navlogo.png';

import './app.scss';

class App extends Component {

    render(){
        return( 
            <div>
                <Navbar logo={navLogo} navItems={navItems} />
                <SearchWrapper/>
                <FilterWrapper/>
                <CardWrapper/>
            </div>
        );
    }
}

export default App;