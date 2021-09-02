function readingList(books) {
  // Write your code here...
  const divContent = document.getElementById("content");
    const ul = document.createElement("ul");
    divContent.appendChild(ul);

  books.forEach(item => {
    const li = document.createElement("li");
    ul.appendChild(li);
    const p = document.createElement("p");
    p.innerHTML = ` ${item.title} by ${item.author}`;
    li.appendChild(p);
  })
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);