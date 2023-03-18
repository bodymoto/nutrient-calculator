import { HeaderElement } from '../components/header/header-element.js';
import { MainElement } from '../components/main/main-element.js';
import { FooterElement } from '../components/footer/footer-element.js';
import { data } from './data.js';

const header = document.createElement('header-element');
const main = document.createElement('main-element');
const footer = document.createElement('footer-element');

main.data = data;

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);

// @media screen and (min-width: 768px) {}
// @media screen and (min-width: 1024px) {}
// @media screen and (min-width: 1280px) {}
// node_modules/.bin/firebase deploy --only hosting