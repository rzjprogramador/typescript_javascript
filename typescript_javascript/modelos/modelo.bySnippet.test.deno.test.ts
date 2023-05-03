// deno-lint-ignore-file no-explicit-any no-unused-vars
import { expect } from "https://deno.land/x/expect@v0.2.10/expect.ts";

interface ArgsSut {
  key1: string;
  key2: number;
}

// mocks
type ReturnMockFail = {
  key1: string;
  key2: number;
};
type ReturnMockOk = {
  key1: string;
  key2: number;
};

const inputMockOk: ArgsSut = { key1: "abcd", key2: 10 };
const inputMockFail: ArgsSut = { key1: "abcd", key2: 10 };

const resultFailKey1Expected: ReturnMockFail = { key1: "abcd", key2: 10 };

const resultOkKey1Expected: ReturnMockOk = { key1: "abcd", key2: 10 };

const sutFunctionMock1 = (d: ArgsSut) => d;

// sut

const makeSut = (d: ArgsSut) => {
  return {
    sut1: sutFunctionMock1(d),
  };
};

Deno.test("[ Fail >> ... ] deve retornar ...", () => {
  const input = inputMockFail;
  const { sut1 } = makeSut(input);
  const actual = sut1;
  const resultExpected: ReturnMockFail = resultFailKey1Expected;

  // console.log("TEST {{ ACTUAL }} >>>  ", actual);

  expect(actual).toEqual(resultExpected);
});

Deno.test("[ OK  >> ... ] deve retornar sucesso.", () => {
  const input = inputMockOk;
  const { sut1 } = makeSut(input);
  const actual = sut1;
  const resultExpected = resultOkKey1Expected;

  console.log("TODO: {{ OK >> DEVE RETORNAR O OBJ OK }} >>>  ", actual);

  expect(actual).toEqual(resultExpected);
});
