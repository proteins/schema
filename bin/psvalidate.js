#!/usr/bin/env node

var proteinValidator = require('../')

require('cli').withStdin(function(stdin) {
	protein = JSON.parse(stdin);
	proteinValidator.validate(protein, function (d) {
		if (d == true) {
			console.log('The input validates OK.');
		} else {
			console.log('The input is not valid:');
			console.log(d);
		}
	});
});