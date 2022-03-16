
export class NavBar {
    constructor(){
        this.nav = document.createElement('nav');
        this.childrenContainer = document.createElement('div');

        this.nav.id = 'navBar';
        this.nav.style = 'height: 50px; display: flex; justify-content: center; align-items: center; width: 100%; background-color: black;';
        this.childrenContainer.style = 'display: flex; justify-content: center; align-items: center; height: 100%;width: 100%; max-width: 900px; background-color: transparent;'
        this.nav.appendChild(this.childrenContainer);
    }

    draw(whereToDraw){ 
        whereToDraw.appendChild(this.nav);
    }
    
    addBtn(innertext, theId){
        this.navBtn = document.createElement('button');
        this.navBtn.innerText = innertext;
        this.navBtn.id = theId;
        this.navBtn.style = ' border-radius: 5px; margin-left: 5px; padding: 8px; border: none; color: white; background-color: blue;';
        this.childrenContainer.appendChild(this.navBtn);
    }
}