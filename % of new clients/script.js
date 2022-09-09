const progress = document.querySelector(".progress-done")
const newClients = document.querySelector(".newClients")
const oldClients = document.querySelector(".oldClients")
let finalValue = 0;
let max = 0;

function findPercentage() {
    progress.style.width = `${(finalValue / max ) * 100}%`;
    progress.innerText = `${Math.ceil((finalValue / max ) * 100)}%`;
}

newClients.addEventListener("keyup", function() {
    finalValue = parseInt(newClients.value,10);
    findPercentage()
})

oldClients.addEventListener("keyup", function() {
    max = parseInt(oldClients.value,10);
    
})





