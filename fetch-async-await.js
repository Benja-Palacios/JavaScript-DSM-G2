const resultado = document.querySelector('#datos')

const obtenerInfo = async()=>{
    const url = 'https://jsonplaceholder.typicode.com/users';

    try {
        const response = await fetch(url)
        const jsonResponse = await response.json();
        
        mostrasrData(jsonResponse);
    } catch (error) {
        console.log(error)
    }
}

const mostrasrData = (data) => {
    let salida = '';
    for (let i = 0; i < data.length; i++) {
        salida+=`<tr>
                    <th scope = "row"> ${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].website}</td>
                    <td>${data[i].address.street}</td>
                </tr>`;
        
    }
    resultado.innerHTML = salida;
}

obtenerInfo();