import Component from './component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
                <h1 class="title">Horned Animals</h1>
            </header>
        `;
    }
}

export default Header;