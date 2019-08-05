import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GifListContainer from '../modules/GifList/components/GifListContainer';
import SearchContainer from '../modules/Search/components/SearchContainer';
import SingleGifContainer from '../modules/Gif/components/GifContainer';

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/' exact component={SearchContainer}/>
            <Route path='/search' exact component={GifListContainer}/>
            <Route path='/gif/:id' exact component={SingleGifContainer}/>
        </Switch>
    </Router>               
)

export default Routes;