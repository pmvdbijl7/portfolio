import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "./pages/home/Home";

class App extends Component {
    render() {
        return (
            <Route exact path="/" component={ Home } />
        )
    }
}

export default App;