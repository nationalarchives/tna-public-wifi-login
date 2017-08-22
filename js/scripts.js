'use strict';

var publicWifi = function (window) {

    //defined variables
    var toggleTC = $('.entry-content a'),
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
    var toggleTCfunc = function toggleTCfunc() {
        toggleTC.on('click', function (e) {
            e.preventDefault();
            toggleTCDiv.toggleClass('hide');
        });
    };

    /*
     * This is to show and hide the email field if checked.
    */
    var newsLetter = function newsLetter() {
        newsletterCheckbox.on('change', function () {
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
    var removeRequired = function removeRequired() {
        acceptCheckbox.removeAttr('required');
    };

    /*
     * Check's if the Accept checkbox is checked and hide's the error message.
    */
    var onClick = function onClick() {
        acceptCheckbox.on("click", function () {
            if (acceptCheckbox[0].checked) {
                acceptCheckboxError.addClass('hide');
                acceptCheckbox.removeAttr('class');
            }
        });
        newsletterCheckbox.on("click", function () {
            if (!newsletterCheckbox[0].checked) {
                emailError.addClass('hide');
            }
        });
    };

    /*
     * Email validation function
    */
    var emailValidation = function emailValidation() {
        var email = document.forms["marketingForm"]["email-signup"].value,
            atPos = email.indexOf("@"),
            dotPos = email.lastIndexOf("."),
            spaceCount = email.split(" ").length - 1;
        if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length || spaceCount > 0) {
            emailError.removeClass('hide');
        } else {
            emailError.addClass('hide');
        }
    };

    /*
     * Checks for email on change
    */
    var onChangeValidateEmail = function onChangeValidateEmail() {
        emailField.on('change', function () {
            emailValidation();
        });
    };

    /*
     * Submit the forms
    */
    // const submitForm = () => {
    //     $('#connect').on('click', (e) => {
    //         if ( acceptCheckbox[0].checked ){
    //             document.getElementById('acceptForm').submit();
    //             if ( newsletterCheckbox[0].checked  ) {
    //                 document.getElementById("marketingForm").submit();
    //             }
    //         } else if ( acceptCheckbox.is(':checked')) {
    //             document.getElementById("acceptForm").submit();
    //         } else if ( newsletterCheckbox.is(':checked') && emailField.val() === '' && !acceptCheckbox[0].checked ){
    //             acceptCheckboxError.removeClass('hide');
    //             acceptCheckbox.addClass('field-error');
    //             emailValidation();
    //         }else if ( acceptCheckbox[0].checked && newsletterCheckbox[0].checked && emailField.val() === '' ) {
    //             e.preventDefault();
    //             emailValidation();
    //         }else {
    //             acceptCheckboxError.removeClass('hide');
    //             acceptCheckbox.addClass('field-error');
    //             e.preventDefault();
    //         }
    //     });
    // };

    /*
    * Function that submits both forms.
    */
    var submitBothForms = function submitBothForms() {
        $('form').each(function () {
            $(undefined).submit();
        });
    };

    var submitForm = function submitForm() {
        $('#connect').on('click', function (e) {
            if (!acceptCheckbox[0].checked && newsletterCheckbox[0].checked && emailField.val().length > 1) {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                emailValidation();
                e.preventDefault();
                console.log('Found you again');
            } else if (acceptCheckbox[0].checked && !newsletterCheckbox[0].checked) {
                document.getElementById('acceptForm').submit();
            } else if (acceptCheckbox[0].checked && newsletterCheckbox[0].checked && $('#emailSignUp').val().length === 0) {
                return false;
            } else {
                acceptCheckboxError.removeClass('hide');
            }
        });
    };

    /*
    * initialize all functions
    */
    var init = function init() {
        removeRequired();
        toggleTCfunc();
        onChangeValidateEmail();
        newsLetter();
        onClick();
        submitForm();
    };
    init();
}(window);
//# sourceMappingURL=scripts.js.map
