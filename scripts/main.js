import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";

let body = document.body;
let navBar = new NavBar();
let canvasConponent = new CanvasConponent();

body.style.margin = '0';
navBar.draw(body);
canvasConponent.draw(body);

let leftDiv = document.createElement('div');

leftDiv.style = 'margin-left: 10px; order: 1; max-width: 300px; max-height: 800px; height: 400px; background-color: transparent; flex: 0.25 1 300px;border: 1px solid rgba(0,0,0,0.3); border-radius: 10px;';
canvasConponent.addItemToCanvas(leftDiv);

for (let i = 0; i < 100; i++) {
    let random = Math.floor((Math.random()*(400-200))+200);
    let divition = document.createElement('div');
    divition.onmouseover = () => {
    
    divition.style.backgroundColor = 'rgb(250, 250, 250)'; 
    divition.style.cursor = 'pointer';
    divition.style.boxShadow = '0px 5px 10px rgba(0,0,0,0.3)';
        
    };
    divition.onmouseleave = () => {divition.style.backgroundColor = 'transparent'; divition.style.boxShadow = 'none';};

    divition.style = 'border: 1px solid rgba(0,0,0,0.3); transition: 250ms; border-radius: 10px; background-color: transparent; height: '+random+'px; min-width: 250px;';
    canvasConponent.addItem(divition);
}

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');


