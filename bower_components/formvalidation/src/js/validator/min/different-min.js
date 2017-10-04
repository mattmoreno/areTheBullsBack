/**
 * different validator
 *
 * @link        http://formvalidation.io/validators/different/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{different:{"default":"Please enter a different value"}}}),FormValidation.Validator.different={html5Attributes:{message:"message",field:"field"},init:function(e,t,i){for(var n=i.field.split(","),l=0;l<n.length;l++){var f=e.getFieldElements(n[l]);e.onLiveChange(f,"live_different",function(){var i=e.getStatus(t,"different");i!==e.STATUS_NOT_VALIDATED&&e.revalidateField(t)})}},destroy:function(e,t,i){for(var n=i.field.split(","),l=0;l<n.length;l++){var f=e.getFieldElements(n[l]);e.offLiveChange(f,"live_different")}},validate:function(e,t,i){var n=e.getFieldValue(t,"different");if(""===n)return!0;for(var l=i.field.split(","),f=!0,a=0;a<l.length;a++){var r=e.getFieldElements(l[a]);if(null!=r&&0!==r.length){var d=e.getFieldValue(r,"different");n===d?f=!1:""!==d&&e.updateStatus(r,e.STATUS_VALID,"different")}}return f}}}(jQuery);