'use strict';

const publicWifi = ((window) => {

    //defined variables
    const   toggleTC = $('.entry-content a'),
            toggleTCDiv = $('#tAndC'),
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
                acceptCheckbox.removeAttr('class');
            }
        });
    };


    /*
     * Custom validations for checkbox
    */
    const submitForm = () => {
        $('#connect').on('click', (e) => {
            if ( acceptCheckbox.is(':checked') && newsletterCheckbox.is(':checked')){
                document.getElementById('acceptForm').submit();
                document.getElementById("marketingForm").submit();
            } else if ( acceptCheckbox.is(':checked')) {
                document.getElementById("acceptForm").submit();
            } else {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                e.preventDefault();
            }
        });
    };

    /*
    * initialize all functions
    */
    const init = () => {
        removeRequired();
        toggleTCfunc();
        newsLetter();
        onClick();
        submitForm();
    };
    init();

    /*
     * explicitly return methods when instantiated
    */
    return {
        init : init
    };

})(window);