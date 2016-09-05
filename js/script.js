var link = document.querySelector(".btn_feedback");
var overlay = document.querySelector(".modal_overlay");

var popup = document.querySelector(".modal_content");
var close = popup.querySelector(".modal_content_close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal_content_show");
  overlay.classList.add("modal_content_show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal_content_show");
  overlay.classList.remove("modal_content_show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal_content_show")) {
      popup.classList.remove("modal_content_show");
      overlay.classList.remove("modal_content_show");
    }
  }
});
