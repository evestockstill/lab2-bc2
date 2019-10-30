import AnimalItem from '../home/animalItem.js';
const test = QUnit.test;
QUnit.module('Render Animal Item');

test('renders html from data', assert => {
    const animal = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
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
    const props = { animal: animal };
    const animalItem = new AnimalItem(props);
    const html = animalItem.renderHTML();

    assert.htmlEqual(html, expected);
});