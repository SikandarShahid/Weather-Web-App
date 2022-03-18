import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CitiesWeather from '../Pages/CitiesWeather';
import Home from '../Pages/Home';
import WeatherInfo from '../Pages/WeatherInfo';
import { AppProvider } from '../Context';
import Loader from '../ReusableComponents/Loader';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
  return (
    <AppProvider>
      <Loader />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/1" Component={WeatherInfo} />
          <Route path="/2" component={CitiesWeather} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default Routes;
