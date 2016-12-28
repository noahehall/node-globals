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
  if (!self && global)
    global.appFuncs = global.appFuncs
      ? Immutable.merge(global.appFuncs, mergedFunctions)
      : mergedFunctions;
  // set main & worker threads
  else if (self)
    self.appFuncs = self.appFuncs
      ? Immutable.merge(self.appFuncs, mergedFunctions)
      : mergedFunctions;

  return self && self.appFuncs || global && global.appFuncs;
};

export default function setGlobals ({ constants = {}, functions = {} }) {
  const constantsSet = setConstants({ constants });

  const functionsSet = setFunctions(Immutable(_.merge(appFuncs, functions)));

  return {
    constantsSet,
    functionsSet,
  };
}
