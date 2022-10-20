import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testando Star Wars', () => {
test('I am your test', () => {
  render(<App />);

  const testName = screen.getByTestId('name-filter');
  const testColuna = screen.getByTestId('column-filter');
  const testOperador = screen.getByTestId('comparison-filter');
  const testValor = screen.getByTestId('value-filter');
  const button = screen.getByRole('button', { name: 'Filtrar' });
  const nome = screen.getByRole('textbox', { name: 'Nome:' });
  const coluna = screen.getByRole('combobox', { name: 'Coluna:' });
  const operador = screen.getByRole('combobox', { name: 'Operador:' });
  

  expect(testName).toBeInTheDocument();
  expect(testColuna).toBeInTheDocument();
  expect(testOperador).toBeInTheDocument();
  expect(testValor).toBeInTheDocument();
  expect(button).toBeInTheDocument();
  expect(nome).toBeInTheDocument();
  expect(coluna).toBeInTheDocument();
  expect(operador).toBeInTheDocument();

  userEvent.click(button);

  userEvent.selectOptions(testColuna, 'population')
  expect(testColuna.value).toBe('population')

  userEvent.selectOptions(testColuna, 'rotation_period')
  expect(testColuna.value).toBe('rotation_period')

  userEvent.selectOptions(testColuna, 'surface_water')
  expect(testColuna.value).toBe('surface_water')

  userEvent.selectOptions(operador, 'maior que')
  expect(operador.value).toBe('maior que')

  userEvent.selectOptions(operador, 'menor que')
  expect(operador.value).toBe('menor que')

  userEvent.selectOptions(operador, 'igual a')
  expect(operador.value).toBe('igual a')

})

test('I am your test', () => {
  render(<App />);

  const testName = screen.getByTestId('name-filter');
  const testValor = screen.getByTestId('value-filter');
  const testColuna = screen.getByTestId('column-filter');
  const testOperador = screen.getByTestId('comparison-filter');
  const testButton = screen.getByTestId('button-filter')

  userEvent.type(testName, '');
  expect(testName.value).toBe('')

  userEvent.type(testValor, '');
  expect(testValor.value).toBe('0')

  userEvent.type(testName, '');
  expect(testName.value).toBe('')

  userEvent.selectOptions(testColuna, 'population')
  expect(testColuna.value).toBe('population')

  userEvent.selectOptions(testColuna, 'rotation_period')
  expect(testColuna.value).toBe('rotation_period')

  userEvent.selectOptions(testColuna, 'surface_water')
  expect(testColuna.value).toBe('surface_water')

  userEvent.selectOptions(testOperador, 'maior que')
  expect(testOperador.value).toBe('maior que')

  userEvent.selectOptions(testOperador, 'menor que')
  expect(testOperador.value).toBe('menor que')

  userEvent.selectOptions(testOperador, 'igual a')
  expect(testOperador.value).toBe('igual a')

  userEvent.click(testButton);

})
});
