'use strict';

const publicWifi = ((window) => {

    //defined variables
    const   toggleTC = $('.entry-content a'),
            toggleTCDiv = $('#tAndC'),
            emailSignUpFieldContainer = $('#emailSignUpContainer'),
            emailError = $('#emailError'),
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
                emailSignUpFieldContainer.removeClass( "hide" );
            } else {
                emailSignUpFieldContainer.addClass( "hide" );
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
     * Email validation function
    */
    const emailValidation = () => {
        let email = document.forms["marketingForm"]["email-signup"].value;
        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos<atpos + 2 || dotpos + 2 >= email.length) {
            emailError.removeClass('hide');
        } else {
            emailError.addClass('hide');
        }
    };


    /*
     * Checks for email on change
    */
    let onChangeValidateEmail = () => { $('#email-signup').on( 'change', function () { emailValidation(); }); };


    /*
     * Submit the forms
    */
    const submitForm = () => {
        $('#connect').on('click', (e) => {
            if ( acceptCheckbox[0].checked && newsletterCheckbox[0].checked){
                document.getElementById('acceptForm').submit();
                document.getElementById("marketingForm").submit();
            } else if ( acceptCheckbox.is(':checked')) {
                document.getElementById("acceptForm").submit();
            } else if ( newsletterCheckbox.is(':checked') && $('#email-signup').val() === '' && !acceptCheckbox[0].checked ){
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                emailValidation();
            }else {
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
        onChangeValidateEmail();
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