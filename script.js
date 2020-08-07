const fields = document.querySelectorAll(".board__item");

let activePlayer = "X";

fields.forEach(field => {
    field.addEventListener("click", (e) => {
        e.target.classList.add(`board__item--filled-${activePlayer}`);
        activePlayer = activePlayer === 'X' ? 'O' : 'X';
    });
})