export function customAlert(message) {
    let dialogMarkup = `
    <dialog id="alertDialog">
        <form method="dialog">
            <p>${message}</p>
            <button>OK</button>
        </form>
    </dialog>
    `

    setTimeout(() => {
        document.body.insertAdjacentHTML('afterbegin', dialogMarkup)
        let dialog = document.querySelector('dialog#alertDialog');
        dialog.showModal();

        dialog.addEventListener("close", () => {
            dialog.remove();
        })
    })
}

export function customConfirm(message, onClose) {
    let dialogMarkup = `
    <dialog id="confirmDialog">
        <form method="dialog">
            <p>${message}</p>
            <button value="ok">OK</button>
            <button value="cancel">Cancel</button>
        </form>
    </dialog>
    `

    setTimeout(() => {
        document.body.insertAdjacentHTML('afterbegin', dialogMarkup)
        let dialog = document.querySelector('dialog#confirmDialog');
        dialog.showModal();

        dialog.addEventListener("close", () => {
            onClose(dialog.returnValue === "ok")
            dialog.remove();
        })
    })
}

export function customPrompt(message, onClose) {
    let dialogMarkup = `
    <dialog id="promptDialog">
        <form method="dialog">
            <label for="nameInput">${message}</label><br>
            <input type="text" id="promptInput" name="nameInput" />
            <button value="ok">OK</button>
            <button value="cancel">Cancel</button>
        </form>
    </dialog>
    `;

    setTimeout(() => {
        document.body.insertAdjacentHTML('afterbegin', dialogMarkup)
        let dialog = document.querySelector("dialog#promptDialog");
        dialog.showModal();

        dialog.addEventListener("close", () => {
            onClose(dialog.returnValue !== "ok" ? "" : dialog.querySelector("#promptInput").value)
            dialog.remove();
        })
    })
}

export function postPrompt(initialPost={})