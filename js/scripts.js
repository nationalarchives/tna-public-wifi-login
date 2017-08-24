'use strict';

var $acceptCheckbox = $('#acceptCheckbox'),
    $acceptForm = $('#acceptForm'),
    $newsletterCheckbox = $('#newsletterCheckbox'),
    $emailField = $('#emailSignUp'),
    $emailError = $('#emailError'),
    $emailContainer = $('#emailSignUpContainer'),
    $tAndCToggle = $('#toggleTC'),
    $tAndCContent = $('#tAndC'),
    $acceptError = $('#acceptError');

$acceptCheckbox.removeAttr('required');

$tAndCToggle.on('click', function (e) {
    $tAndCContent.toggleClass('hide');e.preventDefault();
});

$acceptForm.on('submit', function (e) {
    if (!$acceptCheckbox.is(':checked')) {
        console.log('Form cannot be submitted');
        $acceptError.removeClass('hide');
        e.preventDefault();
    }
    if ($newsletterCheckbox.is(':checked') && $emailField.val().length < 1 || !$emailError.hasClass('hide')) {
        $emailField.attr('required', 'required');
        e.preventDefault();
        $emailError.removeClass('hide');
        console.log('Form will not be submitted');
    }
});

$newsletterCheckbox.on('change', function () {
    $emailContainer.toggleClass('hide');$emailField.attr('required', 'required');$emailError.addClass('hide');
});

$acceptCheckbox.on('change', function () {
    $acceptError.addClass('hide');
});

$emailField.on('change', function () {
    return emailValidation();
});

var emailValidation = function emailValidation() {
    var email = document.forms["marketingForm"]["email-signup"].value,
        atPos = email.indexOf("@"),
        dotPos = email.lastIndexOf("."),
        spaceCount = email.split(" ").length - 1;
    if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= email.length || spaceCount > 0) {
        $emailError.removeClass('hide');
    } else {
        $emailError.addClass('hide');
    }
};
//# sourceMappingURL=scripts.js.map
