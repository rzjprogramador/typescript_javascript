---
marp: true
---
# SEQUENCIAS LOGICAS MODULAR
****************************

## Modularização Lib
> ARQUIVOS DA RAIZ
1. main ->  modules/components -> feature.ts

> DEPENDENCIAS
### Arquivo DepEntidadeFeature
1. > entityFeatureDeps - #Unique  #PoloUnico #Replicas -> alimenta o _RootDependencias
   1. @returns <importando Features > + <gerando alias Replica>  + <exportando Replica gerada para uso na app>.

---

# AppEntitys

## Modularização AppEntitys Import_Map.json
> RootEntitys
1. .vscode/settings -> import_map -> _rootDeps -> cada entityDeps

---



