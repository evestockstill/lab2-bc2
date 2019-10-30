import Component from './component.js';
import AnimalList from '../home/animalList.js';
class FilterByHorns extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;
        select.addEventListener('input', () => {
            onFilter(select.value);
            AnimalList.update();
        });
    }
    renderHTML() {
        return /*html*/`
            <select class="animal--filter">
            <option value="" selected>All Types</option>
            <option value="5">Chameleon</option>
            <option value="10">Rhino</option>
            
        </select>
        `;
    }
}

export default FilterByHorns;
