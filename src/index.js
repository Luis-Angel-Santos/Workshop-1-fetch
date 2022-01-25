/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BaseUrl = "https://platzi-avo.vercel.app"
const appNode = document.querySelector('#app')
//web api

//conectarnos al servidor
window
    .fetch(`${BaseUrl}/api/avo`)
    //procesar la respuesta y convertirla a JSON
    .then(respuesta => respuesta.json())
    //JSON -> Data -> Renderizar info
    .then((responseJson) => {
        const todoslosItems = [];
        responseJson.data.forEach(item => {
            //crear imagen, titulo, precio
            const imagen = document.createElement('img');
            imagen.src = `${BaseUrl}${item.image}`;
            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
            const precio = document.createElement('div');
            precio.textContent = item.price;

            const container = document.createElement('div');
            document.body.append(imagen, titulo, precio);

            todoslosItems.push(container);
        });
        appNode.append(...todoslosItems);
    });

