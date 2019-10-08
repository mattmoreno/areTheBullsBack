/**
 * isbn validator
 *
 * @link        http://formvalidation.io/validators/isbn/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{isbn:{"default":"Please enter a valid ISBN number"}}}),FormValidation.Validator.isbn={validate:function(e,t,a){var d=e.getFieldValue(t,"isbn");if(""===d)return!0;var s;switch(!0){case/^\d{9}[\dX]$/.test(d):case 13===d.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(d):case 13===d.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(d):s="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(d):case 17===d.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(d):case 17===d.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(d):s="ISBN13";break;default:return!1}d=d.replace(/[^0-9X]/gi,"");var n=d.split(""),r=n.length,i=0,l,c;switch(s){case"ISBN10":for(i=0,l=0;r-1>l;l++)i+=parseInt(n[l],10)*(10-l);return c=11-i%11,11===c?c=0:10===c&&(c="X"),c+""===n[r-1];case"ISBN13":for(i=0,l=0;r-1>l;l++)i+=l%2===0?parseInt(n[l],10):3*parseInt(n[l],10);return c=10-i%10,10===c&&(c="0"),c+""===n[r-1];default:return!1}}}}(jQuery);