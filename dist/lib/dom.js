'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {
  /**
   * inserts a child textNode into the previous element, based on the current elements validationMessage and title properties
   * @method setPreviousElementError
   * @param  {HTMLElement} el an element with a validationMessage and title property
   * @returns {HTMLElement} Error message with string
   */
  setPreviousElementError: function setPreviousElementError(el) {
    return el.previousSibling.firstElementChild.innerHTML = el.validationMessage + '<br />' + el.title;
  },


  /**
   * inserts a child textNode into an element, based on another elements validationMessage
   * @method clearPreviousElementError
   * @param  {[type]}                  el [description]
   * @return {[type]}                  [description]
   */
  clearPreviousElementError: function clearPreviousElementError(el) {
    return el.previousSibling.firstElementChild.innerHTML = el.validationMessage;
  },


  /**
   * Inserts a text node into a child element
   * @method setFirstChildElementError
   * @param  {HTMLElement} el the parent element
   * @param  {Boolean} [msg=false] the message to set
   */
  setFirstChildElementError: function setFirstChildElementError(el) {
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return el.querySelector('.error').innerHTML = msg || 'Please correct all errors before continuing';
  },


  /**
   * Check if an element is valid
   * @method checkValidOnBlur
   * @param  {HTMLElement}         e                The element to
   * @param  {Boolean}        [setError=false] Whether to set an error message or ignore
   * @return {[type]}         [description]
   */
  checkElementValidity: function checkElementValidity(e) {
    var setError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var el = e.currentTarget;

    if (el.willValidate && !el.validity.valid) {
      el.className = 'has-error';
      if (setError) setPreviousElementError(el);

      // TODO: check if we can return true for training
      return false;
    }

    el.className = '';
    if (setError) clearPreviousElementError(el);

    return true;
  },


  /**
   * Inserts a text node into a child element
   * @method clearFirstChildElementError
   * @param  {HTMLElement} el the parent element
   * @param  {Boolean} [msg=false] the message to enter
   * @return {[type]} [description]
   */
  clearFirstChildElementError: function clearFirstChildElementError(el) {
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return el.querySelector('.error').innerHTML = msg || '';
  },


  /**
   * set innner html and data attribute
   * @method setNextInnerHtml
   * @param  {[type]}         el   [description]
   * @param  {[type]}         data [description]
   * @param  {[type]}         str  [description]
   */
  setNextInnerHtml: function setNextInnerHtml(el, abbr, str) {
    if (!el) return false;

    var thisEl = el.nextElementSibling;
    if (!abbr) {
      thisEl.innerHTML = '';
      thisEl.dataset.abbr = '';
      thisEl.className = 'more-info sike';

      return false;
    }

    thisEl.dataset.abbr = abbr;
    thisEl.innerHTML = str || 'more';
    thisEl.className = 'more-info';

    return thisEl;
  }
};

exports.default = dom;