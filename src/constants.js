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
  const self = self || null; // eslint-disable-line
  // set node app consts
  if (!self && global && !global.appConsts) global.appConsts = mergedConstants;
  // set main & worker threads
  else if (self && !self.appConsts) self.appConsts = mergedConstants;

  return self && self.appConsts || global && global.appConsts;
};

export default function setConstants ({ yourConstants = {} }) {
  return setAppConsts(Immutable(_.merge(
    appConsts,
    !_.isEmpty(yourConstants)
      ? yourConstants
      : {}
    )
  ));
}
