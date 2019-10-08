/**
 * vin validator
 *
 * @link        http://formvalidation.io/validators/vin/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{vin:{"default":"Please enter a valid VIN number"}}}),FormValidation.Validator.vin={validate:function(a,n,r){var e=a.getFieldValue(n,"vin");if(""===e)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(e))return!1;e=e.toUpperCase();for(var t={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},i=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],l=0,o=e.length,d=0;o>d;d++)l+=t[e.charAt(d)+""]*i[d];var u=l%11;return 10===u&&(u="X"),u+""===e.charAt(8)}}}(jQuery);