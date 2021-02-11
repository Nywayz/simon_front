import React from "react";
import routes from "./routes";
import {Route, Switch} from "react-router";

export const RootNavigator = () => {

    return (
        <Switch>
            {Object.keys(routes).map((routeName) => (
                <Route
                    key={routeName}
                    name={routeName}
                    path={routes[routeName].route}
                    component={routes[routeName].component}
                    exact
                />
            ))}
        </Switch>
    )
}

export default RootNavigator;