const minus = document.querySelector(".minus-btn");
const plus = document.querySelector(".plus-btn");
const quantity = document.querySelector(".js-quantity");

plus.addEventListener("click", () => {
    quantity.value = Number.parseInt(quantity.value) + 1
});
minus.addEventListener("click", () => {
    if (quantity.value > 1) {
        quantity.value = quantity.value - 1;
    }
});


