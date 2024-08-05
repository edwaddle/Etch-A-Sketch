let body = document.querySelector("body");
let reset = document.querySelector(".reset");
let count = 0;
let container;
reset.onclick = () => {
    if (container != null){
        container.remove();
    }
    container = document.createElement("div");
    container.setAttribute("class","outsideSquare")
    body.appendChild(container);
    count = clickAlert()
    if (count > 99){
        alert("TOO MANY");
        return;
    }
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
            box.textContent = j+1;
            container.appendChild(box);
        }
    }
};
function clickAlert(num ){
    num = prompt("How mant boxes per row?");
    console.log(num);
    return num;
        
}









