'use strict';

(function () {
    var app = new Vue({
        el: '#tAndC',
        data: {
            seen: false
        }
    });

    var ERRORS = {
        required: "Please enter your email to connect",
        invalidEmail: 'This is not a valid email address'
    };

    var validateEmailField = new Vue({
        el: '#form',
        data: {
            email: '',
            emailFeedback: '',
            submition: false
        },
        computed: {
            wrongEmail: function wrongEmail() {}
        },
        methods: {
            isEmail: function isEmail() {},
            validateForm: function validateForm() {}
        }
    });
})();
//# sourceMappingURL=app.js.map
