

// import packages
import {
    html
} from 'lit'

import {BaseElement} from './style.js';

//import components
import './components/navbar.js';

export class App extends BaseElement {  
    // static styles = unsafeCSS(classless, themes); 

    render() {
        return html `
            <nav-bar></nav-bar>
        `;
    }
}

customElements.define("my-app", App);