const fieldsElement = document.querySelectorAll(".board__item");

const fields = ["", "", "", "", "", "", "", "", ""];

let activePlayer = "X";

fieldsElement.forEach(field => {
    field.addEventListener("click", e => {
        const {
            pos
        } = e.target.dataset;

        if (fields[pos] === "") {
            fields[pos] = activePlayer;
            e.target.classList.add(`board__item--filled-${activePlayer}`);
            activePlayer = activePlayer === 'X' ? 'O' : 'X';
        }
    });
});