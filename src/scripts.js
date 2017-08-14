'use strict';

const publicWifi = ((window) => {

    //defined variables
    const   toggleTC = $('.entry-content a'),
            toggleTCDiv = $('.overflow'),
            emailSignUpField = $('.email-signup'),
            accept = $('#accept'),
            newsletterField = $('#newsletter'),
            acceptCheckboxError = $('#accept-error');

    //let $this = $(this);

    /*
     * This is to show and hide the terms and conditions
    */
    const toggleTCfunc = () => {
        toggleTC.on('click', (e) => {
            e.preventDefault();
            toggleTCDiv.toggleClass('hide');
        });
    };

    /*
     * This is to check show and hide the email field if checked.
    */
    const newsLetter = () => {
        newsletterField.on('change', () => {
            const $this = $(this);
            if($this[0].checked){
                emailSignUpField.removeClass( "hide" );
            } else {
                emailSignUpField.addClass( "hide" );
            }
        });
    };

    /*
     * This is to remove the required attribute as we only want to use this if there is no JS.
    */
    const removeRequired = () => { accept.removeAttr('required'); };


    /*
     * Check's if the Accept checkbox is checked and hide's the error message.
    */
    const onClick = () => {
        accept.on("click", () => {
            if($this[0].checked){
                $('#accept-error').addClass('hide');
            }
        });
    };


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

    /*
     * explicitly return methods when instantiated
    */
    return {
        required : removeRequired,
        toggleTermsAndConditions : toggleTCfunc,
        revealNewsletterField : newsLetter,
        hideError : onClick
    };

})(window);

publicWifi.required();
publicWifi.toggleTermsAndConditions();
publicWifi.revealNewsletterField();
publicWifi.hideError();