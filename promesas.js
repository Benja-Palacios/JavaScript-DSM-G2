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

//Funcion declarada
/**
 * function cuadradoPromesa(value) {
    if(typeof value !== "number"){
        return Promise.reject(`Error, el valor ${value} no es un numero`)
    }

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({
                value: value,
                result: Math.pow(value,2)
            })
        }, 3000);
    })

};


cuadradoPromesa(2)
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa(3)
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa(4)
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa("x")
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        
    })
    .catch(err => console.log(err));

 */
    //funcion de flecha
    
    const cuadradoPromesa2 = (value) =>{
        if(typeof value !== "number"){
            return Promise.reject(`Error, el valor ${value} no es un numero`)
        }
    
        return new Promise((resolve, reject) => {
    
            setTimeout(() => {
                resolve({
                    value: value,
                    result: Math.pow(value,2)
                })
            }, 3000);
        })
    
    }
    
    cuadradoPromesa2(2)
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa2(3)
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa2(4)
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        return cuadradoPromesa2("x")
    })
    .then((respuesta) => {
        console.log("Inicia la promesa");
        console.log(`Promesa: valor: ${respuesta.value}
        cuadrado: ${respuesta.result}`
        );
        
    })
    .catch(err => console.log(err));
    