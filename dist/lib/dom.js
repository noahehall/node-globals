'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dom = {
  /**
   * @description checks if an element has a certain class
   * @see http://jaketrent.com/post/addremove-classes-raw-javascript/
   */
  hasClass: function hasClass(el, className) {
    if (el.classList) return el.classList.contains(className);

    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  },


  /**
   * @description add a class to an element
   * @see http://jaketrent.com/post/addremove-classes-raw-javascript/
   */
  addClass: function addClass(el, className) {
    if (el.classList) return el.classList.add(className);else if (!this.hasClass(el, className)) return el.className + ' ' + className;

    return false;
  },


  /**
   * @description remove a class from an element
   * @see http://jaketrent.com/post/addremove-classes-raw-javascript/
   */
  removeClass: function removeClass(el, className) {
    if (el.classList) return el.classList.remove(className);else if (this.hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');

      return el.className = el.className.replace(reg, ' ');
    }

    return false;
  },


  /**
   * remove default browser invalid popup
   * @method disableConstraintPopup
   * @param  {[type]}               form [description]
   * @return {[type]}               [description]
   */
  disableConstraintPopup: function disableConstraintPopup(form) {
    form && form.addEventListener('invalid', function (e) {
      return e.preventDefault();
    }, true);
  },


  /**
   * inserts a child textNode into the previous element, based on the current elements validationMessage and title properties
   * @method setPreviousElementError
   * @param  {HTMLElement} el an element with a validationMessage and title property
   * @returns {HTMLElement} Error message with string
   */
  setPreviousElementError: function setPreviousElementError(el) {
    return el.previousElementSibling.innerHTML = el.validationMessage + '<br />' + el.title;
  },


  /**
   * inserts a child textNode into an element, based on another elements validationMessage
   * @method clearPreviousElementError
   * @param  {[type]}                  el [description]
   * @return {[type]}                  [description]
   */
  clearPreviousElementError: function clearPreviousElementError(el) {
    return el.previousElementSibling.innerHTML = el.validationMessage;
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
   * Inserts a text node into a child element with class 'error'
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
      this.addClass(el, 'has-error');
      if (setError) this.setPreviousElementError(el);

      // TODO: check if we can return true for training
      return false;
    }

    this.removeClass(el, 'has-error');
    if (setError) this.clearPreviousElementError(el);

    return true;
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
  },
  clientHeight: function clientHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  },
  clientWidth: function clientWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  }
};

exports.default = dom;