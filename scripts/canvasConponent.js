export class CanvasConponent {
    constructor(){
        this.theId = 'canvas';
        this.innerContainerId = 'canvas-inner-container';

        this.canvas = document.createElement('main');
        this.innerContainer = document.createElement('div');
        this.innerContainer.id = 'canvas-inner-container';
        this.innerContainer.style = 'background-color: transparent;width: 900px; max-width: 900px; min-width: 300px; height: 100%; display: flex; flex-wrap: wrap; justify-content: center;'
        this.canvas.id = 'canvas';
        this.canvas.style = 'display: flex; justify-content: center; min-height:300px width: 900px;; height: 100%; width: 100%; background-color: rgb(230, 230, 230);';


    }
    draw(whereToDraw){
        this.canvas.appendChild(this.innerContainer)
        whereToDraw.appendChild(this.canvas);
    }
    addItem(item){

        let place = document.getElementById('canvas-inner-container');
        console.log(document.getElementById('canvas-inner-container'))
        place.appendChild(item);
    }
}
