'use strict';

var publicWifi = function () {

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

    var addRequireEmail = function addRequireEmail() {
        newsletterCheckbox.on('click', function () {
            if ($(this)[0].checked) {
                emailField.attr('required', 'required');
                console.log('Required added');
            }
        });
    };

    /*
    * Form submit.
    */
    var submitForm = function submitForm() {
        $('#connect').on('click', function () {
            if (acceptCheckbox[0].checked && newsletterCheckbox[0].checked && !emailError.hasClass('hide')) {
                console.log('All is checked but there is an error in the email field, so the form will not be submitted');
                emailValidation();
                return false;
            }
            if (acceptCheckbox[0].checked && newsletterCheckbox[0].checked && emailField.val().length > 1 && emailError.hasClass('hide')) {
                console.log('All is valid, and both forms submitted');
            }
            if (acceptCheckbox[0].checked && !newsletterCheckbox[0].checked) {
                console.log('Only accept form submitted');
            }
            if (!acceptCheckbox[0].checked) {
                console.log('Form will not be submitted');
                acceptCheckboxError.removeClass('hide');
            }
            if (newsletterCheckbox[0].checked && !acceptCheckbox[0].checked) {
                emailValidation();
            }
            if (!emailError.hasClass('hide')) {
                console.log('There is an error in the email field');
                return false;
            }
        });
    };

    /*
    * initialize all functions
    */
    var init = function init() {
        removeRequired();
        toggleTCfunc();
        addRequireEmail();
        onChangeValidateEmail();
        newsLetter();
        onClick();
        submitForm();
    };
    init();
}();
//# sourceMappingURL=scripts.js.map
