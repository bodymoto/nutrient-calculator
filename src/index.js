import { HeaderElement } from '../components/header/header-element.js';
import { CoreElement } from '../components/main/main-element.js';
import { data } from './data.js';

const header = document.createElement('header-element');
const main = document.createElement('main-element');

main.data = data;

document.body.appendChild(header);
document.body.appendChild(main);