import fs from "fs"
import { yarg } from "./config/plugins/args.plugin";
const {b: base, l: limit,s: showTable} = yarg
console.log(yarg);

let outputMessage :string = "";

const headerMessage :string = `
==============================
        Tabla del ${base}
==============================
`

for(let i=0; i<=limit;i++){
    outputMessage += `${base} x ${i} = ${base*i}\n`
}

outputMessage = headerMessage + outputMessage;
if(showTable){
    console.log(outputMessage);
}
const outputPath : string = `outputs`

fs.mkdirSync(outputPath,{recursive:true});

fs.writeFileSync(`${outputPath}/tabladel${base}.txt`,outputMessage)