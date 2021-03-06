import { PinnedSection } from "/scripts/pinnedSection.js";
import { CanvasComponent } from "/scripts/canvasComponent.js";
import { pinnedSection , canvasComponent} from "/scripts/main.js";


export class NoteCard {

    #card = document.createElement('div');
    #title = document.createElement('h2');
    #text = document.createElement('p');
    #bottomSection = document.createElement('section');
    #pinButton = document.createElement('button');
    #threePointsButton = document.createElement('button');
    #threePointsInnerCard = document.createElement('div');
    #threePointsInnerCardDelete = document.createElement('a');

    activeState = false;

    constructor(){
        

        this.isPinned = false;
        this.id = null;

        this.title = 'Set title here';
        this.text = ` add some text here `;

        this.#pinButton.className = 'card-pin-btn';
        this.#pinButton.innerText = 'Pin';
        this.#pinButton.style = 'right: 0; top: 0;transition: 500ms; opacity: 0; margin: 10px;position: absolute;  display: block;height: 40px; width: 40px; border-radius: 50%; border: none; background-color: #ccc;';

        this.#card.className = 'card';
        this.#title.id = 'card-title';
        this.#card.id = 'none';
        
        this.#text.id = 'card-text';
        this.#bottomSection.id = `card-bottom-section-${this.id}`;

        this.#card.style = 'position: relative; transition: 150ms; flex: 0 1 240px; border: 1px solid rgba(0,0,0,0.2); border-radius: 10px; height: auto; max-width: 300px; max-height: 400px; min-height: 100px;background-color: white;';
        this.#title.style = 'display: inline-block;margin-left: 20px; margin-bottom: 0px;margin-top: 20px;font-family: monospace;';
        this.#text.style = 'width: calc(100% - 20px);margin-left: 20px;  font-size: 15px;color: rgb(90,90,90); font-family: sans-serif;';
        this.#bottomSection.style = 'transition: 500ms; opacity: 0; margin-bottom : 5px; height: 30px; width: 100%; background-color: #dddddd;';
     }
    setId(){
        this.#card.id = this.id;
        this.#bottomSection.id = `card-bottom-section-${this.id}`;
    }
    draw(whereToDrawId){

        this.#card.onclick = ()=>{
            this.activeState = true;
            this.#card.style.position = 'fixed';
            this.#card.style.width = '600px';
            this.#card.style.top = '20%';
            this.#card.style.zIndex = '10';
        }

        this.#card.onmouseover = () => {
            this.#card.style.boxShadow = '0px 2px 5px rgb(200,200,200)';
            this.#bottomSection.style.opacity = '1';
            this.#pinButton.style.opacity = '1';
        }
        this.#card.onmouseleave = () => {
            this.#card.style.boxShadow = 'none';
            this.#bottomSection.style.opacity = '0';
            this.#pinButton.style.opacity = '0';
        }

        this.#pinButton.onclick = (e)=>{
            e.stopPropagation();

            let data = localStorage.getItem(`${this.id}-note`);
            data = JSON.parse(data);

            let newCard = new NoteCard();
            newCard.title = data.title;
            newCard.text = data.text;
            newCard.id = data.id;
            let oldNote = document.getElementById(`${this.id}`);
            
            if(!this.isPinned){
                this.isPinned = true;
                data.isPinned = true;
                newCard.isPinned = data.isPinned;
                newCard.setId();
                newCard.changeColor();
                console.log(oldNote,newCard.id);
                CanvasComponent.innerContainer.removeChild(oldNote)

                pinnedSection.addItem(newCard);
                
            }else{
                pinnedSection.removeCard(newCard);

                this.isPinned = false;
                data.isPinned = false;
                newCard.isPinned = data.isPinned;
                newCard.setId();

                console.log(newCard);
                canvasComponent.addCard(newCard);
            }
            
            localStorage.setItem(`${this.id}-note`, JSON.stringify(data));
        }

        console.log(this.text)
        let shownText = this.text;
        if (this.text.length > 300) {
            shownText = this.text.slice(0,300).concat('...');
        }

        this.#title.innerText = this.title;
        this.#text.innerText = shownText;
        this.#card.append( this.#title, this.#pinButton, this.#text, this.#bottomSection);

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

        let finalColor = theColor ?? '#eea';
        let theCard = this.#card
        if (theCard) {
            this.#card.style.backgroundColor = finalColor;
            return true;
        }else{
            alert('change color after card being created error');
            return false;
        }

    }

}