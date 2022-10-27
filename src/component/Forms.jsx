import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Forms() {
  const { name, handleName, operador, coluna, valor, handleColuna, handleOperador,
    handleValor, filterSelect, reptFilter } = useContext(MyContext);

  return (
    <form>
      <label htmlFor="name">
        Nome:
        <input
          type="text"
          id="name"
          value={ name }
          onChange={ handleName }
          data-testid="name-filter"
        />
      </label>
      <label htmlFor="column-filter">
        Coluna:
        <select
          name="column-filter"
          id="column-filter"
          data-testid="column-filter"
          value={ coluna }
          onChange={ handleColuna }
        >
          {
            reptFilter.map((e, index) => (
              <option key={ index } value={ e }>
                { e }
              </option>
            ))
          }
        </select>
      </label>
      <label htmlFor="comparison-filter">
        Operador:
        <select
          name="comparison-filter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ operador }
          onChange={ handleOperador }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input
          name="value-filter"
          type="number"
          id="value-filter"
          data-testid="value-filter"
          value={ valor }
          onChange={ handleValor }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterSelect }
      >
        Filtrar
      </button>
    </form>
  );
}

export default Forms;
