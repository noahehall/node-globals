/**
 * Universal Functions made available to the entire application
 * @see https://www.hacksparrow.com/global-variables-in-node-js.html
 * @author @noahehall
 * @type {Object}
 */
import _ from 'lodash';
import dom from './lib/dom.js';
import errors from './lib/errors.js';
import Immutable from 'seamless-immutable';
import integrations from './lib/integrations.js';
import math from './lib/math.js';
import serviceWorkers from './lib/serviceworkers.js';
import setConstants from './constants.js';
import time from './lib/time.js';
import utility from './lib/utility.js';

const appFuncs = {
  ...dom,
  ...errors,
  ...integrations,
  ...math,
  ...serviceWorkers,
  ...time,
  ...utility,
};

const setFunctions = (mergedFunctions = {}) => {
  const self = self || null; // eslint-disable-line
  // set node app consts
  if (!self && global) global.appFuncs = Immutable.merge(global.appFuncs || {}, mergedFunctions);
  // set main & worker threads
  else if (self) self.appFuncs = Immutable.merge(self.appFuncs || {}, mergedFunctions);

  return self && self.appFuncs || global && global.appFuncs;
};

export default function setGlobals ({ yourConstants = {}, yourFunctions = {} }) {
  const constantsSet = setConstants({ yourConstants });

  const functionsSet = setFunctions(Immutable(_.merge(appFuncs, yourFunctions)));

  return {
    constantsSet,
    functionsSet,
  };
}
