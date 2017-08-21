'use strict';

var publicWifi = function (window) {

    //defined variables
    var toggleTC = $('.entry-content a'),
        toggleTCDiv = $('#tAndC'),
        emailSignUpField = $('#emailSignupContainer'),
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
                emailSignUpField.removeClass("hide");
            } else {
                emailSignUpField.addClass("hide");
            }
        });
    };

    /*
     * Validate email
    */
    /*const validEmail = (email) => {
        var reGex = /\S+@\S+\.\S+/;
        return reGex.test(email);
    };*/

    var checkField = function checkField() {
        var emailField = $('#email-signup').val().length;
        if (emailField > 1) {
            console.log('field is empty');
        }
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
     * Submit the forms
    */
    var submitForm = function submitForm() {
        $('#connect').on('click', function (e) {
            if (acceptCheckbox.is(':checked') && newsletterCheckbox.is(':checked')) {
                document.getElementById('acceptForm').submit();
                document.getElementById("marketingForm").submit();
            } else if (acceptCheckbox.is(':checked')) {
                document.getElementById("acceptForm").submit();
            } else {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                e.preventDefault();
            }
        });
    };

    var stuff = function stuff() {
        console.log('Hello');
    };

    /*
    * initialize all functions
    */
    var init = function init() {
        removeRequired();
        toggleTCfunc();
        checkField();
        newsLetter();
        onClick();
        submitForm();
        //stuff();
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
