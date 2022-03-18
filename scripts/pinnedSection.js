import { NoteCard } from "/scripts/noteCard.js";


export class PinnedSection {

    #container = document.createElement('div');
    #pinnedSection = document.createElement('div');

    constructor(){

        this.#container.id = 'pin-container';
        this.#pinnedSection.id = 'pin-area';

        this.#container.style = 'grid-column: 2 / 3; display:flex; justify-content: center; align-items: center; height: 100px; width: 100vw; background-color: red;'
        this.#container.style = 'padding: 20px 10px; display:flex; justify-content: start; align-items: center; height: 100%; width: 100vw; max-width: 900px; background-color: green;'
    }

    draw(whereToDraw){
        this.#container.appendChild(this.#pinnedSection)
        whereToDraw.appendChild(this.#container)
    }

    addItem(item){
        let place = document.getElementById('pin-area') ?? this.#pinnedSection; 
        if (item instanceof NoteCard) {
            console.log('its a card');
            item.draw(place);

        }
    }
}