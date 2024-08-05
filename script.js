let container = document.querySelector(".outsideSquare");


let count = 8;
let containerWidth = container.offsetWidth;
console.log(containerWidth);
let sizing = (containerWidth/count)-1;
console.log(sizing);
for (let i = 0; i < count; i++){
    for (let j = 0; j < count; j++){
        let box = document.createElement("div");
        box.style.height = sizing + "px";
        box.style.width = sizing + "px";
        box.setAttribute("class","box");
        box.textContent = j;
        container.appendChild(box);
    }
}

