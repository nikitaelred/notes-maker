const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
function updateStorage() {
  console.log("in update");
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName == "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName == "P") {
    console.log(e.target.tagName);
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      //console.log(nt);
      nt.addEventListener("keyup", function () {
        console.log(nt);
        updateStorage();
      });
    });
  }
});

document.addEventListener('keydown',event => {
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
});
