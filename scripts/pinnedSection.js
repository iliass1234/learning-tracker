import { NoteCard } from "/scripts/noteCard.js";


export class PinnedSection {

    #container = document.createElement('div');
    #pinnedSection = document.createElement('div');
    #othersWord = document.createElement('h5');
    #pinnedWord = document.createElement('h5')


    constructor(){
        this.itemsCounter = 0;
        this.#container.id = 'pin-container';
        this.#pinnedSection.id = 'pin-area';


        this.#othersWord.innerText = 'OTHERS';
        this.#pinnedWord.innerText = 'PINNED';

        this.#container.style = 'padding-bottom: 60px;grid-column: 2 / 3; display:flex; justify-content: center; align-items: center; height: 100%; width: 100%; background-color: transparent;'
        this.#pinnedSection.style = ' padding-left: 10px; display:flex; flex-wrap:wrap; justify-content: start; gap: 10px; align-items: baseline; height: 100%; width: 900px; max-width: 900px; background-color: transparent;'
    }
    draw(whereToDraw){
        this.#container.appendChild(this.#pinnedSection)
        whereToDraw.appendChild(this.#container)
    }

    addItem(item){
        this.itemsCounter++ ;
        console.log(this.itemsCounter)
        let place = document.getElementById(this.#pinnedSection.id); 
        if (item instanceof NoteCard) {
            console.log('its a card');
            item.draw(place);

        }
    }
    removeCard(card){
        this.itemsCounter-- ;
        let pinArea = document.getElementById(this.#pinnedSection.id);
        let cardToBeRemovedElement = document.getElementById(card.id)
        pinArea.removeChild(cardToBeRemovedElement)
    }
}