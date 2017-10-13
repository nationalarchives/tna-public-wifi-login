(function(){
    let app = new Vue({
        el: '#tAndC',
        data: {
            seen: false
        }
    });

    const ERRORS = {
        required: "Please enter your email to connect",
        invalidEmail: 'This is not a valid email address'
    };

    let validateEmailField = new Vue({
        el: '#form',
        data: {
            email: '',
            emailFeedback: '',
            submition: false
        },
        computed: {
            wrongEmail(){}
        },
        methods: {
            isEmail(){},
            validateForm(){}
        }
    });

}());