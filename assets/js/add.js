let counting = document.querySelector("#couting");
let add = document.querySelector("#add");
let save = document.querySelector("#save");
let number_save = document.querySelector("#number-save");
let reload = document.querySelector("#reload");

add.addEventListener("click", function () {
  counting.innerHTML = +counting.innerHTML + 1;
});
save.addEventListener("click", function () {
  if (counting.innerHTML == 0) {
    alert("add number first");
  } else if (number_save.innerHTML == 0) {
    number_save.innerHTML = counting.innerHTML;
  } else {
    number_save.innerHTML += " , " + counting.innerHTML;
  }
  counting.innerHTML = 0;
});
reload.addEventListener("click", function () {
  counting.innerHTML = 0;
  number_save.innerHTML = "";
});
