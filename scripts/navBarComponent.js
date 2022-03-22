
export class NavBar {
    constructor(){
        this.nav = document.createElement('nav');
        this.childrenContainer = document.createElement('div');

        this.nav.id = 'navBar';
        this.nav.style = 'z-index: 1; grid-column: 1/3; height: 55px;position: fixed; display: flex; justify-content: center; align-items: center; width: 100%; background-color: white; border-bottom: 1px solid rgba(0,0,0,0.3);';
        this.childrenContainer.style = 'display: flex; justify-content: center; align-items: center; height: 100%;width: 100%; max-width: 900px; background-color: transparent;'
    }
    draw(whereToDraw){ 
        this.nav.appendChild(this.childrenContainer);
        whereToDraw.appendChild(this.nav);
    }
    
    addBtn(innertext, theId){
        this.navBtn = document.createElement('button');
        this.navBtn.innerText = innertext;
        this.navBtn.id = theId;
        this.navBtn.style = ' border-radius: 5px; margin-left: 5px; padding: 8px; border: none; color: white; background-color: blue;';
        this.childrenContainer.appendChild(this.navBtn);
    }
    changeColor(theColor){
        document.getElementById('navBar').style.backgroundColor = theColor;
    }
    addSearchBar(){
        let searchBar = document.createElement('input');
        searchBar.type = 'text';
        searchBar.placeholder = 'search..'
        searchBar.style = 'padding-left: 10px;border: none; border-radius: 7px; height: 75%;width: 800px; max-width: 500px; min-width: 200px; background-color: #eee; '
        searchBar.id = 'search-bar';
        const navFromDom = document.querySelector('#navBar > div');
        if (navFromDom) {
            navFromDom.appendChild(searchBar);
        }else{
            this.childrenContainer.appendChild(searchBar);
        }
    }
}