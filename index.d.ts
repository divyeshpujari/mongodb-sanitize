import { Handler } from 'express';

/**
 * @description Sanitize function options type
 */
interface Options {
  replaceBy?: string;
}

/**
 * @description Middleware template for type support
 */
type ModuleTemplate = {
  sanitizeMiddleWare(propertiesToSanitize?: string[], options?: Options): Handler;
  sanitize(objectToSanitize: any, options?: Options): any;
  isSanitized(objectToSanitize: any): boolean
};

/**
 * @description Declaration of mongodb sanitize module
 */
declare const mongodbSanitize: ModuleTemplate;

/**
 * @description export the mongodb sanitize module
 */
export = mongodbSanitize;