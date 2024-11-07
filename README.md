---

# JS-CAMPOMINATO-GRID

## Descrizione

Il progetto **JS-Campominato-Grid** permette di generare dinamicamente una griglia di gioco interattiva, in cui l'utente può cliccare su ogni cella per visualizzare il numero corrispondente nella console. La griglia può essere personalizzata in base al livello di difficoltà scelto, che modificherà sia il numero di celle che le dimensioni della griglia.

### Obiettivi del progetto

1. **Generazione della griglia**:
   - Quando l'utente clicca su un bottone, verrà generata una griglia quadrata.
   - La griglia conterrà numeri progressivi da 1 a 100.
   - Ogni cella avrà un numero associato, da 1 a 100, distribuito su 10 righe.

2. **Interazione con la griglia**:
   - Quando l'utente clicca su una cella, la cella cambierà colore in azzurro e il numero della cella verrà stampato nella console.

3. **Bonus: Aggiungere la selezione della difficoltà**:
   - L'utente avrà la possibilità di scegliere tra tre livelli di difficoltà che determinano la dimensione della griglia:
     - **Difficoltà 1**: 100 caselle, con numeri da 1 a 100, divise in 10 righe da 10 celle.
     - **Difficoltà 2**: 81 caselle, con numeri da 1 a 81, divise in 9 righe da 9 celle.
     - **Difficoltà 3**: 49 caselle, con numeri da 1 a 49, divise in 7 righe da 7 celle.

### Tecnologie Utilizzate

- **HTML5**: per la struttura della pagina.
- **CSS3**: per la stilizzazione della pagina e della griglia.
- **JavaScript**: per la logica del gioco e la gestione dell'interazione con l'utente.

## Struttura del Progetto

- `index.html`: La pagina principale che conterrà il codice HTML e il bottone per generare la griglia.
- `style.css`: Il file che gestisce la stilizzazione della pagina e della griglia.
- `script.js`: Il file che contiene la logica per la generazione dinamica della griglia e la gestione degli eventi di clic sulle celle.

---
