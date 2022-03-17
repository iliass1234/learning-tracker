
export class LeftSideComponent {
    constructor(){
        this.component = document.createElement('aside');
        this.component.id = 'aside'
        this.component.style = 'position:fixed; grid-column: 1/1; display: flex; flex-direction: column; width: 50px; height: 100vh; background-color: red;';

    }
    draw(whereToDraw){
        this.component.onclick = function(){
            this.component.style.width = '100px'; 
        }
        whereToDraw.appendChild(this.component)
    }
    changeColor(theColor){
        document.getElementById('aside').style.backgroundColor = theColor;
    }
}