import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GridChart from './components/gridChart/gridChart.js'

import './App.css';

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/ee'>
                        <GridChart />
                    </Route>
                    <Route path='/'>
                        asdf
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}