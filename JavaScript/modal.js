const simpleModal = document.querySelector(".model-demo-wrapper");
const modelDemoBtn = document.querySelector(".modal-demo-btn");
const modalBtns = document.querySelectorAll(".modal-action");
const body = document.querySelector("body");

modelDemoBtn.addEventListener("click", () => {
    simpleModal.style.display = "flex";
    body.style.overflow = 'hidden';
});

modalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.parentNode.id === "modal-buttons") {
            simpleModal.style.display = "none";
            body.style.overflow = 'auto';
        }
    });
});

window.addEventListener("click", event => {
    if (event.target === simpleModal) {
        simpleModal.style.display = "none";
        body.style.overflow = 'auto';
    } 
});