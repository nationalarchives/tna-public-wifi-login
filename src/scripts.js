'use strict';

const publicWifi = (function(window) {

    //defined variables
    const   toggleTC = $('.entry-content a'),
            toggleTCDiv = $('.overflow'),
            emailSignUpField = $('.email-signup'),
            accept = $('#accept');

    /*
     * This is to show and hide the terms and conditions
    */
    const toggleTCfunc = toggleTC.on('click',function(e){
        e.preventDefault();
        toggleTCDiv.toggleClass('hide');
    });

    /*
     * This is to check show and hide the email field if checked.
    */
    $('#newsletter').on('change', function(){
        if($(this)[0].checked){
            emailSignUpField.removeClass( "hide" );
        } else {
            emailSignUpField.addClass( "hide" );
        }
    });

    /*
     * This is to remove the required attribute as we only want to use this if there is no JS.
    */
    // const removeRequired = function(){
    //   return accept.removeAttr('required');
    // };
    // removeRequired();
    const removeRequired = (() => { accept.removeAttr('required'); })();
    console.log('Hello World 3 times');
    //removeRequired();


    /*
     * Check's if the Accept checkbox is checked and hide's the error message.
    */
    var onClick = (function () {
        accept.on("click", function(){
            if($(this)[0].checked){
                $('#accept-error').addClass('hide');
            }
        });
    })();


    /*
     * Custom validations for checkbox
    */
    $('#accept-checkboxes').on('submit', function(e){
        if( accept[0].checked ){
            return;
        } else {
            $('#accept-error').removeClass('hide');
            accept.addClass('field-error');
            e.preventDefault();
        }
    });
})(window);