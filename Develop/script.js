



var todayDate = function() {
    var date = moment().format('LLLL');
    $("#currentDay").text(date);  
};


var auditTimes = function() {
    var currentHour = moment().hour();
    
    
}

todayDate();

setInterval(todayDate, 1000*60);