//Promesas
const usuarioAutenticado = new Promise (
    (resolve,reject)=>{
        const auth = true;
        console.log("esperando respuesta")
        setTimeout(() => {
            if (auth) {
                resolve("usuario autenticado");
            } else {
                reject("No se puedo Iniciar");
            }
        }, 5000);
        
    }
);

//console.log(usuarioAutenticado);
//fulfilled <-- ya se cumplio la promesa

usuarioAutenticado
.then((resultado)=>console.log(resultado))
.catch((error)=>close.log(error))