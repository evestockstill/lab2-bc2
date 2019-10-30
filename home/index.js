import App from './app.js';

const app = new App();
const dom = app.renderDOM();
document.body.prepend(dom);