
export class LeftSideComponent {

    #component = document.createElement('aside');
    #labelButton = document.createElement('button');


    constructor(){
        this.#component.id = 'aside';
        this.#component.style = 'margin-top: 55px; border-right: 1px solid rgba(0,0,0,0.3); position:fixed; grid-column: 1/1; display: flex; flex-direction: column; width: 60px; height: calc(100% - 55px); background-color: white;';
        this.#labelButton.style = 'width: 40px; height: 40px; border: none; background-color: red;'


    }
    draw(whereToDraw){
        this.#component.onclick = function(){
            this.#component.style.width = '100px'; 
        }
        whereToDraw.appendChild(this.#component);
    }
    addLabel(labelName){

    }
    changeColor(theColor){
        document.getElementById('aside').style.backgroundColor = theColor || 'white';
    }
}
