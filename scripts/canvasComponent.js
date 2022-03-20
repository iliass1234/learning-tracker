export class CanvasComponent {

    #canvas = document.createElement('main');
    #innerContainer = document.createElement('div');
    #theId = 'canvas';
    #innerContainerId = 'canvas-inner-container';

    constructor(){

        this.#canvas.id = 'canvas';
        this.#innerContainer.id = 'canvas-inner-container';
        this.#canvas.style = 'transition: 250ms; grid-column: 2/3; margin: 10px 0px; display: flex;flex-wrap: wrap; justify-content: center; min-height:300px ; height: calc(100%); width: calc(100%); background-color: rgba(255, 255, 255,0); gap: 0px';
        this.#innerContainer.style = 'order: 2; padding: 0px 20px; background-color: transparent; max-width: 1250px; min-width: 300px; height: 100%; display: flex; flex-wrap: wrap; justify-content: center; align-items: flex-start; gap: 10px; transition: 250ms;'

    }
    draw(whereToDraw){
        this.#canvas.appendChild(this.#innerContainer);
        whereToDraw.appendChild(this.#canvas);
    }
    addItem(item){
        let place = document.getElementById('canvas-inner-container');
        place.appendChild(item);
    }
    addCard(card){
        card.draw(this.#innerContainerId);
    }
    addItemToCanvas(item){
        let canvas = document.getElementById(this.#theId);
        canvas.appendChild(item);
    }
    static get theId(){
        return 'canvas';
    }
    static get innerContainerId(){
        return 'canvas-inner-container';
    }
    static get innerContainer(){
        return document.getElementById('canvas-inner-container');
    }
    static get canvas(){
        return document.getElementById('canvas');
    }
}
