import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../ReusableComponents/Layout';
import './style.scss';
import { AppContext } from '../../Context';

const CitiesWeather = () => {
  const context = useContext(AppContext);

  const [city, setCity] = useState('London');

  useEffect(() => {
    context.dispatchActions('CALL_API', { city });
  }, []);

  const handleChange = (e) => {
    setCity(e.target.value);
    context.dispatchActions('CALL_API', { city: e.target.value });
  };

  return (
    <Layout>
        <div
          className="citiesWeather"
          style={
            context.state.temp.temperature >= 15
              ? { backgroundColor: 'rgb(228, 136, 16)' }
              : { backgroundColor: 'aqua' }
          }>
          <select className="citiesWeather_Input" value={city} onChange={handleChange}>
            <option value="London">London</option>
            <option value="New York">New York</option>
            <option value="Paris">Paris</option>
          </select>
          <h1>{context.state.temp.temperature >= 15 ? "It's Hot" : "It's Cold"}</h1>
          <h1>City: {context.state.temp.city}</h1>
          <h1>Coutry: {context.state.temp.country}</h1>
          <h1>Tempearature: {context.state.temp.temperature}°C</h1>
        </div>
    </Layout>
  );
};

export default CitiesWeather;
