import { expectType } from 'tsd';
import { Handler } from 'express';
import { sanitize, sanitizeMiddleWare, isSanitized } from '.';

/**
 * @description Middleware type assertion
 */
expectType<Handler>(sanitizeMiddleWare())
expectType<Handler>(sanitizeMiddleWare(['body'], {replaceBy: '#'}))

/**
 * @description Type assertion of sanitize method response
 */
let payload: any = [{"$add": 10, "abcd": 12}]
expectType<typeof payload>(sanitize(payload))
payload = [{"$add": 10, "abcd": 12}]
expectType<typeof payload>(sanitize(payload, {replaceBy: '#'}))
payload = {"$add": 10, "abcd": 12}
expectType<typeof payload>(sanitize(payload))
payload = {"$add": 10, "abcd": 12}
expectType<typeof payload>(sanitize(payload, {replaceBy: '#'}))

/**
 * @description Type assertion of isSanitized method response
 */
payload = {"$add": 10, "abcd": 12}
expectType<boolean>(isSanitized(payload))
expectType<boolean>(isSanitized(undefined))