let choice = document.getElementsByName("radioChoice");
let button = document.getElementById("button");
let div = document.getElementById("div1");
let ul = document.getElementById("ul");
let list = document.getElementById("list");

let curentChecked = document.querySelector('input[name="radioChoice"]:checked');;
let text = curentChecked.nextElementSibling.nextElementSibling;


function selectRadio(e) {
    if (e.target.name === "radioChoice") {
        curentChecked = e.target;
        text = curentChecked.nextElementSibling.nextElementSibling;
    }
}

function pushElement() {
    if (curentChecked.id === "choice1") {
        if (text.value.trim().length !== 0) {
            let li = document.createElement("li");
            let textNode = document.createTextNode(text.value);
            li.appendChild(textNode);
            ul.appendChild(li);
        }
    }
}

function addElement(e) {
    if (curentChecked.id === "choice2") {
        if (e.target.tagName === "LI") {
            let elem = e.target;
            let parent = elem.parentElement;
            if (text.value.trim() > 0) {
                let li = document.createElement("li");
                let textNode = document.createTextNode(text.value);
                li.appendChild(textNode);
                parent.insertBefore(li, elem);
            }
        }
    }
}

function removeElement(e) {
    if (curentChecked.id === "choice5") {
        let target = e.target;
        if (target.tagName === "LI") {
            let parent = target.parentElement;
            if (target !== null && parent !== null) {
                parent.removeChild(target);
            }
        }
    }
}

function addUl(e) {
    let elementForAdd = e.target;
    if (curentChecked.id === "choice4") {
        if (curentChecked.childNodes.name !== "ul") {
            if (elementForAdd !== null && text !== null) {
                let newElemUl = document.createElement("ul");
                let newElemLi = document.createElement("li");
                let newText = document.createTextNode(text.value.trim());

                newElemLi.appendChild(newText);
                newElemUl.appendChild(newElemLi);
                elementForAdd.appendChild(newElemUl);
            }
        }
    }
}

function replaceText(e) {
    if (curentChecked.id === "choice3") {
        let oldLi = e.target;
        if (oldLi.tagName === "LI") {
            let oldNode = oldLi.firstChild;
            let newText = text.value.trim();
            if (newText.length > 0) {
                let newNode = document.createTextNode(newText);
                oldLi.replaceChild(newNode, oldNode);
            }
        }
    }
}

div.addEventListener("change", selectRadio);
button.addEventListener("click", pushElement);
list.addEventListener("click", removeElement);
list.addEventListener("click", addUl);
list.addEventListener("click", replaceText);
list.addEventListener("click", addElement);