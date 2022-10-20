import { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import MyContext from './myContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [operador, setOperador] = useState('maior que');
  const [coluna, setColuna] = useState('population');
  const [valor, setValor] = useState(0);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleOperador = ({ target }) => {
    setOperador(target.value);
  };

  const handleColuna = ({ target }) => {
    setColuna(target.value);
  };

  const handleValor = ({ target }) => {
    setValor(target.value);
  };

  const filterSelect = useCallback(() => {
    const newFilter = data.filter((e) => {
      switch (operador) {
      case 'maior que':
        return Number(e[coluna]) > Number(valor);
      case 'menor que':
        return Number(e[coluna]) < Number(valor);
      case 'igual a':
        return Number(e[coluna]) === Number(valor);
      default:
        return newFilter;
      }
    });
    setData(newFilter);
    console.log(newFilter);
    return newFilter;
  }, [data, operador, coluna, valor]);

  useEffect(() => {
    const reqApi = async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const { results } = await response.json();
      setData(results);
    };
    reqApi();
  }, []);

  const contexto = useMemo(() => ({
    data,
    name,
    handleName,
    operador,
    coluna,
    valor,
    handleColuna,
    handleOperador,
    handleValor,
    filterSelect,
  }), [data, name, operador, coluna, valor, filterSelect]);

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
