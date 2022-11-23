
// import crearArchivo from "./helpers/multiplicar.js"
const {crearArchivo} = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');


// console.log(process.argv);
// console.log(argv);

console.log('base : yargs', argv.b);



crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo))
.catch(error => console.log(error));


