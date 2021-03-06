'use strict';

(function () {
    //This takes off the development mode from the console.
    Vue.config.productionTip = false;
    //END** This takes off the development mode from the console.

    //This will remove the no js class from the HTML Tag.
    var removeNoJs = function removeNoJs() {
        var $html = document.getElementsByTagName('html')[0];
        $html.removeAttribute('class');
    };
    removeNoJs();
    //END** This will remove the no js class from the HTML Tag.

    //These are the Error objects
    var ERRORS = {
        required: 'Please enter your email address.',
        invalidEmail: 'This is not a valid email address.'
    };
    //END** These are the Error objects

    //This is the Vue App.
    var formValidate = new Vue({
        el: '#form',
        data: {
            email: '',
            emailFeedback: '',
            submition: false,
            displayed: false,
            novalidation: 'novalidate'
        },
        computed: {
            wrongEmail: function wrongEmail() {
                if (this.email === '') {
                    this.emailFeedback = ERRORS.required;
                    return true;
                } else if (!this.isEmail(this.email)) {
                    this.emailFeedback = ERRORS.invalidEmail;
                    return true;
                }
                return false;
            }
        },
        methods: {
            isEmail: function isEmail(email) {
                var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegex.test(email);
            },
            validateForm: function validateForm(event) {
                this.submition = true;
                if (this.wrongEmail) {
                    event.preventDefault();
                }
            }
        }
    });
})();
//# sourceMappingURL=app.js.map
