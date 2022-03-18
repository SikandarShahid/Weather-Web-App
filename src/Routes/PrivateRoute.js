import { Route, Redirect } from 'react-router-dom';
import React, { useContext } from 'react';
import { AppContext } from '../Context';

export default function PrivateRoute({ Component, ...rest }) {
  const constext = useContext(AppContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        constext?.state?.temp?.city ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
