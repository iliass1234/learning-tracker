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
        this.#pinnedWord.style = 'margin-bottom: 0;width: 100%; display: block;font-family: monospace; font-size: 15px; font-weight: 600;'

        this.#container.style = 'padding-bottom: 60px;grid-column: 2 / 3; display:flex; justify-content: center; align-items: center; height: 100%; width: 100%; background-color: transparent;'
        this.#pinnedSection.style = 'padding-left: 10px; display:flex; flex-wrap:wrap; justify-content: start; gap: 10px; align-items: baseline; height: auto; width: 900px; max-width: 900px; background-color: transparent;'

        this.#pinnedSection.appendChild(this.#pinnedWord)
    }
    draw(whereToDraw){
        this.#container.appendChild(this.#pinnedSection)
        whereToDraw.appendChild(this.#container)
    }
    addItem(item){
        this.itemsCounter++ ;

        let place = document.getElementById(this.#pinnedSection.id); 
        if (this.itemsCounter > 0) {
            console.log(place)
            let firstElement = place.firstChild;
            place.insertBefore(this.#pinnedWord, firstElement)
        }

        console.log(this.itemsCounter)
        if (item instanceof NoteCard) {
            console.log('its a card');
            item.draw(place);

        }
    }
    removeCard(card){
        this.itemsCounter-- ;
        let pinArea = document.getElementById(this.#pinnedSection.id);

        if (this.itemsCounter < 1) {
            let firstElement = pinArea.firstChild;
            pinArea.removeChild(firstElement);
        }

        let cardToBeRemovedElement = document.getElementById(card.id);
        pinArea.removeChild(cardToBeRemovedElement);
    }
}