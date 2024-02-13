const saveToLocalStorage = (name) => {
    let addName = getlocalStorage();

    if(!addName.includes(name)){
        addName.push(name)
    }
    localStorage.setItem("AddName", JSON.stringify(addName));
}

const getlocalStorage = () => {
    let localStorageData = localStorage.getItem("AddName");

    if(localStorageData == null){
        return []; 
    }

    return JSON.parse(localStorageData);
}

const removeFromLocalStorage = () => {
    let addName = getlocalStorage();
    let nameIndex = addName.indexOf(name);
    addName.splice(nameIndex, 1);
    localStorage.setItem("AddName", JSON.stringify(addName));
}

export{saveToLocalStorage, getlocalStorage, removeFromLocalStorage}