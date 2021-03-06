﻿var link = document.querySelector(".button-feedback");
var loglink = document.querySelector(".button-login");

var logup = document.querySelector(".modal-login");
var popup = document.querySelector(".modal-feedback");
if (document.querySelector(".modal-feedback")) {
    var buttonclose = popup.querySelector(".modal-close");
}
var overlay = document.querySelector(".modal-wrapper");

if (popup) {
    var form = popup.querySelector(".modal-feedback-form");
    var fname = popup.querySelector("[name=feedbackname]");
    var fmail = popup.querySelector("[name=feedbackmail]");
}

var logform = logup.querySelector(".modal-login-form");
var lname = logup.querySelector("#modal-login-field");
var lpas = logup.querySelector("#modal-password-field");

var filterarea = document.querySelector(".filter");
var sliderarea = document.querySelector(".promo-slider");

if (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        overlay.classList.add("modal-show-back");
        popup.classList.add("modal-show");
        fname.focus();
    });
}

if (buttonclose) {
    buttonclose.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-show-back");
    });
}

if (form) {
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
}

logform.addEventListener("submit", function (evt) {
    if (!lname.value || !lpas.value) {
        evt.preventDefault();
        logup.classList.remove("modal-error");
        logup.offsetWidth = logup.offsetWidth;
        logup.classList.add("modal-error");
        if (!lname.value) {
            lname.focus();
        } else {
            lmail.focus();
        }
    }
});

loglink.addEventListener("mouseover", function (evt) {
    logup.classList.remove("modal-error");
});

if (popup) {
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
                popup.classList.remove("modal-show");
                popup.classList.remove("modal-error");
                overlay.classList.remove("modal-show-back");
            }
        }
    });
}

if (overlay) {
    overlay.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-show-back");
    });
}

if (filterarea) {
    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 32) {
            if (document.activeElement.classList.contains("filter-label")) {
                evt.preventDefault();
                document.activeElement.click();
            }
        }
  });
}

if (sliderarea) {
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 32) {
      if (document.activeElement.classList.contains("button-slide")) {
        evt.preventDefault();
        document.activeElement.click();
      }
    }
  });
}

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 13) {
      if (document.activeElement.classList.contains("button")) {
        evt.preventDefault();
        document.activeElement.click();
      }
    }
  });
