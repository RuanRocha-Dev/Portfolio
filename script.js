let hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", () => {
    document.querySelector("#container").classList.toggle("show-menu");
});


let span = document.querySelector("#description");
let box = document.getElementById("box");

span.addEventListener("click", () =>{
    if (box.style.visibility === "hidden") {
        box.style.visibility = "visible";
        box.style.animation = "moveSpan 1s forwards";
        span.innerHTML = "OCULTAR";
    }
    else{
        box.style.visibility = "hidden";
        box.style.animation = "none";
        span.innerHTML = "SAIBA MAIS";
    }
});

