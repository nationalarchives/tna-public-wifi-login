$(function() {
    $('.entry-content a').on('click',function(e){
        e.preventDefault();
        $('.overflow').toggleClass('hide');
    });

    $('#accept').on('change',function(){
        if($(this).is(':checked')){
            $('#connect').prop('disabled', false);
            $('#connect').attr('aria-disabled', false);
        } else {
            $('#connect').prop('disabled', true);
            $('#connect').attr('aria-disabled', true);
        }
    });

    $('#newsletter').on('change', function(){
       if($(this).is(':checked')){
           $('.email-signup').removeClass( "hide" );
       } else {
           $('.email-signup').addClass( "hide" );
       }
    });
});