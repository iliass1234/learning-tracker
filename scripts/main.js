import { NavBar } from "/scripts/navBarComponent.js";
import { CanvasConponent } from "/scripts/canvasConponent.js";

let body = document.body;
let navBar = new NavBar();
let canvasConponent = new CanvasConponent();

body.style.margin = '0';
navBar.draw(body);
canvasConponent.draw(body);

let divition = document.createElement('div');
divition.style = 'background-color: red; height: 40px; width: 50px;'
canvasConponent.addItem(divition)

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');
console.log('jjj')


