import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasComponent.js";

let body = document.body;
let navBar = new NavBar();
let canvasConponent = new CanvasConponent();

body.style.margin = '0';
navBar.draw(body);
canvasConponent.draw(body);

let testDiv = document.createElement('div');

testDiv.style = ' max-width: 300px; max-height: 800px; height: 400px; background-color: transparent; flex: 0.25 1 300px;border: 1px solid gray; border-radius: 10px;';
canvasConponent.addItemToCanvas(testDiv);

for (let i = 0; i < 100; i++) {
    let divition = document.createElement('div');
    divition.onmouseover = () => {divition.style.backgroundColor = 'gray'};
    divition.onmouseleave = () => {divition.style.backgroundColor = 'lightgray'};

    divition.style = 'border: 1px solid gray; transition: 250ms; border-radius: 5px; background-color: transparent; height: 100px; min-width: 150px;';
    canvasConponent.addItem(divition);
}

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');


