import { add, init, final, printList, linkedList} from "./helper.js";
const btnInit = document.getElementById("runnerInit");
const btnInter = document.getElementById("runnerInter");
const btnFinal = document.getElementById("runnerFinal");

btnInit.addEventListener("click", () => {
    init();
    printList();
});

btnInter.addEventListener("click", () => {
    const position = prompt("¿En qué posición quieres insertar el nodo?");
    if(!isNaN(position) && position <= linkedList.length){
        add(position);
        printList();
        return;
    }
    alert("La posición donde se inserte el nodo debe ser un número entero y estar dentro del rango de nodos de la lista.");
});

btnFinal.addEventListener("click", () => {
    final();
    printList();
});