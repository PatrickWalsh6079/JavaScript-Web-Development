// LESSON 1 ALTERING HTML ELEMENTS

function lesson1(){
  document.getElementById("demo").innerHTML = "The text has been changed";
}





// LESSON 2 ALTERING HTML CONTENT


function lesson2_earth(){
  document.getElementById("myImage").src = "https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
}
function lesson2_eclipse(){
  document.getElementById("myImage").src = "https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
}


//'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';


// 'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60';







// LESSON 3 HIDE OR SHOW HTML ELEMENTS
  
function lesson3_hide(){
  document.getElementById("demo").style.display = "none";
}
function lesson3_show(){
  document.getElementById("demo").style.display = "block";
}




// LESSON 4 CHANGE FONT SIZE

function lesson4(){
  document.getElementById("demo").style.fontSize = "40px";
}




// LESSON 5 EXECUTE JS CODE WITH addEventListener

// document.getElementById("demo").addEventListener("mousemove",  lesson5);
// function lesson5(){
//   alert("The JavaScript was run!")
// }



// LESSON 6 OPEN NEW WINDOW

// function lesson6(){
//   //stay on same tab
//   window.open("about_us.html");
// }




function learn(){
  window.open("learn_more.html");
}