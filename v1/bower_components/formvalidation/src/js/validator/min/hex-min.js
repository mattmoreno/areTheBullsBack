/**
 * hex validator
 *
 * @link        http://formvalidation.io/validators/hex/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{hex:{"default":"Please enter a valid hexadecimal number"}}}),FormValidation.Validator.hex={validate:function(e,a,n){var t=e.getFieldValue(a,"hex");return""===t?!0:/^[0-9a-fA-F]+$/.test(t)}}}(jQuery);