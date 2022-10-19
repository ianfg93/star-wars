import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const reqApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      setData(results);
    };
    reqApi();
  }, []);

  const contexto = data;

  return (
    <MyContext.Provider value={ contexto }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default MyProvider;
