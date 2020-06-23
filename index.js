'use strict';

/**
 * Regex which use to match the key. Which includes either `$` at the stating of the object key or
 * `.$` include in key.
 */
const REGEX_TO_MATCH = /(^\$.)|((.+)?\.\$.)/gm;

/**
 * @description This function is responsible to check that passed Object/Array is sanitized for mongoDb operation.
 *
 * @param {Object | Array} objectToSanitize - Object or Array to sanitize
 *
 * @author Divyeshkumar Pujari
 *
 * @return {Boolean} - Return the boolean result that Object/Array is sanitized for mongodb operation or not.
 */
const isSanitized = (objectToSanitize) => {
	let isSanitized = true;
	JSON.stringify(objectToSanitize, (key, value) => {
		if (key.match(REGEX_TO_MATCH)) {
			isSanitized = false;
		}
		return value;
	});
	return isSanitized;
};

/**
 * @description This function is responsible to sanitize the object passed in an argument for mongoDb operation.
 *
 * @param {Object | Array} objectToSanitize - Object or an Array to sanitize
 *
 * @author Divyeshkumar Pujari
 *
 * @return {Object | Array} - Return sanitized object or array for mongodb operation
 */
const sanitize = (objectToSanitize) => {
	const sanitizedString = JSON.stringify(objectToSanitize, (key, value) => {
		return key.match(REGEX_TO_MATCH) ? undefined : value;
	});
	return JSON.parse(sanitizedString);
};

/**
 * @description Responsible to set as middleware and sanitize process on incoming request's body, query, and params.
 *
 * @param {Array} propertiesToSanitize - Array of a property name of incoming request object to sanitize.
 *
 * @default propertiesToSanitize  ['body', 'params', 'query']
 *
 * @author Divyeshkumar Pujari
 */
const sanitizeMiddleWare = (propertiesToSanitize = ['body', 'params', 'query']) => {
	return (req, res, next) => {
		propertiesToSanitize.forEach((prop) => {
			req[prop] = sanitize(req[prop]);
		});
		next();
	}
};

module.exports = sanitizeMiddleWare;
module.exports.sanitize = sanitize;
module.exports.isSanitized = isSanitized;
