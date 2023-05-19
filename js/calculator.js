// const minus = document.querySelectorAll(".minus-btn");
// const plus = document.querySelectorAll(".plus-btn");
// const quantity = document.querySelectorAll(".js-quantity");
//
// plus.addEventListener("click", () => {
//     quantity.value = Number.parseInt(quantity.value) + 1
// });
// minus.addEventListener("click", () => {
//     if (quantity.value > 1) {
//         quantity.value = quantity.value - 1;
//     }
// });


const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");
const quantities = document.querySelectorAll(".js-quantity");

minusBtns.forEach((minusBtn, index) => {
    minusBtn.addEventListener("click", () => {
        if (quantities[index].value > 1) {
            quantities[index].value = Number.parseInt(quantities[index].value) - 1;
        }
    });
});

plusBtns.forEach((plusBtn, index) => {
    plusBtn.addEventListener("click", () => {
        quantities[index].value = Number.parseInt(quantities[index].value) + 1;
    });
});

const buttonUpdate = document.querySelector(".wp-element-button");

buttonUpdate.disabled = false;
buttonUpdate.removeAttribute("aria-disabled");


