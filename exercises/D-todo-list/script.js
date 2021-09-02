function todoList(todos) {
  const divContent = document.getElementById("content");
  const ul = document.createElement("ul");
  divContent.appendChild(ul);

  todos.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = item.todo;
    ul.appendChild(li);

    var lineThrough = function(e){
      if (e.target.style.textDecoration === "line-through") {
            e.target.style.textDecoration = "none";
          } else {
              e.target.style.textDecoration = "line-through";
        }
      };
    
    li.addEventListener("click", lineThrough);
  });
}; 

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);