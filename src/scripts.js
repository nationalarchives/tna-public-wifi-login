'use strict';

const publicWifi = ((window) => {

    //defined variables
    const   toggleTC = $('.entry-content a'),
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
        newsletterCheckbox.on("click",() => {
           if(!newsletterCheckbox[0].checked) {
               emailError.addClass('hide');
           }
        });
    };


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


    /*
     * Checks for email on change
    */
    let onChangeValidateEmail = () => { emailField.on( 'change', function () { emailValidation(); }); };


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
    const submitBothForms = () => { $('form').each(() => { $(this).submit(); }); };

    const submitForm = () => {
      $('#connect').on('click', (e) => {
          if ( !acceptCheckbox[0].checked && newsletterCheckbox[0].checked && emailField.val().length > 1 ) {
              acceptCheckboxError.removeClass('hide');
              acceptCheckbox.addClass('field-error');
              emailValidation();
              e.preventDefault();
              console.log('Found you again');
          } else if ( acceptCheckbox[0].checked && !newsletterCheckbox[0].checked ) {
              document.getElementById('acceptForm').submit();
          } else if ( acceptCheckbox[0].checked && newsletterCheckbox[0].checked && $('#emailSignUp').val().length === 0 ) {
              return false;
          } else {
              acceptCheckboxError.removeClass('hide');
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

})(window);