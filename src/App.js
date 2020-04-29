import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CardWrapper from './components/CardWrapper';
import SearchWrapper from './components/SearchWrapper';
import FilterWrapper from './components/FilterWrapper';
import AddFormWrapper from './components/AddFormWrapper';
import Navbar from 'fish-ui-ac/dist/Navbar/Navbar';
import {navItems} from './configs/nav';
import navLogo from './images/navlogo.png';

import './app.scss';

class App extends Component {
    render(){
        return( 
          <Router>
            <div>
              <Switch>
                <Route path="/add">
                  <Navbar logo={navLogo} navItems={navItems} />
                  <AddFormWrapper header={"Add Item"} />
                </Route>
                <Route path="/">
                  <Navbar logo={navLogo} navItems={navItems} />
                  <SearchWrapper/>
                  <FilterWrapper/>
                  <CardWrapper/>
                </Route>
              </Switch>
            </div>
          </Router>
        );
    }
}

export default App;