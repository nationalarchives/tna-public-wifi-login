'use strict';

const publicWifi = ((window) => {

    //defined variables
    const   toggleTC = $('.entry-content a'),
            toggleTCDiv = $('.overflow'),
            emailSignUpField = $('#emailSignupContainer'),
            acceptCheckbox = $('#acceptCheckbox'),
            newsletterCheckbox = $('#newsletterCheckbox'),
            acceptCheckboxError = $('#accept-error');

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
     * This is to show and hide the email field if checked.
    */
    const newsLetter = () => {
        newsletterCheckbox.on('change', () => {
            if(newsletterCheckbox[0].checked){
                emailSignUpField.removeClass( "hide" );
            } else {
                emailSignUpField.addClass( "hide" );
            }
        });
    };

    /*
     * This is to remove the required attribute as we only want to use this if there is no JS.
    */
    const removeRequired = () => { acceptCheckbox.removeAttr('required'); };


    /*
     * Check's if the Accept checkbox is checked and hide's the error message.
    */
    const onClick = () => {
        acceptCheckbox.on("click", () => {
            if(acceptCheckbox[0].checked){
                acceptCheckboxError.addClass('hide');
            }
        });
    };


    /*
     * Custom validations for checkbox
    */
    const acceptValidate = () => {
        $('#accept-checkboxes').on('submit', function(e){
            if( acceptCheckbox[0].checked ){
                return;
            } else {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.className += ' field-error';
                e.preventDefault();
            }
        });
    };

    /*
     * explicitly return methods when instantiated
    */
    return {
        required : removeRequired,
        toggleTermsAndConditions : toggleTCfunc,
        revealNewsletterField : newsLetter,
        hideError : onClick,
        acceptValidate : acceptValidate
    };

})(window);

publicWifi.required();
publicWifi.toggleTermsAndConditions();
publicWifi.revealNewsletterField();
publicWifi.hideError();
publicWifi.acceptValidate();