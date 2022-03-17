
export class NoteGeneratorComponent {
    #allFirstContainer = document.createElement('div');
    #toolsContainer = document.createElement('div');
    #innerP = document.createElement('p')

    constructor(){
        this.#allFirstContainer.style = 'margin: 30px 0px;flex: 1 1 100%; height: 45px; max-width: 550px; background-color: white; border: 1px solid #cccccc; border-radius: 10px;';
        this.#innerP.style = 'margin-left: 20px;margin-top: 15px; font-family: sans-serif;'
        this.#innerP.innerText = 'type a note here..';


        this.#allFirstContainer.appendChild(this.#innerP);
    }
    draw(whereToDrawId){
        this.#allFirstContainer.appendChild(this.#toolsContainer)
        document.getElementById(whereToDrawId).appendChild(this.#allFirstContainer)
    }
}