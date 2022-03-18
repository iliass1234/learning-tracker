import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";
import { LeftSideComponent } from "/scripts/leftSideComponent.js";
import { NoteCard } from "/scripts/noteCard.js";
import { NoteGeneratorComponent } from "/scripts/noteGeneratorComponent.js";

let is_a_card_clicked = false;


var state = 1;

let body = document.body;
body.style = 'margin: 0 ;display: grid; grid-template-columns: 60px calc(100% - 60px) ;';

let navBar = new NavBar();
navBar.draw(body);

let enterNote = new NoteGeneratorComponent();
enterNote.draw(body);

let canvasConponent = new CanvasConponent();
canvasConponent.draw(body);


navBar.addSearchBar()

let leftSideComponent = new LeftSideComponent();
canvasConponent.theId;
leftSideComponent.draw(body);
leftSideComponent.changeColor();

function darkBackground(){

    let blackBackground = document.createElement('div');
    blackBackground.id = 'black-background';
    blackBackground.style = 'background-color: rgba(0,0,0,0.5); height: 100vh; width:100vw; position: fixed;';
    blackBackground.onclick = ()=>{ blackBackground.style.display = 'none'; is_a_card_clicked = false; }

    body.appendChild(blackBackground);


}
darkBackground();


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
localStorage.clear()
for(let i = 1; i <= Number(localStorage.getItem('last-note')); i++){
    let note = new NoteCard();

    let last =JSON.stringify(localStorage.getItem('one-note'));
//    console.log(localStorage.getItem('one-note'));

    let noteJason = JSON.parse(last); 
    console.log(noteJason);
    console.log(noteJason.title);
    note.title = noteJason.title;
    note.text = noteJason.text;
    note.draw(CanvasConponent.innerContainerId)
}
