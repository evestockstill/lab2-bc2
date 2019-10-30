import Component from '../home/component.js';

class AnimalItem extends Component {
    renderHTML() {
        const animal = this.props.animal;
        return /*html*/`
            <li class="animals">
        <div class="grid">
            <fieldset class="animal-title">
                <legend>${animal.title}</legend>
                <img class="pic" src="${animal.url}">
                    <p class="info" title ='${animal.description} and has ${animal.horns} horns'> ${animal.title}   </p>
                    <p class="horns"></p>
            </fieldset>
        </div>
        </li>
        `;
    }
}

export default AnimalItem;