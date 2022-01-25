/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//web api

//conectarnos al servidor
window
    .fetch(url)
    //procesar la respuesta y convertirla a JSON
    .then(respuesta => respuesta.json())
    //JSON -> Data -> Renderizar info
    .then((responseJson) => {
        const todoslosItems = [];
        responseJson.data.forEach(item => {
            //crear imagen, titulo, precio
            const imagen = document.createElement('img');
            const titulo = document.createElement('h2');
            const precio = document.createElement('div');

            const container = document.createElement('div');
            document.body.append(imagen, titulo, precio);

            todoslosItems.push(container);
        });
        document.body.append(...todoslosItems);
    });

