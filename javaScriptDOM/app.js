let addBtn = document.querySelector("#addBtn");
let inputField = document.querySelector("#inpuField");
let toDoContainer = document.querySelector("#toDoContainer");
let checker = [];
addBtn.addEventListener("click",() =>{

    let toDoList = document.createElement("li");
    let output = document.createElement("output")
    output.innerHTML = inputField.value;
    output.classList.add("toDoList") 
    // check the existing value if not exist it return -1
    let toDoListValue = output.innerHTML;
    let toDoListValueLowerCase = checker.findIndex(value => {
        return value.toLowerCase() === toDoListValue.toLowerCase();
    })
    

    // create element for the removebuttom
    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Delete";
    removeBtn.classList.add("removeBtn");

    
    if (  toDoListValue == ""){
        alert(" Please fill out")
    }else if (checker[0] != undefined && toDoListValueLowerCase != -1){ 
        alert("Already Exist");
    }else{
        checker.push(toDoListValue);
        toDoContainer.append(toDoList);
        toDoList.append(output)
        toDoList.append(removeBtn);
    }

    console.log(toDoListValueLowerCase)
    
    removeBtn.addEventListener("click", (e) =>{ 
        let deleteInput = e.target.parentNode;
        let innerValue = deleteInput.querySelector(".toDoList").innerHTML
        checker.map((value )=>{
            if (value == innerValue ){
                let targetLock = checker.indexOf(value)
                checker.splice(targetLock,1)
                deleteInput.remove();
            } else{
                return
            }
        })
    })   
})

 
