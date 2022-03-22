import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasComponent } from "/scripts/canvasComponent.js";
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

let canvasComponent = new CanvasComponent();
canvasComponent.draw(body);


navBar.addSearchBar()

let leftSideComponent = new LeftSideComponent();
CanvasComponent.theId;
leftSideComponent.draw(body);
leftSideComponent.changeColor();

function displayNotes(){
    for(let i = Number(localStorage.getItem('last-note')); i >= 1; i--){
        let note = new NoteCard();
        
        let last = localStorage.getItem(`${i}-note`);
        //    console.log(localStorage.getItem('one-note'));
        console.log(last)
    if (last){
        
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
            note.draw(CanvasComponent.innerContainerId);
        }
    }   
}
}
displayNotes();
export { pinnedSection , canvasComponent };