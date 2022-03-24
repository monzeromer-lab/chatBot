// bootstrap.css.js
import {
    css,
    unsafeCSS,
    LitElement
} from 'lit';
// import css files
import bootstrap from '../assets/css/bootstrap.css';
import '../assets/js/bootstrap.bundle.min.js';

// base element which will add the style to the shadoow root
export class BaseElement extends LitElement{
    static styles = unsafeCSS(bootstrap);
    
  }