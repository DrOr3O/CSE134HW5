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

export function postPrompt(initialPost, onSave) {
    let dialogMarkup = `
    <dialog id="addPostPrompt">
        <form method="dialog">
            <label for="dateInput">Date:</label><br>
            <input type="date" id="dateInput" name="dateInput" required /> <br>
            <label for="titleInput">Title:</label><br>
            <input type="text" id="titleInput" name="titleInput" required /> <br>
            <label for="summaryInput">Summary:</label><br>
            <input type="textarea" id="summaryInput" name="summaryInput" required /> <br>
            <button value="save">Save</button>
            <button value="cancel">Cancel</button>
        </form>
    </dialog>
    `

    setTimeout(() => {
        document.body.insertAdjacentHTML('afterbegin', dialogMarkup);
        let dialog = document.querySelector("dialog#addPostPrompt");
        dialog.querySelector("#dateInput").value = initialPost.postDate;
        dialog.querySelector("#titleInput").value = initialPost.postTitle;
        dialog.querySelector("#summaryInput").value = initialPost.postSummary;
        dialog.showModal();

        dialog.addEventListener("close", () => {
            if (dialog.returnValue === "save") {
                onSave({
                    postTitle: dialog.querySelector("#titleInput").value,
                    postDate: dialog.querySelector("#dateInput").value,
                    postSummary: dialog.querySelector("#summaryInput").value,
                })
            }
            dialog.remove();
        })
    })
}