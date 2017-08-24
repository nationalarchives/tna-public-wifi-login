// Checking if the form exists
QUnit.module("Checking the mandatory DOM elements are present", function () {
    QUnit.test("Check required elements in fixture", function (assert) {
        assert.ok($('form', '.fixture').length == 1, "The form is present");
        assert.ok($('#tAndC', '.fixture').length == 1, "The terms and conditions are present");
    });
});