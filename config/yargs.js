const argv = require('yargs')
                .option('h', {
                    alias: 'limite',
                    type: 'number',
                    default: 10,
                    describe : 'Limite de numeros a multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'La base del numero a obtener'
                })
                .check((argv, options)=> {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero';
                    }
                    if( isNaN(argv.h)){
                        throw 'El limit debe de ser un numero';
                    }
                    return true;
                })
                .argv;
                
module.exports=  argv;