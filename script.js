const body = document.querySelector('body')
document.addEventListener("keydown", (e) => {
    console.log(e);
    if(e.key === "Enter"){
        const message = document.createElement("section")
        message.innerText = "Кирилл Денисович"
        body.appendChild(message)
    }
    else if (e.key === "Backspace"){
        const message = document.createElement("section")
        message.innerText = "НЕ Кирилл Денисович"
        body.appendChild(message)
    }

})