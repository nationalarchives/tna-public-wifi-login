QUnit.test( "Attribute Test", function( assert ) {
    var required = $acceptCheckbox.attr('required', 'required');
    var removedAttr = $acceptCheckbox.removeAttr('required');
    assert.notEqual( required, removedAttr, "The attribute is not present" );
});