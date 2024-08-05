let container = document.querySelector(".outsideSquare");

let reset = document.querySelector(".reset");
let count = 8;
let box;
reset.onclick = () => {
    count = clickAlert()
    if (box != null) { box.remove();} 
    let containerWidth = container.offsetWidth;
    console.log(containerWidth);
    let sizing = (containerWidth/count)-1;
    console.log(sizing);
    for (let i = 0; i < count; i++){
        for (let j = 0; j < count; j++){
            box = document.createElement("div");
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









