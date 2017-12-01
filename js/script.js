var link = document.querySelector(".button-feedback");

var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var overlay = document.querySelector(".modal-wrapper");

var form = popup.querySelector(".modal-feedback-form");
var fname = popup.querySelector("[name=feedbackname]");
var fmail = popup.querySelector("[name=feedbackmail]");

// var storagename = localStorage.getItem("fname");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.add("modal-show");
    popup.classList.add("modal-show");
    fname.focus();       
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
    if (!fname.value || !fmail.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
        if (!fname.value) {
            fname.focus();       
        } else {
            fmail.focus();
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            overlay.classList.remove("modal-show");
        }
    }
  });

overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-show");
});
