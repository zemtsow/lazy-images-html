
import { detectLazyTags } from './utils/index.js';

/**
 * @typedef {boolean} 
 */

/**
 * @param {ShowModalWindowParams} boolean
 * @example 
 * if you wanna use debugger switch to true of false
 */

let DEBUG_MODE = true;

detectLazyTags({
  debug: DEBUG_MODE
})