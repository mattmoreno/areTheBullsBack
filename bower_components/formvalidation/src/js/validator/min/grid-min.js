/**
 * grid validator
 *
 * @link        http://formvalidation.io/validators/grid/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{grid:{"default":"Please enter a valid GRId number"}}}),FormValidation.Validator.grid={validate:function(e,a,r){var t=e.getFieldValue(a,"grid");return""===t?!0:(t=t.toUpperCase(),/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(t)?(t=t.replace(/\s/g,"").replace(/-/g,""),"GRID:"===t.substr(0,5)&&(t=t.substr(5)),FormValidation.Helper.mod37And36(t)):!1)}}}(jQuery);