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
     * Custom validations for checkbox
    */
    var submitForm = function submitForm() {
        $('#connect').on('click', function (e) {
            if (acceptCheckbox.is(':checked') && newsletterCheckbox.is(':checked')) {
                document.getElementById('acceptForm').submit();
            } else if (acceptCheckbox.is(':checked')) {
                document.getElementById("acceptForm").submit();
                document.getElementById("marketingForm").submit();
            } else {
                acceptCheckboxError.removeClass('hide');
                acceptCheckbox.addClass('field-error');
                e.preventDefault();
            }
        });
    };

    /*
     * explicitly return methods when instantiated
    */
    return {
        required: removeRequired,
        toggleTermsAndConditions: toggleTCfunc,
        revealNewsletterField: newsLetter,
        hideError: onClick,
        submitForm: submitForm
    };
}(window);

publicWifi.required();
publicWifi.toggleTermsAndConditions();
publicWifi.revealNewsletterField();
publicWifi.hideError();
publicWifi.submitForm();
//# sourceMappingURL=scripts.js.map
