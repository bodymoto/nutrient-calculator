import { CoreElement } from '../components/core/core-element.js';
import { data } from './data.js';

const app = document.createElement('core-element');

app.data = data;

document.body.appendChild(app);