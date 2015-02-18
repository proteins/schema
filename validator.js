var fs = require('fs');
var path = require('path');
var jsonValidate = require('jsonschema').validate;

module.exports = {
	validate: function (json, callback) {
		fs.readFile(path.resolve(__dirname, 'schema.json'), 'utf-8', function (err, schema) {
			if (typeof json === "string") {
				json = JSON.parse(json);
			}
			schema = JSON.parse(schema);
			var v = jsonValidate(json, schema);
			if (v.valid) {
				callback(v.valid);
			} else {
				callback(v.errors);
			}
		});
	}
};