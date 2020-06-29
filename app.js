const form = document.getElementById("book-form");
const title = document.getElementById("title");
const rating = document.getElementById("rating");
const file = document.getElementById("file");
const bookList = document.getElementById("book-list");

let addBook = () => {
    if(
        title.value == "" ||
        rating.value == "" ||
        file.value == ""
    ) {
        console.log("error");
    }
    else {
    const bookListRow = document.createElement("tr");
    bookListRow.innerHTML = `
        <td>${title.value}</td>
        <td>${rating.value}</td>
        <td><a class="btn btn-primary" href=${file.value} target="_blank">Read</a></td>
        <td><a class="btn btn-danger delete mt-1 text-white">Delete</a></td>`;
    bookList.appendChild(bookListRow);
    title.value = "";
    rating.value = "";
    file.value = "";
    }
}

let removeBook = (e) => {
    const item = e.target;
    if(item.classList.contains('delete')) {
        const remove = item.parentElement.parentElement;
        remove.remove();
    }
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    addBook();
    bookList.addEventListener("click",removeBook);
});