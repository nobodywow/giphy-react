import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PreviewContainer from '../components/Preview/PreviewContainer';
import SearchContainer from '../components/Search/SearchContainer';
import SingleGifContainer from '../components/SingleGif/SingleGifContainer';

const Routes = () => (
    <Router>
        <Switch>
            <Route path='/' exact component={SearchContainer}/>
            <Route path='/search' exact component={PreviewContainer}/>
            <Route path='/gif/:id' exact component={SingleGifContainer}/>           
        </Switch>
    </Router>               
)

export default Routes;