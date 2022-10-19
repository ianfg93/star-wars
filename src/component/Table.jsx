import React, { useContext } from 'react';
import MyContext from '../context/myContext';

function Table() {
  const data = useContext(MyContext);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Rotation Period</td>
          <td>Orbital Period</td>
          <td>Diameter</td>
          <td>Climate</td>
          <td>Gravity</td>
          <td>Terrain</td>
          <td>Surface Water</td>
          <td>Population</td>
          <td>Films</td>
          <td>Created</td>
          <td>Edited</td>
          <td>URL</td>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((e) => (
            <tr key={ e.name }>
              <td>{e.name}</td>
              <td>{e.rotation_period}</td>
              <td>{e.orbital_period}</td>
              <td>{e.diameter}</td>
              <td>{e.climate}</td>
              <td>{e.gravity}</td>
              <td>{e.terrain}</td>
              <td>{e.surface_water}</td>
              <td>{e.population}</td>
              <td>{e.films}</td>
              <td>{e.created}</td>
              <td>{e.edited}</td>
              <td>{e.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
