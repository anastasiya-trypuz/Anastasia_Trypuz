'use strict';

$(document).ready(function() {
    
    var count = parseInt($('#session-num').html());
    var breakTime = parseInt($('#break-num').html());

    $('#minus5Session').click(function() {
        if (count > 5) {
            count -= 5;
            $('#session-num').html(count);
        }
    });
    
    $('#add5Session').click(function() {
        count += 5;
        $('#session-num').html(count);
    }); 
    
    $('#minus5Break').click(function () {
        if (breakTime > 5) {
            breakTime -= 5;
            $('#break-num').html(breakTime);
        }
    });

    $('#add5Break').click(function () {
        breakTime += 5;
        $('#break-num').html(breakTime);
    });
    
    $('#start').click(function() {
        
        count *= 60;
        
        var counter = setInterval(timer, 1000);
        
        function timer(){

            $('#timer-title').html('Session Time:');
            count -= 1;
            
            if (count%60 >= 10) {
              $('.timer-count').html(Math.floor(count/60) + ':' + count%60);  
            }
            else {
                $('.timer-count').html(Math.floor(count/60) + ':' + '0' + count%60); 
            }

            if (count === 0) {
                clearInterval(counter);
                breakTime *= 60;
                var startBreak = setInterval(breakTimer, 1000);
                
                function breakTimer() {
                    
                    $('#timer-title').html('Break Time:');
                    breakTime -= 1;
                    
                    if (breakTime%60 >= 10) {
                        $('.timer-count').html(Math.floor(breakTime/60) + ':' + breakTime%60);  
                    }
                    else {
                        $('.timer-count').html(Math.floor(breakTime/60) + ':' + '0' + breakTime%60); 
                    }
                    
                    if (breakTime === 0) {
                        clearInterval(startBreak);
//                        $('#break-num').hide();
                    }
                }
                
                $('#stop').click (function() {
                    clearInterval(startBreak);
                    $('#timer-title').html('Stoped');
                });
                
                $('#reset').click(function() {
                    clearInterval(startBreak);
                    count = 25;
                    breakTime = 25;
                    $('#session-num').html(count);
                    $('#break-num').html(breakTime);

                    $('#timer-title').html('Timer:');
                    $('.timer-count').html('00:00');
                });
            }
        }
        
        $('#stop').click (function() {
            clearInterval(counter);
            $('#timer-title').html('Stoped');
        });
        
        $('#reset').click(function() {
            clearInterval(counter);

            count = 25;
            breakTime = 25;
            $('#session-num').html(count);
            $('#break-num').html(breakTime);

            $('#timer-title').html('Timer:');
            $('.timer-count').html('00:00');
        });
    });
    
    $('#reset').click(function() {

        count = 25;
        breakTime = 25;
        $('#session-num').html(count);
        $('#break-num').html(breakTime);

    });
});

