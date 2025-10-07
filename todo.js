let inputs = document.getElementById("input");
let buttons = document.getElementById("button");
let task = document.getElementById("task");

function add() {
   if(inputs.value == ""){
      alert ("pls add your task");
   }
   else{ let a = document.createElement("ul");
      let st = a.innerHTML = inputs.value
      task.append(a);
      a.style.color = "white";
      a.style.fontSize = "50px";

      let btn = document.createElement("button");
      btn.innerText = "delete";
      a.append(btn);
      btn.style.marginLeft ="20px";
      btn.style.color = "white";
      btn.style.borderRadius = "15px";
      btn.style.height = "30px";
     

      btn.addEventListener("click" ,()=>{
         console.log("navratan");
         a.remove();
         btn.remove();
      });

   }
}
