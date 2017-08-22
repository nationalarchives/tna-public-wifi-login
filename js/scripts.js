'use strict';

var publicWifi = function (window) {

    //defined variables
    var toggleTC = $('.entry-content a'),
        toggleTCDiv = $('#tAndC'),
        emailSignUpFieldContainer = $('#emailSignUpContainer'),
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
    };

    /*
     * Email validation function
    */
    var emailValidation = function emailValidation() {
        var email = document.forms["marketingForm"]["email-signup"].value;
        var atpos = email.indexOf("@");
        var dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
            emailError.removeClass('hide');
        } else {
            emailError.addClass('hide');
        }
    };

    /*
     * Checks for email on change
    */
    var onChangeValidateEmail = function onChangeValidateEmail() {
        $('#email-signup').on('change', function () {
            emailValidation();
        });
    };

    /*
     * Submit the forms
    */
    var submitForm = function submitForm() {
        $('#connect').on('click', function (e) {
            if (acceptCheckbox[0].checked && newsletterCheckbox[0].checked) {
                document.getElementById('acceptForm').submit();
                document.getElementById("marketingForm").submit();
            } else if (acceptCheckbox.is(':checked')) {
                document.getElementById("acceptForm").submit();
            } else if (newsletterCheckbox.is(':checked') && $('#email-signup').val() === '' && !acceptCheckbox[0].checked) {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                emailValidation();
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
    var init = function init() {
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
        init: init
    };
}(window);
//# sourceMappingURL=scripts.js.map
