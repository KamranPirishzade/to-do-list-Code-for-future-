
let inputDelButton = document.querySelector(".input-field .del-button");

inputDelButton.addEventListener("click",()=>{
    document.querySelector(".input-field input").value=""
})




function createInput(addedInput) {
    let newElement = document.createElement("div");
    newElement.className = "list-item";
    newElement.innerHTML = `
        <label>${addedInput}</label>
        <button class="del-button">x</button>
    `;

    document.querySelector(".input").appendChild(newElement);

    let btnDel = newElement.querySelector(".del-button");
    btnDel.addEventListener("click", (e) => {
        let inputDivs = document.querySelectorAll(".list-item");
        const inputDiv = e.target.parentElement;

        if (inputDivs.length === 1) {
            inputDiv.querySelector("label").textContent = "No item found";
        } else {

            inputDiv.remove();
        }
    });
}

let showMode=false


let btnAdd = document.querySelector(".add");
btnAdd.addEventListener("click", () => {

    const inputField = document.querySelector(".input-field input");
    const inputValue = inputField.value.trim();



    if (inputValue === "" && document.querySelectorAll(".list-item").length === 0) {
        showMode=true;
        createInput("No item found"); 
        inputField.value = "";
        document.querySelector(".input-field").style.display = "none";
        return;
    }

    if (inputValue === "") {
        showMode=true;
        document.querySelector(".input-field").style.display = "none";
        document.querySelectorAll(".list-item").forEach(item => {
            item.style.display = "flex";
        });
        return;
    }

    if(!showMode){
        createInput(inputValue);
        inputField.value = ""; 
        
        showMode=true;

        document.querySelector(".input-field").style.display = "none";
        document.querySelectorAll(".list-item").forEach(item => {
            item.style.display = "flex";
            if(item.querySelector("label").textContent=="No item found"){
                item.remove()
            }
        });}
}
);


let btnPlus = document.querySelector(".icon");
btnPlus.addEventListener("click", () => {
    showMode=false
    document.querySelector(".input-field input").value = ""; 
    document.querySelector(".input-field").style.display = "flex"; 
    document.querySelectorAll(".list-item").forEach(item => {
        item.style.display = "none";
    });
});


let filter = document.querySelector(".filter");
filter.addEventListener("click", (e) => {
    e.target.classList.toggle("photo1");
    e.target.classList.toggle("photo2");


    let isDescending = e.target.classList.contains("photo1");
    let listItems = Array.from(document.querySelectorAll(".list-item"));


    listItems.sort((a, b) => {
        const aText = a.querySelector("label").textContent;
        const bText = b.querySelector("label").textContent;
        return isDescending 
            ? bText.localeCompare(aText)
            : aText.localeCompare(bText);
    });


    let inputContainer = document.querySelector(".input");
    listItems.forEach(item => {
        inputContainer.appendChild(item);
    });
});