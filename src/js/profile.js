$(document).ready(function () {

    $('#frontend').click(function(){
        $('#frontend-list').slideToggle();
        $('#backend-list').fadeOut();
        $('#database-list').fadeOut();
        
    })

    $('#backend').click(function(){
        $('#backend-list').slideToggle();
        $('#frontend-list').fadeOut();
        $('#database-list').fadeOut();


    })
    $('#database').click(function(){
        $('#database-list').slideToggle();
        $('#backtend-list').fadeOut();
        $('#frontend-list').fadeOut();

    })

   


});