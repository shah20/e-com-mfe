import faker from 'faker';

const mount = (el) => {
    const message = `<div>You have ${faker.random.number()} items in your cart</div>`;
    el.innerHTML = message
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart');

    if (el) {
        mount(el);
    }
}

export { mount };