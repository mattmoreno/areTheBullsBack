/**
 * imei validator
 *
 * @link        http://formvalidation.io/validators/imei/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{imei:{"default":"Please enter a valid IMEI number"}}}),FormValidation.Validator.imei={validate:function(e,t,d){var a=e.getFieldValue(t,"imei");if(""===a)return!0;switch(!0){case/^\d{15}$/.test(a):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(a):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(a):return a=a.replace(/[^0-9]/g,""),FormValidation.Helper.luhn(a);case/^\d{14}$/.test(a):case/^\d{16}$/.test(a):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(a):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(a):return!0;default:return!1}}}}(jQuery);