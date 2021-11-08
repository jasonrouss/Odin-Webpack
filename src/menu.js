function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.appendChild(createH1("Menu"));

  menu.appendChild(createParagraph("Hummus 3$"));
  menu.appendChild(createParagraph("Fattouch 4$"));

  menu.appendChild(createParagraph("Shawarma Djeij 8$"));

  menu.appendChild(createParagraph("Shawarma Lahme 10$"));

  return menu;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.classList.add("textMeC");
  return paragraph;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  h1.classList.add("titleMeC");
  return h1;
}
function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
