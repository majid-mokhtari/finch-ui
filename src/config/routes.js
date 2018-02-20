import React from 'react';
import { Stack, Scene, Router } from 'react-native-router-flux';
import AuthContainer from '../containers/AuthContainer';
import Login from '../components/Login';
import Signup from '../components/Signup';
import HomeContainer from '../containers/HomeContainer';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root">
                <Scene key="auth" component={AuthContainer} title="Welcome" initial/>
                <Scene key="login" component={Login} title="Please Login" />
                <Scene key="signup" component={Signup} title="Please Sign up" />
                <Scene key="home" component={HomeContainer} title="Home" />
            </Stack>
        </Router>
    );
}

export default RouterComponent;