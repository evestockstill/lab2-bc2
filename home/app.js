import Component from './component.js';
import Header from './header.js';
import AnimalList from './animalList.js';
import FilterAnimals from './filterAnimals.js';
import animals from '../data/images.js';
// import FilterByHorns from '../home/filterByHorns.js';

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
                let filteredAnimals = null;
                if (!animalKey) {
                    filteredAnimals = animals;
                }
                else {
                    filteredAnimals = animals.filter(animal => animal.keyword === animalKey);
                }
                const updateProps = { animals: filteredAnimals };
                animalList.update(updateProps);
            }
        });
        const filterAnimalsDOM = filterAnimals.renderDOM();
        const animalOptions = dom.querySelector('.animal-type-filter');
        animalOptions.appendChild(filterAnimalsDOM);
    }
    

    //     const filterByHorns = new FilterByHorns({
    //         animals: animals,
    //         onFilter: (animalHornKey) => {
    //             let filteredByHorns = null;

    //             if (filteredByHorns) {
    //                 animals.filter(animal => animal.horns <= 5 === animalHornKey);
    //             } else {
    //                 filteredByHorns = animals.filter(animal => animal.horns >= 5 === animalHornKey);
    //             }
    //             const updateProps = { animals: filteredAnimals };
    //             animalList.update(updateProps);
    //         }
    //     });
    //     const filterByHornDOM = filterAnimals.renderDOM();
    //     const hornOptions = dom.querySelector('.horn-type-filter');
    //     hornOptions.appendChild(filterAnimalsDOM);
    // }


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
