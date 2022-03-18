import React, { useContext, useState } from 'react';
import './style.scss';
import SearchIcon from '../../assets/img/searchIcon.svg';
import Layout from '../../ReusableComponents/Layout';
import { AppContext } from '../../Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Home = () => {
  const histroy = useHistory();
  const context = useContext(AppContext);

  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    context.dispatchActions('CALL_API', {
      cb: () => {
        histroy.push('/1');
      }
    });
  };

  const handleChange = (e) => {
    setCity(e.target.value);
    context.dispatchActions('CHANGE_CITY', { city: e.target.value });
  };
  return (
    <Layout>
      <form className="home" onSubmit={onSubmit}>
        <div className="home_inputContainer">
          <img src={SearchIcon} alt="search" className="home_searchIcon" onClick={onSubmit} />
          <input
            type="text"
            className="home_input"
            value={city}
            onChange={handleChange}
            placeholder="Enter City Name"
          />
        </div>
      </form>
    </Layout>
  );
};

export default Home;
