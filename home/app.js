import Component from './component.js';
import Header from './header.js';
import AnimalList from './animalList.js';
import FilterAnimals from './filterAnimals.js';
import animals from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        const props = {
            animals: animals
        };
        const animalList = new AnimalList(props);
        const animalListDOM = animalList.renderDOM();
        const listSection = dom.querySelector('.animals');
        listSection.appendChild(animalListDOM);

        const filterAnimals = new FilterAnimals({
            animals: animals,
            onFilter: (animalKey) => {
                let filterAnimals = null;
                if (!animalKey) {
                    filterAnimals = animals;
                }
                else {
                    filterAnimals = animals.filter(animal => {
                        return animal.keyword === animalKey;
                    });
                }
                const updateProps = { animals: filterAnimals };
                animalList.update(updateProps);
            }
        });

        const filterAnimalsDOM = filterAnimals.renderDOM();
        const animalOptions = dom.querySelector('.animal-type-filter');
        animalOptions.appendChild(filterAnimalsDOM);
    }
    renderHTML() {
        return /*html*/`
            <div>
                <main>
                    <section class="animal-type-filter">
                    </section>
                    <section class="animals">
                    </section>
                </main>
            </div>
        `;
    }
}

export default App;
