const closeBtn = document.querySelector("#alert-close-btn");
const alertExample = document.querySelector("#alert-close-box");

closeBtn.addEventListener("click", () => {
    alertExample.style.display = "none";
})
