export class navBar {
    constructor(){
        this.nav = document.createElement('nav');
        this.navBtn = document.createElement('button');

        this.navBtn.innerText = 'click here!';
        this.navBtn.style = 'border: none; color: white; background-color: blue;';
        this.nav.style = 'height: 50px; display: flex; justify-content: center; align-items: center; width: 100%; background-color: red;';

    }

    draw(){
        
    }
}

