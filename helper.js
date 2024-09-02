//! DOM 
const name = document.getElementById("runnerName");
const email = document.getElementById("runnerEmail");
const age = document.getElementById("runnerAge");
const list = document.getElementById("linkedList");

class Runner {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
}

export const linkedList = new LinkedList();
export const init = () => {
    const runner = new Runner(name.value, email.value, age.value);
    runner.next = linkedList.head;
    linkedList.head = runner;
    linkedList.length++;

    name.value = '';
    email.value = '';
    age.value = '';
};

export const add = (n) => {
    const runner = new Runner(name.value, email.value, age.value);
    if(linkedList.head === null || n == 0){
        init();
    } else {
        let current = linkedList.head;
        let i = 0;
        while(i < (n - 1) && current.next != null){
            current = current.next;
            i++;
        }
        runner.next = current.next;
        current.next = runner;
        linkedList.length++;
    }

    name.value = '';
    email.value = '';
    age.value = '';
};

export const final = () => {
    const runner = new Runner(name.value, email.value, age.value);
    if (linkedList.head === null) {
        init();
    } else {
        let current = linkedList.head;
        while(current.next != null){
            current = current.next;
        }
        runner.next = current.next;
        current.next = runner;
        linkedList.length++;
    }

    name.value = '';
    email.value = '';
    age.value = '';
};

function editNode(node) {
    name.value = node.name;
    email.value = node.email;
    age.value = node.age;

    const saveChanges = document.createElement('button');
    saveChanges.textContent = 'Guardar cambios';
    saveChanges.addEventListener('click', () => {
        node.name = name.value;
        node.email = email.value;
        node.age = age.value;
        printList();
    });

    const previousSaveButton = list.querySelector('button.saveChanges');
    if (previousSaveButton) {
        previousSaveButton.remove();
    }

    saveChanges.classList.add('saveChanges');
    list.append(saveChanges);

}

function deleteNode(node){
    if(linkedList.head == node){
        linkedList.head = node.next;
    } else {
        let current = linkedList.head;
        while(current != null && current.next != node){
            current = current.next;
        }

        if(current != null){
            current.next = node.next;
        }
    }

    linkedList.length--;
    printList();
}

export function printList() {
    let current = linkedList.head;
    list.innerHTML = ''; 

    if (current === null) {
        console.log("La lista está vacía.");
        return;
    }
    let i = 0
    while (current !== null) {
        const runnerIndex = document.createElement('h3');
        runnerIndex.textContent = "Corredor numero: "+ i;

        const runnerName = document.createElement('input');
        runnerName.value = current.name || '';
        runnerName.setAttribute('type', 'text');
        runnerName.setAttribute('class', 'runner-input');

        const runnerEmail = document.createElement('input');
        runnerEmail.value = current.email || '';
        runnerEmail.setAttribute('type', 'email');
        runnerEmail.setAttribute('class', 'runner-input');

        const runnerAge = document.createElement('input');
        runnerAge.value = current.age || '';
        runnerAge.setAttribute('type', 'text');
        runnerAge.setAttribute('class', 'runner-input');

        const btnEdit = document.createElement('button');
        btnEdit.textContent = 'Editar';
        btnEdit.setAttribute('class', 'edit-btn');
        
        const btnDelete = document.createElement('button');
        btnDelete.textContent = 'Eliminar';
        btnDelete.setAttribute('class', 'delete-btn');

        const currentNode = current;
        btnEdit.addEventListener('click', () => editNode(currentNode));
        btnDelete.addEventListener('click', () => deleteNode(currentNode));

        list.append(runnerIndex, runnerName, runnerEmail, runnerAge, btnEdit, btnDelete);
        current = current.next;
        i++;
    }
}