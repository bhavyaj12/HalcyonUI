const toastCloseBtn = document.querySelector("#toast-close-action");
const toastWrapper = document.querySelector(".toast-demo");
const toastDemoBtn = document.querySelector(".toast-live-demo");

toastCloseBtn.addEventListener("click", () => {
    toastCloseBtn.parentElement.parentElement.style.display = "none";
})

toastDemoBtn.addEventListener("click", () => {
    toastWrapper.style.display = "flex";
    setTimeout(() => {
        toastWrapper.style.display = "none";
    }, 3500);
});