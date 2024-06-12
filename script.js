let modeBtn = document.querySelector("#btn");
let body = document.querySelector("body");
let changeImage = document.querySelector("img");
let currentMode = "light";

modeBtn.addEventListener("click", () => {
    if (currentMode === "light"){
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        changeImage.src = 'Pablita.png';
        
    } else {
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        changeImage.src = 'sun.png';
    }
    console.log(currentMode);
});
