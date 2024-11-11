let list = [];

let btnAdd = document.querySelector(".add");


document.querySelector(".del-button").addEventListener('click',()=>{
    document.querySelector("input").value=""
})



btnAdd.addEventListener("click", () => {
    let inputValue = document.querySelector("input").value;
    if(inputValue.trim()!=""){
    list.push(inputValue);

    let newElement = document.createElement("div");
    newElement.className = "list-item";
    newElement.innerHTML = `
        <label>${inputValue}</label>
        <button class="del-button">x</button>
    `;

    document.querySelector(".input").appendChild(newElement);


    let btnDel = newElement.querySelector(".del-button");
    btnDel.addEventListener("click", (e) => {
        e.target.parentElement.remove();

        let index = list.indexOf(inputValue);
        if (index > -1) {
            list.splice(index, 1);
        }
    });
    }

    document.querySelector("input").value = "";
    console.log(list)
});




let filter=document.querySelector(".filter")
filter.addEventListener("mouseenter",(e)=>{
    e.target.src="images/filter-black.svg"
})
filter.addEventListener("mouseleave",(e)=>{
    e.target.src="images/filter.svg"
})