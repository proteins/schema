var test = require('tape');
var schemaValidator = require('../validator').validate;

test('does the validator work?', function (t) {
	try {
		schemaValidator('{"cat": "meow"}', function (d) {
			t.pass('validator works (data may not be valid)');
		});
	} catch(e) {
		t.fail('validator crashed');
	}
	t.end();
});