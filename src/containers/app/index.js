import React from 'react';
import { Route, Link } from 'react-router-dom';

import Header from '../../components/header';
import Home from '../home';
import Post from '../post';

const App = () => (
    <div className="app">
        <Header/>
        <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={Post} />
        </main>
    </div>
);

export default App;
