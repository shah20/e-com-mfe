import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
    }

    el.innerHTML = products;
}

// If running in isolation then webpack would set the NODE_ENV variable
// And assuming in isolation only we are having div with id dev-products
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        mount(el);
    }
}

// Exporting the method for Container app and 
// let Container app decide how to render the product app
export { mount };