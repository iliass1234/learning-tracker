export class optionsDropDown {

    #cardContainer = document.createElement('div')
    #cardElement = document.createElement('a')

    constructor(self){

        this.#cardContainer.style = 'width: 100px; height: 200px; background-color: red; display: flex; flex-direction: column; justify-content: center;';
        this.#cardElement.style = 'width: 100%; height: 30px;';

    }
}