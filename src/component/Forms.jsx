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
    </form>
  );
}

export default Forms;
