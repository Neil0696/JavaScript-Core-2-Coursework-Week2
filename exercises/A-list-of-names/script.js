function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(person => {
    
    //creating h1 tag
    const h1 = document.createElement('h1');
    h1.innerHTML = person.name;
    content.appendChild(h1);

    //creating h2 tag
    const h2 = document.createElement('h2');h2.innerHTML = person.job;
    content.appendChild(h2);
  });
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
