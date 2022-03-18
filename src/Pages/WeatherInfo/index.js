import React, { useContext } from 'react';
import './style.scss';
import { AppContext } from '../../Context';
import { Link } from 'react-router-dom';
import Layout from '../../ReusableComponents/Layout';

const WeatherInfo = () => {
  const context = useContext(AppContext);

  return (
    <Layout>
      <div
        className="weatherInfo"
        style={
          context.state.temp.temperature >= 15
            ? { backgroundColor: 'rgb(228, 136, 16)' }
            : { backgroundColor: 'aqua' }
        }>
        <h1>{context.state.temp.temperature >= 15 ? "It's Hot" : "It's Cold"}</h1>
        <h1>City: {context.state.temp.city}</h1>
        <h1>Coutry: {context.state.temp.country}</h1>
        <h1>Tempearature: {context.state.temp.temperature}°C</h1>
        <Link to="/2" className="weatherInfo_Link">
          Show me a Random City
        </Link>
      </div>
    </Layout>
  );
};

export default WeatherInfo;
