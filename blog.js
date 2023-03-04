let posts = []
const addBtn = document.getElementById("addBtn");
//const addPrompt = document.getElementById("addPrompt");

const UISelector = {
    titleInput: "#titleInput",
    confirmBtn: "#trueConfirm",
    dateInput: "#dateInput",
    summaryInput: "#summaryInput",
    promptDialog: "#addPrompt",
    deletePrompt: "#delPrompt",
    delTrue: "#delTrue",
    addPrompt: "#addPrompt"
}

// showAddPrompt(addBtn, addPrompt);
// function showAddPrompt(button, dialog) {
addBtn.addEventListener('click', () => {
    //console.log("call addBTN eventListener")
    let addPrompt = document.querySelector(UISelector.promptDialog);
    addPrompt.showModal();
    //console.log("called Modal")
    //let addPrompt = document.querySelector(UISelector.promptDialog);
    let confirmBtn = document.querySelector(UISelector.confirmBtn);
    addPrompt.addEventListener('close', (event) => {
        console.log("closing..")
        if (addPrompt.returnValue == confirmBtn.value) {
            let post = retrievePost();
            console.log(post)
            addPost(post);
        }
    })
});
//}

function retrievePost() {
    let postDate = document.querySelector(UISelector.dateInput).value;
    let postTitle = document.querySelector(UISelector.titleInput).value;
    let postSummary = document.querySelector(UISelector.summaryInput).value;
    let post = { postDate, postTitle, postSummary }
    return post;
}

function promptAlert() {
    document.getElementById("emptyPrompt").showModal();

}

function addPost(post) {
    posts.push(post)
    renderList();
}

//delete the post selected 
function delPost(index) {
    let delPrompt = document.querySelector(UISelector.deletePrompt)
    let delTrue = document.querySelector(UISelector.delTrue)
    delPrompt.showModal();
    delPrompt.addEventListener('close', (event) => {
        if (delPrompt.returnValue == delTrue.value) {
            posts.splice(index, 1);
            renderList();
        }
    })

}

function renderList() {
    let postList = ""
    for (let [index, post] of posts.entries()) {
        if (post.postDate === '' || post.postTitle === '' || post.postSummary === '') {
            continue;
        }
        postList += `
        <li>
            <span> ${post.postDate} </span>
            <span> ${post.postTitle} </span>
            <span> ${post.postSummary} </span>
            <span class="edit" onclick="editPost(${index})">edit</span>
            <span class="delete" onclick="delPost(${index})">delete</span>
        </li>
        `
    }
    document.querySelector("#list").innerHTML = postList;

    //clear input box
    document.querySelector(UISelector.dateInput).value = null;
    document.querySelector(UISelector.titleInput).value = null;
    document.querySelector(UISelector.summaryInput).value = null;
}


