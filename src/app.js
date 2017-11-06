(function(){
    let removeCustomAttr = (attribute1, attribute2) => {
        let $emailField = document.querySelector("#emailSignUp");
        if ($emailField) {
            $emailField.removeAttribute(attribute1);
            $emailField.removeAttribute(attribute2);
            return true;
        }
    };
    removeCustomAttr('type', 'required');

    let removeNoJs = () => {
        let $html = document.getElementsByTagName("html")[0];
        $html.removeAttribute("class");
    };
    removeNoJs();


    const ERRORS = {
        required: 'Please enter your email address.',
        invalidEmail: 'This is not a valid email address.'
    };

    let formValidate = new Vue({
        el: '#form',
        data: {
            email: '',
            emailFeedback: '',
            submition: false,
            displayed: false
        },
        computed: {
            wrongEmail() {
                if(this.email === '') {
                    this.emailFeedback = ERRORS.required;
                    return true;
                } else if(!this.isEmail(this.email)) {
                    this.emailFeedback = ERRORS.invalidEmail;
                    return true;
                }
                return false;
            }
        },
        methods: {
            isEmail(email) {
                let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return emailRegex.test(email);
            },
            validateForm(event) {
                this.submition = true;
                if(this.wrongEmail) {
                    event.preventDefault();
                }
            }
        }
    });
}());