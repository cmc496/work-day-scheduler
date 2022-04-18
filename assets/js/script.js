// Display current date
var today = document.getElementById('currentDay');

$(document).ready(function() {
    var currentDay = moment().format('dddd MMMM Do');
    $("#currentDay").text(currentDay);
function timeNow() {
    var now = moment().hours()
    var block = $(".time-block");
    block.each(function() {
        var hour = parseInt($(this).attr("id"))
        if (hour === now) {
            $(this).children(".description").attr("class", "present col-sm-10 description");
        } else if (now > hour) {
            $(this).children(".description").attr("class", "past col-sm-10 description");
        } else {
            $(this).children(".description").attr("class", "future col-sm-10 description");
        }
    })
};
timeNow();
});