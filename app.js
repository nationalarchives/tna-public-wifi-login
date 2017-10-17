"use strict";

(function () {
    var removeCustomAttr = function removeCustomAttr(attribute1, attribute2) {
        "use strict";

        var $emailField = document.querySelector("#emailSignUp");
        if ($emailField) {
            $emailField.removeAttribute(attribute1);
            $emailField.removeAttribute(attribute2);
            return true;
        }
    };
    removeCustomAttr('type', 'required');

    var removeNoJs = function removeNoJs() {
        "use strict";

        var $html = document.getElementsByTagName("html")[0];
        $html.removeAttribute("class");
    };
    removeNoJs();

    var app = new Vue({
        el: '#tAndC',
        data: {
            seen: false
        }
    });

    var ERRORS = {
        required: 'This field is required.',
        invalidEmail: 'This is not a valid email address.'
    };

    var formValidate = new Vue({
        el: '#form',
        data: {
            email: '',
            emailFeedback: '',
            submition: false
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
