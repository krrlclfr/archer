$(document).ready(function () {

    $('#frontend').click(function(){
        $('#frontend-list').slideToggle();
        $('#frameworks-list').fadeOut();
        $('#mobile-list').fadeOut();
        $('#backend-list').fadeOut();
        $('#database-list').fadeOut();
        
        
    })
    $('#frameworks').click(function(){
        $('#frameworks-list').slideToggle();
        $('#frontend-list').fadeOut();
        $('#mobile-list').fadeOut();
        $('#backend-list').fadeOut();
        $('#database-list').fadeOut();
    })
    $('#mobile-app').click(function(){
        $('#mobile-list').slideToggle();
        $('#frontend-list').fadeOut();
        $('#frameworks-list').fadeOut();
        $('#backend-list').fadeOut();
        $('#database-list').fadeOut();
    })

    $('#backend').click(function(){
        $('#backend-list').slideToggle();
        $('#frameworks').fadeOut();
        $('#mobile-list').fadeOut();
        $('#frontend-list').fadeOut();
        $('#database-list').fadeOut();


    })
    $('#database').click(function(){
        $('#database-list').slideToggle();
        $('#frameworks-list').fadeOut();
        $('#mobile-list').fadeOut();
        $('#backend-list').fadeOut();
        $('#frontend-list').fadeOut();

    })

   


});