import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  // const [name, setName] = useState('');

  // const handleName = ({ target }) => {
  //   setName(target.value);
  // };

  useEffect(() => {
    const reqApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      setData(results);
    };
    reqApi();
  }, []);

  // const contexto = React.useMemo(() => ({
  //   data,
  //   name,
  //   handleName,
  // }), [data, name]);

  return (
    <MyContext.Provider value={ data }>
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default MyProvider;
