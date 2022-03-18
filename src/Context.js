/* eslint-disable no-undef */
import { useState, createContext } from 'react';
import axios from 'axios';
import { ErrorAlert } from './utils/alerts';

const AppContext = createContext();

const AppProvider = (props) => {
  const [state, setState] = useState({ city: '', temp: {}, loading: false });
  const APICall = (cb, city) => {
    setState({ ...state, loading: true });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city || state.city}&appid=${
          process.env.REACT_APP_API_KEY
        }`
      )
      .then(function (res) {
        const temp = {};
        temp.city = res?.data?.name;
        temp.country = res?.data?.sys?.country;
        temp.temperature = Math.round(res?.data?.main?.temp - 273.15);
        setState({ ...state, temp, loading: false });
        if (cb) {
          cb();
        }
      })
      .catch((err) => {
        // handle error
        setState({ ...state, loading: false });
        ErrorAlert(err);
      });
  };

  const dispatchActions = (actionType, payload) => {
    switch (actionType) {
      case 'CHANGE_CITY':
        setState({ ...state, city: payload.city });
        return;
      case 'CHANGE_TEMPARETURE':
        setState({ ...state, temp: payload.temp });
        return;
      case 'CALL_API':
        APICall(payload?.cb, payload?.city);
        return;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatchActions }}>{props.children}</AppContext.Provider>
  );
};
export { AppContext, AppProvider };
