import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

// Pages
import TutorialPage from './containers/Public/TutorialPage';
import LoginPage from './containers/Public/LogInPage';
import SignUpPage from './containers/Public/SignUpPage';
import ForgotPasswordPage from './containers/Public/ForgotPasswordPage';
import DashboardPage from './containers/Dashboard';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="loginPage" direction="vertical" schema="modal" component={LoginPage} />
        <Scene key="signUpPage" direction="vertical" schema="modal" component={SignUpPage}/>
        <Scene key="tutorialPage" initial component={TutorialPage} hideNavBar />
        <Scene key="forgotPasswordPage" component={ForgotPasswordPage} hideNavBar />
        <Scene key="dashboardPage" component={DashboardPage} title='Home' />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
