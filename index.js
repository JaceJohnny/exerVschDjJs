// Color controls

var boxBtn = document.getElementById("box")
var button = document.getElementById("button")

boxBtn.addEventListener("mouseenter", function() {
    document.body.style.backgroundColor = "blue"
})

boxBtn.addEventListener("mousedown", function() {
    document.body.style.backgroundColor = "red"
})

boxBtn.addEventListener("mouseup", function() {
    document.body.style.backgroundColor = "yellow"
})

boxBtn.addEventListener("dblclick", function() {
    document.body.style.backgroundColor = "green"
})

boxBtn.addEventListener("scroll", function() {
    document.body.style.backgroundColor = "orange"
})

/*The square's color will change as follows:

Blue when the mouse hovers over the square
Red when the mouse button is held down over the square
Yellow when the mouse button is let go over the square
Green when the mouse is double clicked in the square
Orange when the mouse scroll is used somewhere in the window (not just over the square).*/

/*You should also be able to press the first letter of the colors 
(typing "r" on the keyboard for "red", for example) and have the box change to that color.*/

document.addEventListener('keydown', function (event) {
    if (event.key === 'r') {
      document.body.style = "background-color: red";
    }
    if (event.key === 'g') {
      document.body.style = "background-color: green";
    }
    if (event.key === 'b') {
      document.body.style = "background-color: blue";
    }
    if (event.key === 'o') {
      document.body.style = "background-color: orange";
    }
    if (event.key === 'y') {
      document.body.style = "background-color: yellow";
    }  
  });