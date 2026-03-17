const form = document.querySelector("#todoAddForm");
const formInput = document.querySelector("#todoName");
const cardBodyFirst = document.querySelectorAll(".card-body")[0];
const cardBodySec = document.querySelectorAll(".card-body")[1];
const todoList = document.querySelector(".list-group");
const clearButton = document.querySelector("#clearButton");
const searchInput = document.querySelector("#todoSearch");

let todos = [];
runEvents();

function runEvents() { //eventler
    form.addEventListener("submit", addFunc);
    document.addEventListener("DOMContentLoaded", localAdd);
    clearButton.addEventListener("click", clearBut);
    cardBodySec.addEventListener("click", removeTodo);
    searchInput.addEventListener("keyup", filter);

}

function filter(e) {
    const text = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".list-group-item").forEach(function (todom) {
        if (todom.textContent.toLowerCase().trim().includes(text)) {
            todom.setAttribute("style", "display:block");

        }
        else {
            todom.setAttribute("style", "display:none");
        }
    })
}

function removeTodo(e) { //todoList'ten silme
    if (e.target.classList.contains("fa-remove")) {
        const del = e.target.parentElement.parentElement;
        del.remove();
        removeFromStorage(del.textContent);
        showAlert("success", "Todo başarıyla silindi!");
    }
}

function removeFromStorage(del) { //Localden de eşzamanlı olarak silme
    localStControl();
    todos.forEach(function (todo, index) {
        if (todo == del) {
            todos.splice(index, 1); //bir dizide indexten başlayarak '' kadar eleman silme metodu
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos));
}

function localAdd() { //local storagedakileri listeye yazdırır.
    localStControl();
    todos.forEach(function (todo) {
        addTodo(todo);
    });
}

function addFunc(e) { //Formdan todoList ve localSt'a ekleme
    const input = formInput.value.trim();
    if (input == "" || input == null) {
        showAlert("warning", "Lütfen boş geçmeyiniz!");
    }
    else {
        addTodo(input);     //listeye ekleme
        formInput.value = "";

        addLocalSt(input);  //localstorage'a ekleme

        showAlert("success", "Tebrikler,ekleme başarıyla gerçekleşti.");
    }


    e.preventDefault(); //sayfa yenilenmelerini engeller
}

function addTodo(input) { //todoList'e ekleme

    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";
    li.textContent = input;

    const a = document.createElement("a");
    a.className = "delete-item";
    a.href = "#";

    const i = document.createElement("i");
    i.className = "fa-remove";

    a.appendChild(i);
    li.appendChild(a);
    todoList.appendChild(li);


}

function clearBut() { //hepsini temizleme
    todoList.innerHTML = "";
    localStorage.clear();
}

function addLocalSt(input) { //localSt'a ekleme
    localStControl();
    todos.push(input);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function localStControl() {  //amaç kontrol sağlayıp diziye çevirmek
    if (localStorage.getItem("todos") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}

function showAlert(type, message) { //uyarı gösterme-bootstrap
    const div = document.createElement("div");
    div.className = "alert alert-" + type;
    div.textContent = message;
    cardBodyFirst.appendChild(div);

    setTimeout(function () {  //belli süreliğine bir şeyin var olması için kullanılır.
        div.remove();
    }, 3000);
}