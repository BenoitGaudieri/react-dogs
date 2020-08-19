import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetail from "./DogDetail";

export default class Routes extends Component {
    render() {
        const getDog = (props) => {
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(
                (dog) => dog.name.toLowerCase() === name.toLowerCase()
            );
            return <DogDetail {...props} dog={currentDog} />;
        };
        return (
            <Switch>
                <Route
                    exact
                    path="/dogs"
                    render={() => <DogList dogs={this.props.dogs} />}
                />
                <Route exact path="/dogs/:name" render={getDog} />
                <Redirect to="/dogs"></Redirect>
            </Switch>
        );
    }
}
