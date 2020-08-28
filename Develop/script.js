//sets the current date in the jumbo tron
var todayDate = function() {
    var date = moment().format('LLLL');
    $("#currentDay").text(date);  
};

//checks to see if time slots have passed/are current/or in the future
var auditTimes = function() {
    var currentHour = moment().hour();
    $('.time-block').each(function(){
        var hour = parseInt($(this).attr('id'));

        if (hour < currentHour){
            $(this).find('.task-area').addClass('past')
        } else if (hour == currentHour) {
            $(this).find('.task-area').removeClass('past')
            $(this).find('.task-area').addClass('present')
        } else if (hour > currentHour) {
            $(this).find('.task-area').removeClass('present')
            $(this).find('.task-area').addClass('future')
        }
    })
}

//save
$('.container .locked').on('click', function() {
    //gets id of button
    var btnId = $(this).attr('id')
    console.log(btnId)

    //gets text area of button pressed
    var txtContent = $('#txt-' + btnId).val().trim()
    console.log(txtContent)

    

    localStorage.setItem(btnId, txtContent)
    

});

var loadTasks = function() {

}



//updates time when the page loads then every 60 seconds
todayDate();
setInterval(todayDate, 1000*60);

//Audits t
auditTimes();
setInterval(auditTimes, 1000*60);



