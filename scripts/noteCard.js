

export class NoteCard {

    #card = document.createElement('div');
    #title = document.createElement('h2');
    #text = document.createElement('p');
    #bottomSection = document.createElement('section');

    constructor(){

        this.title = 'How CSS works under the hood;';
        this.text = ` Officials across the region have repeatedly cited 
        the availability of vaccines and treatments, and lower rates
        of serious illness with omicron, when justifying the decision. Austria even dropped its controversial
        law requiring compulsory vaccination for all adults, with its minister in charge
        of constitutional affairs saying the mandate was no longer 
        “proportionate” with the disease. `;

        this.#card.id = 'card';
        this.#title.id = 'card-title';
        this.#text.id = 'card-text';
        this.#bottomSection.id = 'card-bottom-section';

        this.#card.style = 'transition: 150ms; margin-left: 10px;flex: 1 1 235px; border: 1px solid rgba(0,0,0,0.3); border-radius: 10px; height: relative; max-height: 400px; min-height: 100px;';
        this.#title.style = 'margin-left: 20px; margin-bottom: 40px;margin-top: 30px;font-family: monospace;';
        this.#text.style = 'margin-left: 20px; font-size: 15px;color: rgb(90,90,90); font-family: sans-serif;';
        this.#bottomSection.style = 'margin-bottom : 5px; height: 40px; width: 100%; background-color: #dddddd;';

    }
    draw(whereToDrawId){

        this.#card.onmouseover = () => {this.#card.style.boxShadow = '0px 2px 5px rgb(200,200,200)';}
        this.#card.onmouseleave = () => {this.#card.style.boxShadow = 'none';}

        let shownText = this.text;
        if (this.text.length > 300) {
            shownText = this.text.slice(0,30).concat('...')
 
        }

        this.#title.innerText = this.title;
        this.#text.innerText = shownText;
        this.#card.append(this.#title, this.#text, this.#bottomSection);
        document.getElementById(whereToDrawId).appendChild(this.#card);
    }
}