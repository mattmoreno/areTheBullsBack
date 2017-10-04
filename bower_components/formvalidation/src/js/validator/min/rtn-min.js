/**
 * rtn validator
 *
 * @link        http://formvalidation.io/validators/rtn/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{rtn:{"default":"Please enter a valid RTN number"}}}),FormValidation.Validator.rtn={validate:function(t,r,a){var n=t.getFieldValue(r,"rtn");if(""===n)return!0;if(!/^\d{9}$/.test(n))return!1;for(var e=0,i=0;i<n.length;i+=3)e+=3*parseInt(n.charAt(i),10)+7*parseInt(n.charAt(i+1),10)+parseInt(n.charAt(i+2),10);return 0!==e&&e%10===0}}}(jQuery);