export class CanvasConponent {
    constructor(){
        this.theId = 'canvas';
        this.innerContainerId = 'canvas-inner-container';

        this.canvas = document.createElement('main');
        this.innerContainer = document.createElement('div');
        this.innerContainer.id = 'canvas-inner-container';
        this.canvas.style = 'margin: 10px 0px; display: flex; justify-content: center; min-height:300px ; height: calc(100%); width: 100%; background-color: rgb(255, 255, 255);';
        this.innerContainer.style = 'background-color: transparent;width: 1000px; max-width: 1000px; min-width: 300px; height: 100%; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;'
        this.canvas.id = 'canvas';

    }
    draw(whereToDraw){
        this.canvas.appendChild(this.innerContainer)
        whereToDraw.appendChild(this.canvas);
    }
    addItem(item){
        let place = document.getElementById(this.innerContainerId);
        place.appendChild(item);
    }
    addItemToCanvas(item){
        let canvas = document.getElementById(this.theId);
        canvas.appendChild(item);
    }
}