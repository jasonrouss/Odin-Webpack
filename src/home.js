function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const toomImage = document.createElement("img");
  toomImage.src = "img/toom.jpeg";
  toomImage.alt = "Toom";
  toomImage.classList.add("image");

  home.appendChild(createH1("Our toom is the best in town"));
  home.appendChild(toomImage);
  home.appendChild(createParagraph("Come and try u"));
  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  paragraph.classList.add("text");
  return paragraph;
}

function createH1(text) {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  h1.classList.add("titleM");
  return h1;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
