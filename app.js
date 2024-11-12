
function createInput(){

    let newElement = document.createElement("div");
    newElement.className = "list-item";
    newElement.innerHTML = `
        <input></input>
        <button class="del-button">x</button>
    `;

    document.querySelector(".input").appendChild(newElement);

    let btnDel = newElement.querySelector(".del-button");
    btnDel.addEventListener("click", (e) => {
        let inputDivs = document.querySelectorAll(".list-item");
        const inputDiv = e.target.parentElement;
        const inputField = inputDiv.querySelector("input");

        if(inputDivs.length==1){
            inputField.value=""
        }else{
            inputDiv.remove()
        }
    });
}

createInput()


// document.querySelector(".del-button").addEventListener('click',()=>{
//     document.querySelector("input").value=""
// })



// btnAdd.addEventListener("click", () => {
//     let inputValue = document.querySelector("input").value;
//     if(inputValue.trim()!=""){
//     list.push(inputValue);

//     let newElement = document.createElement("div");
//     newElement.className = "list-item";
//     newElement.innerHTML = `
//         <label>${inputValue}</label>
//         <button class="del-button">x</button>
//     `;

//     document.querySelector(".input").appendChild(newElement);


//     let btnDel = newElement.querySelector(".del-button");
//     btnDel.addEventListener("click", (e) => {
//         e.target.parentElement.remove();

//         let index = list.indexOf(inputValue);
//         if (index > -1) {
//             list.splice(index, 1);
//         }
//     });
//     }

//     document.querySelector("input").value = "";
//     console.log(list)
// });


let btnAdd = document.querySelector(".add");

btnAdd.addEventListener("click", () => {
    createInput()
});






let filter=document.querySelector(".filter")

// filter.addEventListener("mouseover", (e) => {
//     if (e.target.classList.contains("photo1")) {
//         e.target.src = "images/filter-black.svg";
//     } else {
//         e.target.src = "images/filter-up-black.svg";
//     }
// });

// filter.addEventListener("mouseout", (e) => {
//     if (e.target.classList.contains("photo1")) {
//         e.target.src = "images/filter.svg";
//     } else {
//         e.target.src = "images/filter-up.svg";
//     }
// });

filter.addEventListener("click", (e) => {
    e.target.classList.toggle("photo1");
    e.target.classList.toggle("photo2");


    if (e.target.classList.contains("photo1")) {
        // e.target.src = "images/filter.svg";
        let inputs=[]
        document.querySelectorAll('input').forEach(input=>{
            inputs.push(input);
        })
        inputs.sort((a, b) => b.value.localeCompare(a.value));
        document.querySelector(".input").innerHTML=""
        inputs.forEach(item=>{
            document.querySelector(".input").appendChild(item.parentElement);  
        })          
        
    } else {
        // e.target.src = "images/filter-up.svg";
        let inputs=[]
        document.querySelectorAll('input').forEach(input=>{
            inputs.push(input);
        })
        inputs.sort((a, b) => a.value.localeCompare(b.value));
        document.querySelector(".input").innerHTML=""
        inputs.forEach(item=>{
            document.querySelector(".input").appendChild(item.parentElement);  
        })
    }
});