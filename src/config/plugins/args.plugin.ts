
import yargs, { options } from "yargs"

import {hideBin} from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
//!Se le asignan a las banderas que se envian por consola el tipo que de argumento que recibe y cual es su proposito
//!Despues seguramente se pueda utilizar para cambiar esos datos en la app
    .option("b",{
        alias: "base",
        type: "number",
        demandOption : true,
        describe: "multiplication table base"
    })

    .option("l", {
        alias: "limit",
        type : "number",
        default : 10,
        describe : "Multiplication table limit"
    })
    .option("s",{
        alias: "show",
        type : "boolean",
        default: false,
        describe: "Show multiplication table"
    })
    .option("n",{
        alias: "name",
        type : "string",
        default : "multiplication-table",
        describe : "File Name"
    })
    .option("d",{
        alias: "destination",
        type: "string",
        default: "outputs",
        describe: "File destination"
    })
//!Validaciones de las banderas
    .check((argv,options)=>{

        if(argv.b < 1) throw "La base debe ser mayor a 0"

        return true
    })
    .parseSync()