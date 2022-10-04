/*

Final Project
Authors:  Matthew Reda(1778288) & Seena Sabet-Kassouf(1160693)
Date:   August 12 2022

*/

/*---------------------- F.A.Q - ACCORDION ----------------------*/
// J-Query Accordion feature for the F.A.Q section of the about.html page
$(function () {
  $("#accordion").accordion({
    collapsible: true
  });
});

/*---------------------- TIMELINE - FADEIN ----------------------*/
// Adding J-Query fadeIn function to each button in Timeline section of about.html page
$(function () {
  $("#button-1").click(() => {
    $("#para-1").fadeIn(1000);
  });
});

$(function () {
  $("#button-2").click(() => {
    $("#para-2").fadeIn(1000);
  });
});

$(function () {
  $("#button-3").click(() => {
    $("#para-3").fadeIn(1000);
  });
});

$(function () {
  $("#button-4").click(() => {
    $("#para-4").fadeIn(1000);
  });
});

/*---------------------- TIMELINE - PROGRESS BAR ----------------------*/
// adding an eventlistener to each button of the timeline section of the about.html
// objective is to change the value of the progress bar
$(function () {
  document.getElementById('button-1').addEventListener('click', updateProgBar1);
  document.getElementById('button-2').addEventListener('click', updateProgBar2);
  document.getElementById('button-3').addEventListener('click', updateProgBar3);
  document.getElementById('button-4').addEventListener('click', updateProgBar4);
});

function updateProgBar1() {
  document.getElementById('prog-bar').value = 25;
}
function updateProgBar2() {
  document.getElementById('prog-bar').value = 50;
}
function updateProgBar3() {
  document.getElementById('prog-bar').value = 75;
}
function updateProgBar4() {
  document.getElementById('prog-bar').value = 100;
}


/*---------------------- FEEDBACK FORM - CREATEELEMENT ----------------------*/
// declaring a global variable for feedback divId
var divId = 1000;

// function to create Div Element in Feedback Form 
function createFeedbackDiv() {
  divId++;
  // storing the form input values in the following variables:
  let teamMember = document.getElementById('team-member-input');
  let pageSelected = document.getElementById('page-selected');
  let changesMade = document.getElementById('changes-made');

  // creating an array of all three stored values
  const feedbackResponses = ["Team Member: " +
    teamMember.value, "Page Worked On: " + pageSelected.value, "Changes: " + changesMade.value
  ];

  // creating a variable for the inner div that will display all the array values
  let innerDiv = document.createElement('div');
  // setting an id for the newly created div
  innerDiv.setAttribute('id', divId);
  innerDiv.setAttribute('class', 'field');

  // for loop to display the array values in the inner div 
  for (let feedbackIndex = 0; feedbackIndex < feedbackResponses.length; feedbackIndex++) {
    innerDiv.innerHTML = innerDiv.innerHTML + feedbackResponses[feedbackIndex] + '<br>'; //<br> for seperate lines
  }

  //logging the time in the innerDiv
  let feedbackDate = new Date();
  let thisDay = feedbackDate.getDate();
  let thisMonth = feedbackDate.getMonth();
  let thisYear = feedbackDate.getFullYear();
  let thisHour = feedbackDate.getHours();
  let thisMinute = feedbackDate.getMinutes();
  let thisSecond = feedbackDate.getSeconds();
  currentTime = `Changes logged on ${thisDay}/${thisMonth}/${thisYear} @ ${thisHour}:${thisMinute}:${thisSecond}`;

  function deleteInnerDiv() {
    this.remove();
  }
  
  // adding other element tags to the inner div
  innerDiv.innerHTML = '<button id="minus-button" type"button"><i class="fa-solid fa-minus"></i></button> ' + innerDiv.innerHTML + currentTime;
  innerDiv.addEventListener('click', deleteInnerDiv);
  
  // creating a variable for the outer div with ID #changes-interface
  let outerDiv = document.getElementById('changes-interface');

  // adding innerDiv to outerDiv
  outerDiv.appendChild(innerDiv);

  // function to delete the inner div when minus button is clicked
  
 


}
