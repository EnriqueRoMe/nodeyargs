
const fs = require('fs');
const color = require('colors');
 const crearArchivo = async (base = 5, listar , limite) => {

    try {


        let salida = "";
  for (let i = 0; i <= limite; i++) {
    salida += `${base} ${color.blue('*')} ${i} = ${color.red(base * i)}\n`;
  }

    if(listar){
       console.log('================================');
  console.log('Tabla del' , color.green(base));
  console.log('================================');
    console.log(salida);
    }
 
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

  return( `tabla-${base}.txt ha sido creado`);
    } catch (error) {
        return error;
    }
  
};


module.exports= {
  crearArchivo
}