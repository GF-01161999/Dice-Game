//cycle over the list items and apply colors from the array called colours
const colours = ['red', 'yellow', 'goldenrod', 'lightgreen', 'blue', 'purple'];
const listItems = document.querySelectorAll("li");

console.log(listItems);

for(let i = 0; i < listItems.length; i++){
    listItems[i].style.color = colours[i]
}

