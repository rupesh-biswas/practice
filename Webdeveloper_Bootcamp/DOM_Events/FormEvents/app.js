const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const cats = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const catName = input.value;
    const newLI = document.createElement("li");
    newLI.innerText = catName;
    cats.append(newLI);
    input.value = "";
});