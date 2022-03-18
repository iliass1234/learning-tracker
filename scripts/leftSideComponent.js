
export class LeftSideComponent {
    constructor(){
        this.component = document.createElement('aside');
        this.component.id = 'aside'
        this.component.style = 'margin-top: 55px;border-right: 1px solid rgba(0,0,0,0.3); position:fixed; grid-column: 1/1; display: flex; flex-direction: column; width: 60px; height: calc(100% - 55px); background-color: white;';

    }
    draw(whereToDraw){
        this.component.onclick = function(){
            this.component.style.width = '100px'; 
        }
        whereToDraw.appendChild(this.component)
    }
    changeColor(theColor){
        document.getElementById('aside').style.backgroundColor = theColor || 'white';
    }
}
