export class optionsDropDown {

    #cardContainer = document.createElement('div')
    #cardElementDelete = document.createElement('a')

    constructor(self, place){

        this.#cardContainer.style = 'width: 100px; height: 200px; background-color: red; display: flex; flex-direction: column; justify-content: center;';
        this.#cardElementDelete.style = 'width: 100%; height: 30px;';

        this.#cardContainer.id = 'card-container';
        this.#cardElementDelete.id = 'card-element-delete';

        this.#cardElementDelete.innerText = 'delete';
        


    }
}