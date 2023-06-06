---
marp: true
---
# Modularização LibRZ

## SEQUENCIA S LOGICAS MDULAR

### ARQUIVOS DA RAIZ
1. main ->  modules/components -> feature.ts

---
## DEPENDENCIAS
### Arquivo DepEntidadeFeature
1. > entityFeatureDeps - #Unique  #PoloUnico #Replicas -> alimenta o _RootDependencias
   1. @returns <importando Features > + <gerando alias Replica>  + <exportando Replica gerada para uso na app>.


