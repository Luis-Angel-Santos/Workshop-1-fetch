/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const BaseUrl = "https://platzi-avo.vercel.app";
const appNode = document.querySelector('#app');
appNode.addEventListener('click', () => {
    if (event.target.nodeName == 'H2') {
        window.alert('Has hecho click :)')
    }  
});
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('es', {
        style: 'currency',
        currency: 'USD',
    }).format(price)

    return newPrice;
};

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
            imagen.className = "h-40 w-40 md:h-40 md:w-40 rounded-full mx-auto ";

            const titulo = document.createElement('h2');
            titulo.textContent = item.name;
            titulo.className = 'text-center';
            titulo.style.fontSize = '1rem';

            const precio = document.createElement('div');
            precio.textContent = formatPrice(item.price);
            precio.style.color = 'dark';
            precio.style.backgroundColor = 'yellow'
            precio.className = 'text-center rounded-lg p-1 w-20 mx-auto'

            const container = document.createElement('div');
            container.append(imagen, titulo, precio);
            container.className = 'rounded-lg p-6 m-2 hover:bg-gray-300'
            

            todoslosItems.push(container);
        });
        appNode.append(...todoslosItems);
       //appNode.className = 'md:flex'
    });

