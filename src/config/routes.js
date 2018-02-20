import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import AuthContainer from '../containers/AuthContainer';
import WelcomeContainer from '../containers/WelcomeContainer';
import HomeContainer from '../containers/HomeContainer';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="welcome" component={WelcomeContainer} title="Welcome" initial/>
                <Scene key="auth" component={AuthContainer} title="Please Login" />
                <Scene key="home" component={HomeContainer} title="Home" />
            </Stack>
        </Router>
    );
}

export default RouterComponent;