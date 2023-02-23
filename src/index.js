import { BodyElement } from '../components/body-element.js';
import { data } from './data.js';

const app = document.createElement('body-element');

app.data = data;

document.body.appendChild(app);