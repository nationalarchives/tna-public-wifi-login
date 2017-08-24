'use strict';

const publicWifi = (() => {

    //defined variables
    const toggleTC = $('.entry-content a'),
        toggleTCDiv = $('#tAndC'),
        emailSignUpFieldContainer = $('#emailSignUpContainer'),
        emailField = $('#emailSignUp'),
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
            if (newsletterCheckbox[0].checked) {
                emailSignUpFieldContainer.removeClass("hide");
            } else {
                emailSignUpFieldContainer.addClass("hide");
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
            if (acceptCheckbox[0].checked) {
                acceptCheckboxError.addClass('hide');
                acceptCheckbox.removeAttr('class');
            }
        });
    };


    /*
     * Checks for email on change
    */
    let onChangeValidateEmail = () => { emailField.on('change', function () { emailValidation(); }); };



    /*
     * Email validation function
    */
    const emailValidation = () => {
        let email = document.forms["marketingForm"]["email-signup"].value,
            atPos = email.indexOf("@"),
            dotPos = email.lastIndexOf("."),
            spaceCount = (email.split(" ").length - 1);
        if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length || spaceCount > 0) {
            emailError.removeClass('hide');
        } else {
            emailError.addClass('hide');
        }
    };

    let addRequireEmail = function() {
        newsletterCheckbox.on('click', function() {
            if ( $(this)[0].checked ) {
                emailField.attr('required','required');
                console.log('Required added');
            }
        });
    };


    /*
    * Form submit.
    */
    let submitForm = () => {
        $('#connect').on('click', () => {
            if ( acceptCheckbox[0].checked && newsletterCheckbox[0].checked && !emailError.hasClass('hide') ) {
                console.log('All is checked but there is an error in the email field, so the form will not be submitted');
                emailValidation();
                return false;
            }
            if ( acceptCheckbox[0].checked && newsletterCheckbox[0].checked && emailField.val().length > 1 && emailError.hasClass('hide')) {
                console.log('All is valid, and both forms submitted');
            }
            if ( acceptCheckbox[0].checked && !newsletterCheckbox[0].checked ) {
                console.log( 'Only accept form submitted' );
            }
            if ( !acceptCheckbox[0].checked ) {
                console.log( 'Form will not be submitted' );
                acceptCheckboxError.removeClass('hide');
            }
            if ( newsletterCheckbox[0].checked && !acceptCheckbox[0].checked ) {
                emailValidation();
            }
            if ( !emailError.hasClass('hide') ) {
                console.log( 'There is an error in the email field' );
                return false;
            }
        });
    };


    /*
    * initialize all functions
    */
    const init = () => {
        removeRequired();
        toggleTCfunc();
        addRequireEmail();
        onChangeValidateEmail();
        newsLetter();
        onClick();
        submitForm();
    };
    init();

})();