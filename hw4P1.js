const alertBtn = document.getElementById("alertBtn");
const confirmBtn = document.getElementById("confirmBtn");
const promptBtn = document.getElementById("promptBtn");
const saferPromptBtn = document.getElementById("saferPromptBtn");
const output = document.getElementById("output");


alertBtn.addEventListener("click", () => {
    alert("Alert pressed")
})


confirmBtn.addEventListener("click", () => {
    let result = confirm("Confirm?");
    if (result) {
        output.textContent = `confirm result: ${result}`;
    } else {
        output.textContent = "confirm result: False";
    }
});

promptBtn.addEventListener("click", () => {
    let result = prompt("Enter something:");
    if (result == null) {
        output.textContent = "User didn't enter anything.";
    } else {
        output.innerHTML = `prompt result: ${result}`;
    }
});

saferPromptBtn.addEventListener("click", () => {
    let result = window.prompt("safer prompt, enter something:");
    if (result == null) {
        output.textContent = "User didn't enter anything.";
    } else {
        output.innerHTML = `prompt result: ${DOMPurify.sanitize(result)}`;
    }
});
