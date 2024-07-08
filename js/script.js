const shoppingListItems=[];
const form=document.querySelector("form");
const inputValue=document.getElementById("item_input");
const addButton=document.getElementById("add_button");
const clearButton=document.getElementById("clearButton");
const div=document.querySelector("div");
const ol=document.createElement("ol");
div.append(ol);
addButton.addEventListener('click', function(e){
    e.preventDefault();
    let inputItem=inputValue.value;
    if (inputItem===""){
        alert("Please Input an Item");
    } else {
        shoppingListItems.push(inputItem);
        // for (let item of shoppingListItems){
        //     console.log(item);
        // }
        //div.append(shoppingListItems);
        const li=document.createElement("li");
        li.textContent=inputItem;
        const checkButton=document.createElement("button");
        checkButton.textContent="Mark Purchased";
        checkButton.classList.add("itemCheck");
        const deleteButton=document.createElement("button");
        deleteButton.classList.add("deleteBtn");
        deleteButton.textContent="X";
        li.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(e){
            if (e.target.classList.contains("deleteBtn")){
                const itemToDelete=e.target.parentElement;
                itemToDelete.remove();
            }
        })    
        li.appendChild(checkButton);
        ol.appendChild(li);
        inputValue.value="";
        
    }
})
clearButton.addEventListener('click', function(){
    ol.innerHTML='';
})

ol.addEventListener("click", function(e){
    if (e.target.classList.contains("itemCheck")){
        e.target.parentElement.style.backgroundColor="green";
    }
});




