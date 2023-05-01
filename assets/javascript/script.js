// I need to make sure the code isnt running until after
// the browser is fully loaded and to do so I will need to make sure the 
// code is wrapped with the DOM that calls the Jquery
const localSettings = {}
dayjs.local(localSettings);

// Code to be executed once DOM is loaded
$(function () {

//Dayjs has current hour of the day
const currentHour = dayjs().format('H');

// The colors for past present and future to be changed
// once the current hour changes
function hourlyColor () {
    $('.time-block').each(function() {
        const blockHour = parseInt(this.ID);
        $(this).toggleClass('past', blockHour < currentHour);
        $(this).toggleClass('present', blockHour === currentHour);
        $(this).toggleClass('future', blockHour > currentHour);
    });
}

// Displays current date and time *
function updateTime () {
const dateElement = $('#date');
const dateElement = $('#time');
const currentDate = dayjs().format('DDDD,MMMM,D,YYYY');
const currrentTime = dayjs().format('HH:MM:SS A');
dateElement.text(currentDate);
timeElement.text(currentTime);
}

// Upon clicking the save btn the users text input will be saved to the local storage
function textEntry () {
    $('.savebtn').on('click',function() {
        const key = $(this).parent().after('ID');
        const value = $(this).siblings('.description').val();
        localStorage.setItem (key, value);
    });
}
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
}); 