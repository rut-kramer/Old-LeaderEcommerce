import React, { Component } from 'react';
import CreateStore from './createStore';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RoutingMain from './compsEditStore/routingMain';
import UserHome from './userHome'
import ElasticCarousel from './carousel'
import Admin from './admin'


class Content extends Component {

    render() {
        return (
            <Router>
                <div className="Content">
                    <Switch>
                        <Route path="/0/userhome/:username">
                            <UserHome />
                        </Route>
                        <Route exact path="/0/new-store">
                            <CreateStore />
                        </Route>
                        <Route exact path="/0/carousel">
                            <ElasticCarousel />
                        </Route>
                        <Route exact path="/0/admin">
                            <Admin />
                        </Route>
                        <RoutingMain></RoutingMain>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Content;