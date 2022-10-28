import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import mock from "./Mock";

beforeEach(() => {
  global.fetch = jest.fn(async () =>
    Promise.resolve({
      json: async () => Promise.resolve(mock),
    })
  );
});

describe("Testando Star Wars", () => {
  test("Teste ", async () => {
    render(<App />);
    const testValor = screen.getByTestId("value-filter");
    const testColuna = screen.getByTestId("column-filter");
    const testOperador = screen.getByTestId("comparison-filter");
    const button = screen.getByTestId("button-filter");

    const tatooine = await screen.findByRole("cell", { name: "Tatooine" });
    expect(tatooine).toBeInTheDocument();

    userEvent.selectOptions(testColuna, ["population"]);
    userEvent.selectOptions(testOperador, ["maior que"]);
    userEvent.type(testValor, "10");
    userEvent.click(button);

    userEvent.selectOptions(testColuna, ["orbital_period"]);
    userEvent.selectOptions(testOperador, ["menor que"]);
    userEvent.type(testValor, "100");
    userEvent.click(button);

    userEvent.selectOptions(testColuna, ["diameter"]);
    userEvent.selectOptions(testOperador, ["igual a"]);
    userEvent.type(testValor, "1000");
    userEvent.click(button);

    userEvent.selectOptions(testColuna, ["rotation_period"]);
    userEvent.selectOptions(testOperador, ["igual a"]);
    userEvent.type(testValor, "10000");
    userEvent.click(button);

    userEvent.selectOptions(testColuna, ["surface_water"]);
    userEvent.selectOptions(testOperador, ["igual a"]);
    userEvent.type(testValor, "100000");
    userEvent.click(button);
  });
});
