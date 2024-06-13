const container = document.querySelector(".page-container");







//utente clicca un bottone

//bottone genera una griglia di gioco quadrata
const createGrid = createElementWithClass("div", "grid");
appendElement(container, createGrid)
const grid = document.querySelector(".grid");
//la griglia ha 100 caselle, disposete in un 10x10
for (let i = 1; i <= 100; i++) {
    const createSquare = createElementWithClass("div", "square");
    createSquare.innerHTML = i;
    appendElement(grid, createSquare)

    createSquare.addEventListener("click", function() {
        createSquare.classList.add("clicked");
        console.log(this.innerHTML)
    })
    
}
//cliccare sulla cella ne cambia il colore in azzurro e stampa un messaggio in console con il numero della cella cliccata


















function createElementWithClass(tag, classToAdd) {
    //creo il nuovo elemento
    const newElement = document.createElement(tag);
    //aggiungo la classe all'elemento
    newElement.classList.add(classToAdd);

    return newElement
}
function appendElement(appendTo, appendWhat) {
    appendTo.append(appendWhat)
}