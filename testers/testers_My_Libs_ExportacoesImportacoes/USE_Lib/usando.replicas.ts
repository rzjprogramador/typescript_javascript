import { replicaLib1, type Arg1, type ResponseLib1 } from "./replica_all_libs.ts";

const request1 = { c1: 'valorC1', c2: 'valorC2' }

const show = (args: Arg1): ResponseLib1 => replicaLib1(args)

console.log(show(request1))