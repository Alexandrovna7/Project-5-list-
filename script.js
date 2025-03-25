const input = document.querySelector("#input");
const allItems = document.querySelector("#items");

input.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        const item = document.createElement("h2");
        item.textContent = input.value;

    item.addEventListener("click", function () {
        item.classList.toggle("done");
    });

    if (input.value != "") {
        allItems.appendChild(item);
        }

        input.value = "";
    }
    });







