const container = document.querySelector(".page-container");
const newGame = document.querySelector(".new-game");


//utente clicca un bottone
newGame.addEventListener("click", function(){
    
    //bottone genera una griglia di gioco quadrata
    const createGrid = createElementWithClass("div", "grid");
    appendElement(container, createGrid)
    const grid = document.querySelector(".grid");
    newGame.style.display = "none"

    
    
    //la griglia ha 100 caselle, disposte in un 10x10
for (let i = 1; i <= 100; i++) {
    const createSquare = createElementWithClass("div", "square");
    createSquare.value = i;
    appendElement(grid, createSquare)


    //cliccare sulla cella ne cambia il colore in azzurro e stampa un messaggio in console con il numero della cella cliccata
    createSquare.addEventListener("click", function() {
        createSquare.classList.toggle("clicked");
        console.log(this.value)
    })
    
    /* createSquare.addEventListener("dblclick", function() {
        const innerText = prompt("inserisci cosa vuoi che venga scritto nella cella")
        createSquare.innerHTML = innerText
    }) */
}
})





























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