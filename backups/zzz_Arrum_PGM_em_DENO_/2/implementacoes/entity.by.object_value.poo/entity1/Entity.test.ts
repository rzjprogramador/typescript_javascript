import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

import { Entity1 } from "./Entity1.ts";

const requestEntity = { nome: "nomeok", idade: 45 };

Deno.test("nome", () => {
  const sutCreate = Entity1.create(requestEntity);

  console.log(sutCreate);

  expect(sutCreate).toEqual(requestEntity);
});
