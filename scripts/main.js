import { NavBar } from "/scripts/navBarComponent.js";
import { Canvas } from "/scripts/canvas.js";

let body = document.body;
let navBar = new NavBar();
let canvas = new Canvas();

body.style.margin = '0';
navBar.draw(body);
canvas.draw(body);

let divition = document.createElement('div');
divition.style = 'background-color: red; height: 40px; width: 50px;'
canvas.addItem(divition)

navBar.addBtn('hello', 'hello');
navBar.addBtn('world', 'world');
console.log('jjj')


