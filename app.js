const openModalBtn = document.querySelector("[data-modal-open]");
const closeModalBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

openModalBtn.addEventListener("click", function () {
    modal.classList.add("is-open");
});

closeModalBtn.addEventListener("click", function () {
    modal.classList.remove("is-open");
});