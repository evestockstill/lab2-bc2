import Component from './component.js';
import AnimalList from '../home/animalList.js';
class FilterAnimals extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
            AnimalList.update();
        });
    }
    renderHTML() {
        return /*html*/`
            <select class="animal-type-filter">
            <option value="" selected>All Types</option>
            <option value="chameleon">Chameleon</option>
            <option value="rhino">Rhino</option>
            <option value="narwhal">Narwhal</option>
            <option value="unilego">Unilego</option>
            <option value="unicorn">Unicorn</option>
            <option value="triceratops">Triceratops</option>
            <option value="markhor">Markhor</option>
            <option value="mouflon">Mouflon</option>
            <option value="addax">Addax</option>
            <option value="Mouflon">Mouflon</option>
        </select>
        `;
    }
}

export default FilterAnimals;
