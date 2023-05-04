// I need to make sure the code isnt running until after
// the browser is fully loaded and to do so I will need to make sure the 
// code is wrapped with the DOM that calls the Jquery
const localeSettings = {};
dayjs.locale(localeSettings);

// Code to be executed once DOM is loaded
$(function() {

    //Dayjs has current hour of the day
    const currentHour = dayjs().format('H');
    
    // The colors for past present and future to be changed
    // once the current hour changes
    function hourlyColor() {
        $('.time-block').each(function() {
            const blockHour = parseInt(this.id);
            $(this).toggleClass('past', blockHour < currentHour);
            $(this).toggleClass('present', blockHour === currentHour);
            $(this).toggleClass('future', blockHour > currentHour);
        });
    }

    // Upon clicking the save btn the users text input will be saved to the local storage
function textEntry() {
    $('.Btn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
    });
}

// Based on the code the code for each time will refresh
// Past = Grey
// Present = Red
// Future = Green
function refreshColor() {
    $('.time-block').each(function() {
        const blockHour = parseInt (this.id);
    if (blockHour == currentHour) {
        $(this).removeClass('past, future').addClass('present');
    }else if (blockHour < currentHour) {
        $(this).removeClass('future, present').addClass ('past');
    }else {
        $(this).removeClass('past, present').addClass('future');
    }
    });
}

// I want my users input to be recieved from local Storage
$('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
});

// Displays current date and time *
function updateTime() {
    const dateElement = $('#date');
    const timeElement = $('#time');
    const currentDate = dayjs().format('dddd, MMMM D, YYYY');
//Needed to add lowercase to mm and ss because based in dayjs 
// uppercase MM is for the current date
// lowercase mm and ss is for the current minutes and seconds   
    const currentTime = dayjs().format('hh:mm:ss A');
    dateElement.text(currentDate);
    timeElement.text(currentTime);
}

// Calling time, text and refresh
hourlyColor();
textEntry();
refreshColor();

// By using set interval() the time will update once per second
setInterval(updateTime, 1000);
}); 
