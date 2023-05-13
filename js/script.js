console.log("WARSZTAT - Obsluga formularza"Imie i Nazwisko"");

const submitForm = (event) => {
    event.preventDefault();

    let firsName = document.querySelector("[name="fname"]");
    let lastName = document.querySelector("[name="lname"]");

    console.log("Imie: ${firstName.value}, Nazwisko: ${lastName.value}");
}

let form = document.getElementById("form");

form.addEventListener("submit, submitForm");

console.log(form);