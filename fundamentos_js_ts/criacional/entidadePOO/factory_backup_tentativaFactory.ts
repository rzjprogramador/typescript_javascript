class ClienteFisicoFactory {
  private constructor(public readonly args: any) {
    this.args = args;
  }

  static create(args: any) {
    const foo = args;
    const res = { ...foo };
    return new ClienteFisicoFactory(res);
  }

  // membros instancias
  showIdade() {
    const year = 2023;
    return year - this.args.dataNascimento.ano;
  }
}

const createNewClienteFisicoFactory = (a: any) => {
  const instance = ClienteFisicoFactory.create(a);
  return instance.args;
};

export default 1;
