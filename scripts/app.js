import { saveToLocalStorage, getlocalStorage, removeFromLocalStorage } from "./localStorage.js";

let input = document.getElementById('input');
let nameListDiv = document.getElementById('nameListDiv');
let add = document.getElementById('add');
// let name = '';

add.addEventListener('click', () => {
    
    let addName = getlocalStorage();
    
    nameListDiv.textContent = "";

    if(!addName.includes(input.value)){
        console.log("add");
        console.log(input.value)
        saveToLocalStorage(input.value); 
        addName = getlocalStorage();
    } else {
        console.log("del");
        removeFromLocalStorage(input.value);   
        p.remove();
    }
    
    console.log(addName);
    
    addName.map(pName => {

        let p = document.createElement("p");
        p.textContent = pName;
        p.className = "text-lg font-medium text-gray-900 dark:text-white mb-4";

        let button = document.createElement("button");
        button.type = "button";
        button.textContent = "x";
        button.classList.add(
            "text-gray-900",
            "text-sm",
            "w-8",
            "h-8",
            "justify-end",
            "ms-2"
        );

        button.addEventListener("click", () => {
            removeFromLocalStorage(pName);
            p.remove();
        });

        p.append(button);
        nameListDiv.append(p);
    });
})

let randBtn = document.getElementById("randBtn");

randBtn.addEventListener('click', () => {

})


let GS1 = document.getElementById('GS1');
let GS2 = document.getElementById('GS2');
// let GS3 = document.getElementById('GS3');
// let GS4 = document.getElementById('GS4');
// let groupDiv = document.getElementById('groupDiv');

GS1.addEventListener('click', () => {
    console.log(`group size of one`)
})

GS2.addEventListener('click', () => {
    console.log(`group size of two`)
})

// GS3.addEventListener('click', () => {
//     console.log(`group size of three`)
// } )

// GS4.addEventListener('click', () => {
//     console.log(`group size of four`)
// })