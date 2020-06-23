'use strict';
const assert = require('assert').strict;
const { sanitize, isSanitized } = require('./index');

/**
 * @description Test suit to test the mongodb-sanitize package.
 *
 * @author Divyeshkumar Pujari
 *
 * @cover index.js
 */
describe('Test the mongodb-sanitize', () => {

	/**
	 * @description Test-suit to test the various object/array to make sure that `sanitize` method works fine.
	 *
	 * @author Divyeshkumar Pujari
	 * @method sanitize
	 */
	describe('TestSuit for sanitize', () => {

		/**
		 * @description - Test-case to make sure that any object where any key:value pair's key
		 * starts with `$` will be remove.
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

	/**
	 * @description Test-suit to test the various object/array is sanitized for mongoDb operation or not.
	 *
	 * @author Divyeshkumar Pujari
	 * @method isSanitized
	 */
	describe('TestSuit for isSanitized', () => {

		/**
		 * @description Test case to make sure that isSanitized method return false if any property starts with `$`.
		 */
		it('should be return false if object include property where key starts with `$`', () => {
			const objectToSanitize = {
				'$or': [{a: 10}]
			};
			const isSanitizedObject = isSanitized(objectToSanitize);
			const expectedResult = false;

			assert.equal(
				isSanitizedObject,
				expectedResult,
				`isSanitized have not worked properly for ${JSON.stringify(objectToSanitize)}`
			)
		});

		/**
		 * @description Test case to make sure that isSanitized method return false if any property include the `.$` in key.
		 */
		it('should be return false if object include property which have `.$` in key', () => {
			const objectToSanitize = {
				'abc.$or': [{a: 10}]
			};
			const isSanitizedObject = isSanitized(objectToSanitize);
			const expectedResult = false;

			assert.equal(
				isSanitizedObject,
				expectedResult,
				`isSanitized have not worked properly for ${JSON.stringify(objectToSanitize)}`
			)
		});

		/**
		 * @description Test case to make sure that isSanitized method return false if array of object with
		 * any property include the `$` in starts at the key.
		 */
		it('should be return false if array of object include the property starts with `$`', () => {
			const objectToSanitize = [{
				'$or': [
					{a: 10}
				]
			}];
			const isSanitizedObject = isSanitized(objectToSanitize);
			const expectedResult = false;

			assert.equal(
				isSanitizedObject,
				expectedResult,
				`isSanitized have not worked properly for ${JSON.stringify(objectToSanitize)}`
			);
		});

		/**
		 * @description Test case to make sure that isSanitized method return false if array of object with
		 * any property include the `.$` in the key.
		 */
		it('should be return false if array of object include any property with key have `.$`', () => {
			const objectToSanitize = [{
				'abc.$or': [
					{a: 10}
				]
			}];
			const isSanitizedObject = isSanitized(objectToSanitize);
			const expectedResult = false;

			assert.equal(
				isSanitizedObject,
				expectedResult,
				`isSanitized have not worked properly for ${JSON.stringify(objectToSanitize)}`
			);
		});

		/**
		 * @description Test case to make sure that isSanitized method return true for sanitized object/array
		 */
		it('should be return true when object/array sanitized for mongodb operation', () => {
			const objectToSanitize = [{
				'emails': [
					{'primary': 'abc@xyz.com'}
				]
			}];
			const isSanitizedObject = isSanitized(objectToSanitize);
			const expectedResult = true;

			assert.equal(
				isSanitizedObject,
				expectedResult,
				`isSanitized have not worked properly for ${JSON.stringify(objectToSanitize)}`
			);
		});
	});

});
