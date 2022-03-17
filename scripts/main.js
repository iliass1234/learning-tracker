import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";
import { LeftSideComponent } from "/scripts/leftSideComponent.js";
import { NoteCard } from "/scripts/noteCard.js";
import { NoteGeneratorComponent } from "/scripts/noteGeneratorComponent.js";

let body = document.body;
body.style = 'margin: 0 ;display: grid; grid-template-columns: 60px calc(100% - 60px) ;';

let navBar = new NavBar();
navBar.draw(body);

let enterNote = new NoteGeneratorComponent()
enterNote.draw(body)

let canvasConponent = new CanvasConponent();
canvasConponent.draw(body);

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');



let leftSideComponent = new LeftSideComponent();
canvasConponent.theId;
leftSideComponent.draw(body);
leftSideComponent.changeColor();

/* for (let i = 0; i < 100; i++) {
    let random = Math.floor((Math.random()*(400-200))+200);
    let divition = document.createElement('div');

    divition.onmouseover = () => {
    
    divition.style.cursor = 'pointer';
    divition.style.boxShadow = '0px 2px 7px rgba(0,0,0,0.2)';
        
    };
    divition.onmouseleave = () => {divition.style.backgroundColor = 'transparent'; divition.style.boxShadow = 'none';};
    let title = document.createElement('h1');
    let text = document.createElement('p');
    text.innerText = `hi this is just a test to hi this is just a test to see how this gonna turn out 
    and to figure out a way to enhance this app hi this is `;

    text.style = 'margin-left: 10px';

    title.innerText = 'hello world!';
    title.style.marginLeft = '10px';
    divition.append(title, text)
    divition.style = 'padding: 5px; border: 1px solid rgba(0,0,0,0.3); transition: 250ms; border-radius: 10px; background-color: transparent; max-height: 100%; height: '+random+'px;flex: 1 1 200px; min-width: 50px;';
    canvasConponent.addItem(divition);
    
    
} */
/* 
for (let i = 0; i < 6; i++) {
    let newCard = new NoteCard()
    newCard.title = 'hi';
    newCard.text = 'test text to see how this gonna turn out'
    
    let jj = new NoteCard()
    jj.title = 'Hello';
    jj.text = `test text to see howext to see
     howext to see howext to sext to see howext to see howee howext 
    to see how this gonna turn outext to see how
    ext to see howext to see howext to see ho`;

    jj.draw(CanvasConponent.innerContainerId)
    newCard.draw(CanvasConponent.innerContainerId)
    
}
 */