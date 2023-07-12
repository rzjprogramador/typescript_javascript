[
  {
    titulo: "utilizar classe com metodos estaticos",
    categorias: ["classe", "metodos_estaticos"],
    contexto: "use chammando diretamente a classe e seus metodos sem instanciar",
    conceito: "se vai usar só os metodos eles tem que ser staticos e nao precisa criar construtor, nem instanciar a classe... use a classe diretamente chamando os metodos estaticos.",
    observacoes: "#null",
    exemplos: `
    class SuperTests {
      // constructor() { }

      /**
         * @description  catchMessageThrowNewError : captura e compara mensagem exata do lançamento de novo erro.
         * @input  methodTargetAsync  returns .toEqual(messageError)
         * @exemple expect(await getAsyncMessageNewErrorThrowTest ( methodtargetAsync )).toEqual('msg_1')
         */

      static async catchMessageThrowNewError(methodTarget: any) {
        try {
          return await methodTarget()
        }
        catch (err: any) {
          return err.message
        }
      }

    }

    export { SuperTests }
    `,
  }
]

