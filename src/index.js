import { HeaderElement } from '../components/header/header-element.js';
import { CoreElement } from '../components/core/core-element.js';
import { data } from './data.js';

const header = document.createElement('header-element');
const app = document.createElement('core-element');

app.data = data;

document.body.appendChild(header);
document.body.appendChild(app);