/**
 * ean validator
 *
 * @link        http://formvalidation.io/validators/ean/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{ean:{"default":"Please enter a valid EAN number"}}}),FormValidation.Validator.ean={validate:function(a,e,n){var t=a.getFieldValue(e,"ean");if(""===t)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(t))return!1;for(var r=t.length,i=0,d=8===r?[3,1]:[1,3],l=0;r-1>l;l++)i+=parseInt(t.charAt(l),10)*d[l%2];return i=(10-i%10)%10,i+""===t.charAt(r-1)}}}(jQuery);