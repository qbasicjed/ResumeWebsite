//this is modified from code on the w3schools website under accordion menus
//https://www.w3schools.com/howto/howto_js_accordion.asp

//there is a array-like structure that holds all the elements of this class
var acc = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < acc.length; i++) {
  //the array-like structure can be accessed in a similar manner to an array.
  //call the function on the current element when it is clicked.
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    //toggle display type to show or hide the content
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}