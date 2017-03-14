/**
 * Universal Constants made available to entire application
 * @see https://www.hacksparrow.com/global-variables-in-node-js.html
 * @author @noahehall
 * @type {Object}
 */
import _ from 'lodash';
import Immutable from 'seamless-immutable';

const appConsts = {
  isProd: process.env.NODE_ENV === 'production',
};

/**
 * Set global variables on worker & main threads, else node
 * @type {[type]}
*/
const setAppConsts = (mergedConstants = Immutable(appConsts)) => {
  // set node app consts
  if (typeof self === 'undefined' && typeof global !== 'undefined') {
    global.appConsts = global.appConsts
      ? Immutable.merge(global.appConsts, mergedConstants)
      : mergedConstants;

    return global.appConsts;
  } else if (typeof self !== 'undefined') {
    // set main & worker threads
    self.appConsts = self.appConsts
      ? Immutable.merge(self.appConsts, mergedConstants)
      : mergedConstants;

    return self.appConsts
  }

  return {};
};

export default function setConstants ({ constants = {} }) {
  return setAppConsts(Immutable(_.merge(appConsts, constants || {})
  ));
}
