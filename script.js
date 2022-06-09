var currVal = null;

const ratingButtons = document.getElementsByClassName("rating")

function resetButtons() {
    for(let button of ratingButtons){
        button.classList.remove('selected')
    }
}

for(let button of ratingButtons){
    button.addEventListener("click", ()=>{
        resetButtons();
        currVal = button.value;
        button.classList.add('selected')
    });
}

document.getElementById("submit").addEventListener("click", ()=>{
    if (currVal === null) {
        alert("Invalid Value")
        return;
    }
    document.getElementById("score").innerText = `You selected ${currVal} out of 5`
    document.getElementById("content").classList.add('hide')
    document.getElementById("content_success").classList.remove('hide')

})