// Display current date
var today = document.getElementById('currentDay');
currentDay = moment().format('dddd, MMMM Do');
today.textContent = currentDay;

// color-coding
var row = document.querySelector('.row');
var time = moment().format('h A');

// var hourDisplayed = document.getElementById('hourZero');
// for (i=0; i < (hourDisplayed.length); i++){
//     if (hourDisplayed[i].innerHTML < time) {
//         row.setAttribute("class", "row col-9 past");
//         console.log(hourDisplayed[i].innerHTML)
//     }
// }

var hourDisplayed = document.getElementById('hourZero').textContent;
console.log(hourDisplayed);
if (hourDisplayed < time) {
    row.setAttribute("class", "row col-9 past");
}