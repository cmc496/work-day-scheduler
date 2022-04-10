// Display current date
var today = document.querySelector('#currentDay');
currentDay = moment().format('dddd, MMMM Do');
today.textContent = currentDay;

