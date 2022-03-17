import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";
import { LeftSideComponent } from "./leftSideComponent.js";

let body = document.body;
let navBar = new NavBar();
let canvasConponent = new CanvasConponent();

body.style = 'margin: 0 ;display: grid; grid-template-columns: 60px calc(100% - 60px) ;';
navBar.draw(body);
canvasConponent.draw(body);

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');

let leftSideComponent = new LeftSideComponent();
canvasConponent.theId
leftSideComponent.draw(body);
leftSideComponent.changeColor('rgba(220,180,220,1)')

for (let i = 0; i < 100; i++) {
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
    divition.style = 'padding: 5px; border: 1px solid rgba(0,0,0,0.3); transition: 250ms; border-radius: 10px; background-color: transparent; max-height: 100%; height: '+random+'px;flex: 1 1 200px; min-width: 50px; width: 250px;';
    canvasConponent.addItem(divition);
}


