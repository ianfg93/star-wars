import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Forms() {
  const { name, handleName } = useContext(MyContext);

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
        <select id="column-filter" data-testid="column-filter">
          <option value="population">Population</option>
          <option value="orbital_period">Orbital Period</option>
          <option value="diameter">Diameter</option>
          <option value="rotation_period">Rotation Period</option>
          <option value="surface_water">Surface Water</option>
        </select>
      </label>
      <label htmlFor="comparison-filter">
        <select id="comparison-filter" data-testid="comparison-filter">
          <option value="maior que">Maior que</option>
          <option value="menor que">Menor que</option>
          <option value="igual a">Igual a</option>
        </select>
      </label>
      <label htmlFor="value-filter">
        <input type="number" id="value-filter" data-testid="value-filter" />
      </label>
      <button type="button" data-testid="button-filter">
        Filtrar
      </button>
    </form>
  );
}

export default Forms;
