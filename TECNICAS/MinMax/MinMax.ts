// deno-lint-ignore-file no-inferrable-types ban-types

interface ClientRequest {
  primeiroNome: string
  idade: number
}
type ResponseClientModel = ClientRequest | string

const sets = {
  minLettersFirstName: 2
}

const f1 = async (d: ClientRequest, set = sets): Promise<ResponseClientModel> => {
  if (typeof d.primeiroNome === 'string' && d.primeiroNome.length < set.minLettersFirstName) {
    throw `Ops menor que ${set.minLettersFirstName}`
  }
  return await d
}

const listFN = [f1,]

const Min = async (data: ClientRequest, arrayFN: Function[]) => {
  return await arrayFN.reduce((acc, fn) => fn(acc), data)
}

const fakeRequestClient1: ClientRequest = {
  primeiroNome: 'r',
  idade: 17
}

const controllerFN = async (d: ClientRequest) => {
  try {
    const res = await Min(d, listFN)
    return await res
  }
  catch (err) {
    return await err.message
  }
}

// Min(fakeRequestClient1, listFN).then(d => console.log(d))
controllerFN(fakeRequestClient1).then(d => console.log(d))
