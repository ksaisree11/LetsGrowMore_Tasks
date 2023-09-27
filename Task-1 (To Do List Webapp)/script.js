const inputBox = document.getElementById("input-box");
const container_list = document.getElementById("container_list");

function addtask(){
    if(inputBox.value == ''){
        alert("You must compose something!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        container_list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputBox.value = "";
    saveData();
}

container_list.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("Checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);



function saveData(){
    localStorage.setItem("data" , container_list.innerHTML);
}