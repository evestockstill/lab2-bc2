import Component from './component.js';
import AnimalItem from './animalItem.js';

class AnimalList extends Component {
    renderHTML() {
        return /*html*/`
            <ul class="list-animals">
        `;
    }
    onRender(dom) {
        const animals = this.props.animals;

        animals.forEach(animal => {
            const props = { animal: animal };
            const animalItem = new AnimalItem(props);
            const animalItemDOM = animalItem.renderDOM();
            dom.appendChild(animalItemDOM);
        });
    }
}

export default AnimalList;