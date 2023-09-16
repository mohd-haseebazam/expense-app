var inputs = document.getElementById("inp");
var text = document.querySelector(".text");
var todoItems = [];

if (localStorage.getItem("todos")) {
  todoItems = JSON.parse(localStorage.getItem("todos"));

  todoItems.forEach(function (todoText) {
    var newEle = document.createElement("ul");
    newEle.innerHTML = `${todoText}<i class= "fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    attachDeleteListener(newEle);
  });
}

function saveToDoItems() {
  localStorage.setItem("todos", JSON.stringify(todoItems));
}

function Add() {
  if (inputs.value == "") {
    Swal.fire("Error", "Please enter a task", "error");
  } else {
    var newEle = document.createElement("ul");
    var todoText = inputs.value;
    newEle.innerHTML = `${todoText}<i class= "fa-solid fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";

    todoItems.push(todoText);
    attachDeleteListener(newEle);
    saveToDoItems();
  }
}

function attachDeleteListener(element) {
  var deleteButton = element.querySelector("i");
  deleteButton.addEventListener("click", function () {
    Swal.fire({
      title: "Are you sure?",
      text: "This todo will be deleted!",
      icon: "warning",
      showCancelbutton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "swal-confirm-button",
        cancelButton: "swal-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        element.remove();

        var index = todoItems.indexOf(element.textContent);
        if (index !== -1) {
          todoItems.splice(index, 1);
        }
        saveToDoItems();

        Swal.fire("Deleted", "You todo has been deleted", "success");
      }
    });
  });
}

function clearAllData() {
  Swal.fire({
    title: "Are you sure?",
    text: "This  will clear all your todo items!",
    icon: "warning",
    showCancelbutton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, clear all!",
    cancelButtonText: "Cancel",
    customClass: {
      confirmButton: "swal-confirm-button",
      cancelButton: "swal-cancel-button",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      var todoItemUI = document.querySelectorAll(".text ul");
      todoItemUI.forEach(function (item) {
        item.remove();
      });
      todoItems = [];
      localStorage.removeItem("todos");

      Swal.fire("Cleared", "All your todo items have been cleared", "success");
    }
  });
}
