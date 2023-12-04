const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const numberInput = document.querySelector("#age")

form.addEventListener("submit", (event) => {

    event.preventDefault();

if(nameInput.value === "") {
    alert("Por favor, preencha seu nome")
return;
}

if(emailInput.value === "") {
    alert("Por favor, preencha seu email")
return;
}

if(numberInput.value === "") {
    alert("Por favor, digite sua idade")
return;
}

form.submit();

window.location.href = "../telas0/index0.html";


});
