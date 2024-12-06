const lists = document.querySelector("#book-list ul");
lists.addEventListener("click", (e) => {
  if (e.target.className == "delete") {
    const li = e.target.parentElement;
    lists.removeChild(li);
  }
});

const searchBar = document.forms["search-books"].querySelector("input");
searchBar.addEventListener("keyup", (e) => {
  const content = e.target.value.toLowerCase();
  const books = document.getElementsByTagName("li");
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(content) != -1) {
      book.style.display = "block";
    } else {
      book.style.display = "none";
    }
  });
});

const addBooks = document.forms["add-books"];
addBooks.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = e.target.querySelector('input[type="text"]').value;

  let li = document.createElement("li");
  let bookName = document.createElement("span");
  let deleteBtn = document.createElement("span");

  bookName.classList.add("name");
  deleteBtn.classList.add("delete");

  deleteBtn.textContent = "delete";
  bookName.textContent = value;

  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  lists.appendChild(li);
});

const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", (e) => {
  if (hideBox.checked) {
    lists.style.display = "none";
  } else {
    lists.style.display = "block";
  }
});

const tabs = document.querySelector(".tabs");
const panels = document.querySelectorAll(".panel");
tabs.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    const targetPanel = document.querySelector(e.target.dataset.another);
    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});
