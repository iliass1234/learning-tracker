import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";
import { LeftSideComponent } from "/scripts/leftSideComponent.js";
import { NoteCard } from "/scripts/noteCard.js";
import { NoteGeneratorComponent } from "/scripts/noteGeneratorComponent.js";
import { PinnedSection } from "/scripts/pinnedSection.js";

let is_a_card_clicked = false;


var state = 1;

let body = document.body;
body.style = 'margin: 0 ;display: grid; grid-template-columns: 60px calc(100% - 60px) ;';

let navBar = new NavBar();
navBar.draw(body);

let enterNote = new NoteGeneratorComponent();
enterNote.draw(body);

let pinnedSection = new PinnedSection();
pinnedSection.draw(body);

let canvasConponent = new CanvasConponent();
canvasConponent.draw(body);


navBar.addSearchBar()

let leftSideComponent = new LeftSideComponent();
canvasConponent.theId;
leftSideComponent.draw(body);
leftSideComponent.changeColor();
/* 
function darkBackground(){

    let blackBackground = document.createElement('div');
    blackBackground.id = 'black-background';
    blackBackground.style = 'background-color: rgba(0,0,0,0.5); height: 100vh; width:100vw; position: fixed;';
    blackBackground.onclick = ()=>{ blackBackground.style.display = 'none'; is_a_card_clicked = false; }

    body.appendChild(blackBackground);


}
darkBackground();
 */

/* for (let i = 0; i < 6; i++) {
    let newCard = new NoteCard(state);
    newCard.title = 'hi';
    newCard.text = 'test text to see how this gonna turn out'
    
    let jj = new NoteCard(state);
    jj.title = 'Hello';
    jj.text = `test text to see howext to see
    howext to see howext to sext to see howext to see howee howext 
    to see how this gonna turn outext to see how
    ext to see howext to see howext to see ho`;

    jj.draw(CanvasConponent.innerContainerId)
    newCard.draw(CanvasConponent.innerContainerId)
    
}
 */
//localStorage.clear()
function displayNotes(){
    
    
    for(let i = Number(localStorage.getItem('last-note')); i >= 1; i--){
        let note = new NoteCard();
        
        let last = localStorage.getItem(`${i}-note`);
        //    console.log(localStorage.getItem('one-note'));
        console.log(last)
    if (last) {
        
        let noteJason = JSON.parse(last); 
        note.title = noteJason.title;
        note.text = noteJason.text;
        note.id = noteJason.id;
        note.setId()
        //note.setId();
        
        note.isPinned = noteJason.isPinned;
        
        if (note.isPinned === true) {
            note.changeColor();
            pinnedSection.addItem(note);
        }else{
            note.draw(CanvasConponent.innerContainerId);
        }
    }
    
}

}

displayNotes();





export { pinnedSection }