
    // async and await
    // Funciones arrow
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
    
    //Funcion promesa 
    function cuadradoPromesa(value) {
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
    
    
    
    async function funcionAsyncronaDeclarada(valor  = 0){
        try {
            console.log(`Inicia Async function`);
            let obj = await cuadradoPromesa(valor)
            console.log(`
            Promesa: valor: ${obj.value}
            cuadrado: ${obj.result}`
            );
    
        } 
        catch (error) {
            console.log(error);
        }
    }
    funcionAsyncronaDeclarada(2);
    
    
    
    //funcion en flecha
    const funcionAsynasincronaFlecha = async(valor  = 5)=>{
        try {
            console.log(`Inicia Async function`);
            let obj = await cuadradoPromesa(valor)
            console.log(`
            Promesa: valor: ${obj.value}
            cuadrado: ${obj.result}`
            );
    
        } 
        catch (error) {
            console.log(error);
        }
    }
    funcionAsynasincronaFlecha(3);