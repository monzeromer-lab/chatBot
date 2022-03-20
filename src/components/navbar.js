
// import packages
import {html, LitElement} from 'lit';
// import {BaseElement} from '../style.js';

export class Navbar extends LitElement{
    render(){
        return html`
        <nav>
        <ul>
          <li>Chatbot</li>
          <li class="float-right sticky">Sticky Right</li>
        </ul>
      </nav>
        `;
    }
}

customElements.define("nav-bar", Navbar);