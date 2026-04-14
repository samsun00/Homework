const book = document.querySelector("#book");
const bookControls = book.querySelector(".book__controls");
const fontSizeButtons = bookControls.querySelectorAll("a");

function clearActivClass() {
  fontSizeButtons.forEach((fontSizeButton) => {
    fontSizeButton.classList.remove("font-size_active");
  });

  book.classList.remove("book_fs-big", "book_fs-small");
}

fontSizeButtons.forEach((fontSizeButton) => {
  fontSizeButton.addEventListener("click", (event) => {
    event.preventDefault();

    clearActivClass();
    fontSizeButton.classList.add("font-size_active");

    switch (fontSizeButton.getAttribute("data-size")) {
      case "small":
        book.classList.add("book_fs-small");
        break;
      case "big":
        book.classList.add("book_fs-big");
        break;
    }
  });
});
