'use strict';
const assert = require('assert').strict;
const {sanitize} = require('./index');

/**
 * @description Test suit to test the mongodb-sanitize package.
 *
 * @author Divyeshkumar Pujari
 *
 * @cover index.js
 */
describe('Test the mongodb-sanitize', () => {

	/**
	 * @description - Test-case to make sure that any object where any key:value pair's key
	 * starts with `$` will be remove.
	 *
	 * @author Divyeshkumar Pujari
	 */
	it('should be remove the key:value pair where key starts from `$`', () => {
		const objectToSanitize = {
			'$or': [{a: 10}]
		};
		const sanitizeResponse = sanitize(objectToSanitize);
		const expectedSanitize = {};

		assert.deepStrictEqual(
			sanitizeResponse,
			expectedSanitize,
			`Sanitize have not worked properly for ${JSON.stringify(objectToSanitize)}`
		);
	});

	/**
	 * @description - Test-case to make sure that any object where any key:value pair's key
	 * include dotted with `$` like `abc.$or` will be remove.
	 *
	 * @author Divyeshkumar Pujari
	 */
	it('should be remove the key:value pair where key include dotted with `$` like `abc.$or` will be remove', () => {
		const objectToSanitize = {
			'abc.$or': [{a: 10}]
		};
		const sanitizeResponse = sanitize(objectToSanitize);
		const expectedSanitize = {};

		assert.deepStrictEqual(
			sanitizeResponse,
			expectedSanitize,
			`Sanitize have not worked properly for ${JSON.stringify(objectToSanitize)}`
		);
	});

	/**
	 * @description - Test-case to make sure that any array of object where any key:value pair's key
	 * starts with `$` will be remove.
	 *
	 * @author Divyeshkumar Pujari
	 */
	it('should be remove the key:value pair where key starts from `$` in array of object', () => {
		const objectToSanitize = [{
			'$or': [
				{a: 10}
			]
		}];
		const sanitizeResponse = sanitize(objectToSanitize);
		const expectedSanitize = [{}];

		assert.deepStrictEqual(
			sanitizeResponse,
			expectedSanitize,
			`Sanitize have not worked properly for ${JSON.stringify(objectToSanitize)}`
		);
	});

	/**
	 * @description - Test-case to make sure that any array of object where any key:value pair's key
	 * include dotted with `$` like `abc.$or` will be remove.
	 *
	 * @author Divyeshkumar Pujari
	 */
	it('should be remove the key:value pair where key include dotted with `$` like `abc.$or` in array of object', () => {
		const objectToSanitize = [{
			'abc.$or': [
				{a: 10}
			]
		}];
		const sanitizeResponse = sanitize(objectToSanitize);
		const expectedSanitize = [{}];

		assert.deepStrictEqual(
			sanitizeResponse,
			expectedSanitize,
			`Sanitize have not worked properly for ${JSON.stringify(objectToSanitize)}`
		);
	});

	/**
	 * @description - Test-case to handle all scenarios like start with `$`, include `.$`, and sanitize data
	 *
	 * @author Divyeshkumar Pujari
	 */
	it('should be test all the scenarios like start with `$`, include `.$`, and sanitize data', () => {
		const objectToSanitize = [{
			'abc.$or': [
				{a: 10}
			],
			'$match': {a: 10},
			'name': 'Divyesh'
		}];
		const sanitizeResponse = sanitize(objectToSanitize);
		const expectedSanitize = [{'name': 'Divyesh'}];

		assert.deepStrictEqual(
			sanitizeResponse,
			expectedSanitize,
			`Sanitize have not worked properly for ${JSON.stringify(objectToSanitize)}`
		);
	});
});
