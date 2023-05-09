---
marp: true
---

# OBJETO

1. # Desestruturacao
   1. _conceito_: "desestruturacao é extrair props de um objeto e deixa-las
      livre no escopo para reuso, tambem podemos fazer copias do objeto e
      decidir se nesta copia adicionamos ou removemos campos."

   2. _exemplo_:
      ```
      // exemplo Desestruturacao 

      const objeto1 = {
      campo1: "vcampo1", campo2: 10 };

       const { campo1 } = objeto1;
       console.log(campo1);
      ```

---

1. # removendo_campos_para_nao_serem_copiados
   1. conceito: rest_spreed : o que for adicionado antes dos
      ..3pontoVarInventada sera removido do resultado da copia

```
/* removendo_campos_para_nao_serem_copiados escolhendo os
      membros a serem copiados para o novo objeto - de proposito nao copiando o
      primeiro campo e pegando o resto */

const { campo10, ...resto } = objeto2; const newObject = resto;
console.log(newObject); // narracao: remove campo10, e copia o resto para esta
variavelInventada da fonte objeto2
```

---

1. # adicionando_novos_campos_para_a_copia
   1. conceito: spreed :: o que for adicionado depois dos
      ...3pontosObjetoASerCopiado sera adicionado ao novo objeto resultado
      diferenca spreed adiciona e rest remove

```
/*
    adicionando_novos_campos_para_a_copia
    */

    const novoObj1 = { ...objeto2, new1: "v1", new2: "v2" };
    console.log(novoObj1);
    // narracao: ...copia tudo de objeto2, e adiciona estes novos campos com estes valores
```

---
