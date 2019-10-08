/**
 * imo validator
 *
 * @link        http://formvalidation.io/validators/imo/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{imo:{"default":"Please enter a valid IMO number"}}}),FormValidation.Validator.imo={validate:function(e,a,i){var r=e.getFieldValue(a,"imo");if(""===r)return!0;if(!/^IMO \d{7}$/i.test(r))return!1;for(var t=0,n=r.replace(/^.*(\d{7})$/,"$1"),o=6;o>=1;o--)t+=n.slice(6-o,-o)*(o+1);return t%10===parseInt(n.charAt(6),10)}}}(jQuery);