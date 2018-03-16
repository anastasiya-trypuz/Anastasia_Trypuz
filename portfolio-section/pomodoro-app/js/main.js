'use strict';

$(document).ready(function() {
    
    var count = parseInt($('#session-num').html());
    var timeBreak = parseInt($('#break-num').html());

    $('#minus-min-session').click(function() {
        if (count > 5) {
            count -= 5;
            $('#session-num').html(count);
        }
    });
    
    $('#add-min-session').click(function() {
        count += 5;
        $('#session-num').html(count);
    }); 
    
    $('#minus-min-break').click(function () {
        if (timeBreak > 5) {
            timeBreak -= 5;
            $('#break-num').html(timeBreak);
        }
    });

    $('#add-min-break').click(function () {
        timeBreak += 5;
        $('#break-num').html(timeBreak);
    });
    
    $('#start').click(function() {
        
        count *= 60;
        
        var sessionCounter = setInterval(sessionTimer, 1000);
        
        function sessionTimer(){
            
            $('#start').hide();
            
            $('#timer-title').html('Session Time:');
            count -= 1;
            
            if (count%60 >= 10) {
              $('.timer-count').html(Math.floor(count/60) + ':' + count%60);  
            }
            else {
                $('.timer-count').html(Math.floor(count/60) + ':' + '0' + count%60); 
            }

            if (count === 0) {
                clearInterval(sessionCounter);
                
                timeBreak *= 60;
                var breakCounter = setInterval(breakTimer, 1000);
                
                function breakTimer() {
                    
                    $('#timer-title').html('Break Time:');
                    timeBreak -= 1;
                    
                    if (timeBreak%60 >= 10) {
                        $('.timer-count').html(Math.floor(timeBreak/60) + ':' + timeBreak%60);  
                    }
                    else {
                        $('.timer-count').html(Math.floor(timeBreak/60) + ':' + '0' + timeBreak%60); 
                    }
                    
                    if (timeBreak === 0) {
                        clearInterval(breakCounter);
                        $('#start').show();
                    }
                }
            }
        }
        
        $('#reset').click(function() {
            clearInterval(sessionCounter);

            count = 25;
            timeBreak = 25;
            $('#session-num').html(count);
            $('#break-num').html(timeBreak);

            $('#timer-title').html('Timer:');
            $('.timer-count').html('00:00');
            
            $('#start').show();
        });
    });
});

