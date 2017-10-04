/**
 * mac validator
 *
 * @link        http://formvalidation.io/validators/mac/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{mac:{"default":"Please enter a valid MAC address"}}}),FormValidation.Validator.mac={validate:function(a,e,t){var n=a.getFieldValue(e,"mac");return""===n?!0:/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(n)}}}(jQuery);