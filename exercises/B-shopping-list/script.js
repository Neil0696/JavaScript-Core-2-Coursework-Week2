function shoppingList(arrayOfPeople) {

    //access the div tag with an id of "content"
    const divContent = document.getElementById("content"); 
    const ul = document.createElement("ul");
    divContent.appendChild(ul); 

    arrayOfPeople.forEach(item => {
    const li = document.createElement("li");li.textContent += item;
    ul.appendChild(li);
  }
 )
};

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
