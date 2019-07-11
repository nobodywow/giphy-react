import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Preview from './components/Preview/Preview';
import Search from './components/Search/Search';
import SingleGif from './components/SingleGif/SingleGif';
 
const App = () => {

    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Search}/>
                <Route path='/search' exact component={Preview}/>
                <Route path='/gif/:id' exact component={SingleGif}/>           
            </Switch>
        </Router>
        
    );
    
}

export default App;