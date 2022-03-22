import { NoteCard } from "/scripts/noteCard.js"
import { CanvasComponent } from "/scripts/canvasComponent.js"

export class NoteGeneratorComponent {
    #container = document.createElement('div');
    #allFirstContainer = document.createElement('div');
    #toolsContainer = document.createElement('div');
    #innerTitle = document.createElement('input');
    #innerP = document.createElement('textarea');
    #closeBtn = document.createElement('button');

    clicked = false;

    constructor(){
        this.#toolsContainer.id = 'toolsContainer';
        this.#toolsContainer.style = 'position: relative; display: flex; justify-content: end;height: 30px;width: 100%;  background-color: #ddd;'

        this.#allFirstContainer.id = 'note-taker';
        this.#allFirstContainer.style = ' margin: 30px 15px;flex: 1 1 100%; width:300px; height: 45px; max-width: 550px; background-color: white; border: 1px solid #cccccc; border-radius: 10px;';

        this.#innerP.placeholder = 'Take a note..';
        this.#innerP.id = 'innerP';
        this.#innerP.style = 'height: 100px;overflow: visible; margin-bottom: 10px; width: calc(100% - 30px); display: block; border: none; resize: vertical; max-height: auto; margin-left: 12px;margin-top: 14px; font-family: sans-serif;'

        this.#container.id = 'note-taker-container';
        this.#container.style = 'margin-top: 60px; grid-column: 2/3; background-color: white; height: 100%; width: 100%; display: flex; justify-content: center;';

        this.#closeBtn.innerText = 'close';
        this.#closeBtn.id = 'close-btn';
        this.#closeBtn.style = 'display: inline-block; justify-self: baseline; height: 30px; width: 80px;'

        this.#innerTitle.id = 'innerTitle'
        this.#innerTitle.placeholder = 'Take a note..';
        this.#innerTitle.style = 'margin-bottom:10px ;border: none;height: 30px; max-height: 30px ;width: 100%; max-width: calc(100% - 20px);margin-left: 12px;margin-top: 7px; font-family: sans-serif;';
    };
    draw(whereToDrawId){
        this.#closeBtn.onclick = (e)=>{
            e.stopPropagation();
            let theLastNoteNumber = Number(localStorage.getItem('last-note')) ?? 0 ;
            theLastNoteNumber++ ;

            let newCard = new NoteCard();
            let title = document.getElementById(this.#innerTitle.id).value;
            let text = document.getElementById(this.#innerP.id).value;
            newCard.title = title;
            newCard.text = text;
            newCard.id = theLastNoteNumber;
            newCard.setId();
            newCard.draw(CanvasComponent.innerContainerId);

            var noteObj = `{"id": "${theLastNoteNumber}", "isPinned": false, "title":"${title}", "text": "${text}" }`;
            
            document.querySelector('#note-taker > #innerTitle').placeholder = 'Take a note..';
            let allFirstContainer = document.querySelector('#note-taker'); 
            
            allFirstContainer.removeChild(document.querySelector('#note-taker > #toolsContainer'));
            allFirstContainer.removeChild(document.querySelector('#note-taker > #innerP'));
            allFirstContainer.style.height = '45px';
            
            
            localStorage.setItem(`${theLastNoteNumber}-note`, noteObj);
            localStorage.setItem('last-note',`${theLastNoteNumber}`);
            console.log(localStorage.getItem('last-note'));
        }    
        
        this.#toolsContainer.appendChild(this.#closeBtn);
        this.#allFirstContainer.appendChild(this.#innerTitle);
        
        this.#allFirstContainer.onmouseover = ()=>{ this.#allFirstContainer.style.cursor = 'text'}
        this.#allFirstContainer.onclick = ()=>{
            if (this.#allFirstContainer.style.height == '212px') return;
            
            this.#innerTitle.placeholder = 'Title here..';
            this.#allFirstContainer.appendChild(this.#innerP);
            this.#allFirstContainer.appendChild(this.#toolsContainer);
            this.#allFirstContainer.style.height = '212px';
            this.#allFirstContainer.style.boxShadow = '0px 2px 6px rgba(0,0,0,0.4)';
            
        }
        
        
        this.#container.appendChild(this.#allFirstContainer)
        whereToDrawId.appendChild(this.#container)
    }
    set setText(insertedText){

        if (typeof insertedText !== 'string') {
            alert('entre the apropriet type')
            return;
        }
            

        this.#innerP.value = insertedText;
    }
    set setTitle(insertedTitle){
        if (typeof insertedTitle !== 'string') {
            alert('entre the apropriet type')
            return;
        }
        this.#innerTitle.value = insertedTitle;
    }
    
    get getText(){
        return this.#innerP.value;
    }
    get getTitle(){
        return this.#innerTitle.value;
    }
}
