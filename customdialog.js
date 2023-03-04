const alertBtn = document.getElementById("alertBtn")
const alertDialog = document.getElementById("alertDialog")
const confirmBtn = document.getElementById("confirmBtn")
const confirmDialog = document.getElementById("confirmDialog")
const confirmTrue = document.querySelector("#trueConfirm")
const confirmFalse = document.querySelector("#falseConfirm")
const promptBtn = document.getElementById("promptBtn")
const promptDialog = document.getElementById("promptDialog")
const promptok = document.getElementById("ok")
const promptCancel = document.getElementById("cancel")
const input = document.querySelector("#promptInput");
const output = document.getElementById("output")

function showDialog(button, dialog) {
    button.addEventListener('click', () => {
        dialog.showModal();
    });
}

function ConfirmOutput(button, output) {
    button.addEventListener('click', () => {
        let buttonValue = button.value;
        output.innerHTML = `Confirm result: "${buttonValue}"`;
    });
}

showDialog(alertBtn, alertDialog)
showDialog(confirmBtn, confirmDialog)
showDialog(promptBtn, promptDialog)
ConfirmOutput(confirmTrue, output)
ConfirmOutput(confirmFalse, output)


promptok.addEventListener('click', () => {
    output.textContent = "";
    let returnValue = input.value;
    if (returnValue == "") {
        output.textContent = `There is nothing`;
    } else {
        output.innerHTML = `Prompt result: "${DOMPurify.sanitize(returnValue)}"`;
    }
})

promptCancel.addEventListener('click', () => {
    output.innerHTML = `Prompt Result: Cancel`;
});

