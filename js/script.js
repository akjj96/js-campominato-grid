// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// richiamo tutte le cose che mi servono

//Si richiede all'utente di selezionare il livello di difficoltà del gioco:
//difficoltà 0 = da 1 a 100; 1 = da 1 a 81; 2 = da 1 a 49;
// creo una funzione dove genero to caselle a seconda della difficoltà e dopo lo collego al click del bottone

// mi sevono le costanti per la funzione
 // 100 COLONNE TOTALI
// 10 RIGHE (10x10 100)
function grigliae(){
    let numeroX = getRandomInt;
    for(i = 0; i < numeroX; i++){
        const colonna = document.createElement("div")
        colonna.setAttribute('class','col-2')
        colonna.innerHTML =i +1;
        container.append(colonna)

    }
}





function griglia(){
    // devo creare tramite variabili la riga in html e devo richiamare il container che ho creato in html
    let container = document.getElementById('container');
    console.log(container)
    let row = document.createElement('div');
    // a questa row diamo caratteristiche
    row.setAttribute('class', 'row');
    let creazioneCol = col();
    console.log(creazioneCol);
    row.innerHTML = creazioneCol;
    container.append(row);
}

// creo una funzione che crea le colonne 

function col(){
    //   ho 3 scelte
    let difficolta = document.getElementById('difficolta');

    let check = false;
    let colonne = '';
    // se scelgo easy ho 100 caselle
    if(difficolta.value === "facile"){
        check = true;
        let numeroCella = getRandomInt(0, 100);
        
        
    } else if (difficolta.value === "normale"){
        check = true;
        let numeroCella = getRandomInt(0, 81);
        
    } else {
        check = true;
        let numeroCella = getRandomInt(0, 49);
        // colonne += `<div class="col-2"> ${difficolta.value}</div>`

    }

    return colonne;
}
     



   
// funzione che genera numeri casuali
function getRandomInt(min, max) { //FUNZIONE BASE PER GEN NUMERI
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



document.getElementById("btn").addEventListener('click', griglia);


// se è selezionato facile numero selezionato = 100