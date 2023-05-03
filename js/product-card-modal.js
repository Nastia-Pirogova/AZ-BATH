(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-product-card-modal-open]"),
        closeModalBtn: document.querySelector("[data-product-card-modal-close]"),
        modal: document.querySelector("[data-product-card-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-product-card-hidden");
    }
})();