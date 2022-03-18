

export class NoteCard {

    #card = document.createElement('div');
    #title = document.createElement('h2');
    #text = document.createElement('p');
    #bottomSection = document.createElement('section');
    activeState = false;


    constructor(){

        this.isPinned = false;
        this.id = null;

        this.title = 'Set title here';
        this.text = ` add some text here `;

        this.#card.className = 'card';
        this.#title.id = 'card-title';
        this.#text.id = 'card-text';
        this.#bottomSection.id = 'card-bottom-section';

        this.#card.style = 'transition: 150ms; flex: 1 1 235px; border: 1px solid rgba(0,0,0,0.2); border-radius: 10px; height: auto; max-height: 400px; min-height: 100px;background-color: white;';
        this.#title.style = 'margin-left: 20px; margin-bottom: 40px;margin-top: 30px;font-family: monospace;';
        this.#text.style = 'margin-left: 20px; font-size: 15px;color: rgb(90,90,90); font-family: sans-serif;';
        this.#bottomSection.style = 'margin-bottom : 5px; height: 40px; width: 100%; background-color: #dddddd;';
    }
    draw(whereToDrawId){

        this.#card.onclick = ()=>{
            this.activeState = true;
            this.#card.style.position = 'fixed';
            this.#card.style.width = '600px';
            this.#card.style.top = '20%';
            this.#card.style.zIndex = '10';
        }

        this.#card.onmouseover = () => {this.#card.style.boxShadow = '0px 2px 5px rgb(200,200,200)';}
        this.#card.onmouseleave = () => {this.#card.style.boxShadow = 'none';}

        let shownText = this.text;
        if (this.text.length > 300) {
            shownText = this.text.slice(0,300).concat('...')
 
        }

        this.#title.innerText = this.title;
        this.#text.innerText = shownText;
        this.#card.append( this.#title, this.#text, this.#bottomSection);

        if (!document.getElementById(whereToDrawId) && whereToDrawId) {
            if (typeof whereToDrawId !== 'string') {
                whereToDrawId.appendChild(this.#card)
                return;
            }
        }

        document.getElementById(whereToDrawId).appendChild(this.#card);
    }
    static activeState(){
        return this.activeState;
    }
    changeColor(theColor){

        let finalColor = theColor ?? '#f88'
        let theCard = this.#card
        if (theCard) {
            this.#card.style.backgroundColor = theColor;
            return true;
        }else{
            alert('change color after card being created error');
            return false;
        }

    }

}