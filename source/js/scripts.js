var body = document.querySelector("body");
body.classList.replace("no-js", "js");

var buttonMenu = document.querySelector(".main-nav__toggle");
var nav = document.querySelector(".main-nav--closed");
var userMenu = document.querySelector(".user-menu--closed");

buttonMenu.addEventListener("click", function (evt) {
  evt.preventDefault();
  nav.classList.toggle("main-nav--opened");
  userMenu.classList.toggle("user-menu--opened");
});

var link = document.querySelector(".popular-product__btn");

if (link) {
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal__overlay");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
}

var cardLink = document.querySelector(".card__basket");

if (cardLink) {
  var popup = document.querySelector(".modal");
  var close = popup.querySelector(".modal__overlay");

  cardLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
  });
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal--show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal--show")) {
        popup.classList.remove("modal--show");
      }
    }
  });
}

var form = document.querySelector("form");

if (form) {
  var userName = form.querySelector("[name=user-name]");
  var surname = form.querySelector("[name=user-surname]");
  var number = form.querySelector("[name=number]");
  var email = form.querySelector("[name=email]");
  var buttonSubmit = form.querySelector(".form__btn");
  var errorMessage = form.querySelector(".form__small-note")

  form.addEventListener("submit", function (evt) {
    if (!userName.value || !surname.value || !number.value || !email.value) {
      evt.preventDefault();
      errorMessage.classList.add("form__small-note--error")
      buttonSubmit.classList.remove("form__btn--error");
      buttonSubmit.offsetWidth = buttonSubmit.offsetWidth;
      buttonSubmit.classList.add("form__btn--error");
    }
  });
}
