// bootstrap.css.js
import {
    css,
    unsafeCSS,
    LitElement
} from 'lit';
// import css files
import classless from './classless.css';
import themes from './themes.css';



// const classlessTheme = css `
// ${themes}
// `;
class Theme extends LitElement{
    static styles = unsafeCSS(classless);
}
export class BaseElement extends Theme{
    static styles = unsafeCSS(themes);
    
  }