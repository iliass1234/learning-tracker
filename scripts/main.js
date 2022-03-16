import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasConponent.js";

let body = document.body;
let navBar = new NavBar();
let canvasConponent = new CanvasConponent();

body.style.margin = '0';
navBar.draw(body);
canvasConponent.draw(body);

for (let i = 0; i < 40; i++) {
    
    let divition = document.createElement('div');
    divition.onmouseover = () => {divition.style.backgroundColor = 'gray'}
    divition.onmouseleave = () => {divition.style.backgroundColor = 'lightgray'}

    divition.style = 'transition: 250ms; border-radius: 5px; background-color: lightgray; max-height: 200px; height: 100px; width: 150px;'
    canvasConponent.addItem(divition)
}

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');


