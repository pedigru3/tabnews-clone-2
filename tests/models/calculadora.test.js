const calculadora = require("../../models/calculadora.js");

test("2 + 2 deve retornar 4", () => {
  const result = calculadora.somar(2, 2);
  expect(result).toBe(4);
});

test("5 + 100 deve retornar 105", () => {
  const result = calculadora.somar(5, 100);
  expect(result).toBe(105);
});

test("5 + banana deve retornar erro", () => {
  const result = calculadora.somar(5, "banana");
  expect(result).toBe("Erro");
});

test("2 strings deve retornar erro", () => {
  const result = calculadora.somar("t", "banana");
  expect(result).toBe("Erro");
});
