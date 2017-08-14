'use strict';

var publicWifi = function (window) {

    //defined variables
    var toggleTC = $('.entry-content a'),
        toggleTCDiv = $('.overflow'),
        emailSignUpField = $('.email-signup'),
        accept = $('#accept');

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
     * This is to check show and hide the email field if checked.
    */
    var newsLetter = function newsLetter() {
        $('#newsletter').on('change', function () {
            if ($(this)[0].checked) {
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
        accept.removeAttr('required');
    };

    /*
     * Check's if the Accept checkbox is checked and hide's the error message.
    */
    var onClick = function () {
        accept.on("click", function () {
            if ($(this)[0].checked) {
                $('#accept-error').addClass('hide');
            }
        });
    }();

    /*
     * Custom validations for checkbox
    */
    $('#accept-checkboxes').on('submit', function (e) {
        if (accept[0].checked) {
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
        required: removeRequired,
        toggleTearmsAndConditions: toggleTCfunc,
        revealNewsletterField: newsLetter
    };
}(window);

publicWifi.required();
publicWifi.toggleTearmsAndConditions();
publicWifi.revealNewsletterField();
//# sourceMappingURL=scripts.js.map
