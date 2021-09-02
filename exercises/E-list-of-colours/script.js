function listOfColours(colours) {

  const divContent = document.getElementById("content");
  
  const select = document.createElement("select");
  divContent.appendChild(select);
  
  const paragraph = document.createElement("p");
  divContent.appendChild(paragraph);

  colours.forEach(item => {
    let optionList = document.createElement("option");
    optionList.innerText = item;
    select.appendChild(optionList);
  });

    select.addEventListener('change', () => {
    paragraph.style.color = select.value;
    paragraph.innerText = `You have selected: ${select.value}`
  });

    //---- another way to execute ------

    // var addColor = function () {
    //   paragraph.innerText = `You have selected: ${select.value}`;
    //   paragraph.style.color = select.value;
    // }

    // select.addEventListener("click", addColor);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
