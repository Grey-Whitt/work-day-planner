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
    var nineContent =  localStorage.getItem('09')
    var tenContent =  localStorage.getItem('010')
    var elevenContent =  localStorage.getItem('011')
    var twelveContent =  localStorage.getItem('012')
    var thirteenContent =  localStorage.getItem('013')
    var fourteenContent =  localStorage.getItem('014')
    var fifteenContent =  localStorage.getItem('015')
    var sixteenContent =  localStorage.getItem('016')
    var seventeenContent =  localStorage.getItem('017')


    if (nineContent != null) {
        $('#txt-09').val(nineContent)
    }

    if (tenContent != null) {
        $('#txt-010').val(tenContent)
    }

    if (elevenContent != null) {
        $('#txt-011').val(elevenContent)
    }

    if (twelveContent != null) {
        $('#txt-012').val(twelveContent)
    }

    if (thirteenContent != null) {
        $('#txt-013').val(thirteenContent)
    }

    if (fourteenContent != null) {
        $('#txt-014').val(fourteenContent)
    }

    if (fifteenContent != null) {
        $('#txt-015').val(fifteenContent)
    }

    if (sixteenContent != null) {
        $('#txt-016').val(sixteenContent)
    }

    if (seventeenContent != null) {
        $('#txt-017').val(seventeenContent)
    }

}



//updates time when the page loads then every 60 seconds
todayDate();
setInterval(todayDate, 1000*60);

//Audits t
auditTimes();
setInterval(auditTimes, 1000*60);

loadTasks();



