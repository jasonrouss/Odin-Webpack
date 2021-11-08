function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  contact.appendChild(createH1("Contact"));

  contact.appendChild(createParagraph("Tel: +1 (555) 555-5555"));
  contact.appendChild(createParagraph("Addresse: New york city,NY"));

  return contact;
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

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
