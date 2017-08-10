$(function() {
    /*
     * This is to show and hide the terms and conditions
    */
    $('.entry-content a').on('click',function(e){
        e.preventDefault();
        $('.overflow').toggleClass('hide');
    });

    /*
     * This is to check show and hide the email field if checked.
    */
    $('#newsletter').on('change', function(){
       if($(this).is(':checked')){
           $('.email-signup').removeClass( "hide" );
       } else {
           $('.email-signup').addClass( "hide" );
       }
    });

    /*
     * This is to remove the required attribute as we only want to use this if there is no JS.
    */
    $('#accept').removeAttr('required');

    /*
     * Custom validations for checkbox
    */
    $('#accept-checkboxes').on('submit', function(e){
        if( $('#accept').is(':checked') ){
            return;
        } else {
            $('#accept-error').removeClass('hide');
            $('#accept').addClass('field-error');
            e.preventDefault();
        }
    });

});