// Display current date
var today = document.getElementById('currentDay');
var save = $(".saveBtn");

$(document).ready(function() {
    var currentDay = moment().format('dddd MMMM Do');
    $("#currentDay").text(currentDay);
function timeNow() {
    var now = moment().hours()
    var block = $(".time-block");
    block.each(function() {
        var hour = parseInt($(this).attr("id"))
        if (hour === now) {
            $(this).children(".col-sm-10").attr("class", "present col-sm-10 description")
        } else if (now > hour) {
            $(this).children(".col-sm-10").attr("class", "past col-sm-10 description")
        } else {
            $(this).children(".col-sm-10").attr("class", "future col-sm-10 description")
        }
    })
};
timeNow();

save.on("click", function(event) {
    event.preventDefault();
    var description = $(this).siblings(".col-sm-10").val().replace(/[""]+/g, "");
    var parent = $(this).parent().attr("id");

    localStorage.setItem(parent, JSON.stringify(description))
})

$("#9 textarea").val(localStorage.getItem("9").replace(/[""]+/g, ""));
$("#10 textarea").val(localStorage.getItem("10").replace(/[""]+/g, ""));
$("#11 textarea").val(localStorage.getItem("11").replace(/[""]+/g, ""));
$("#12 textarea").val(localStorage.getItem("12").replace(/[""]+/g, ""));
$("#13 textarea").val(localStorage.getItem("13").replace(/[""]+/g, ""));
$("#14 textarea").val(localStorage.getItem("14").replace(/[""]+/g, ""));
$("#15 textarea").val(localStorage.getItem("15").replace(/[""]+/g, ""));
$("#16 textarea").val(localStorage.getItem("16").replace(/[""]+/g, ""));
$("#17 textarea").val(localStorage.getItem("17").replace(/[""]+/g, ""));

});