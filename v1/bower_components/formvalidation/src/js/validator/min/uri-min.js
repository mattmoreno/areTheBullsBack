/**
 * uri validator
 *
 * @link        http://formvalidation.io/validators/uri/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{uri:{"default":"Please enter a valid URI"}}}),FormValidation.Validator.uri={html5Attributes:{message:"message",allowlocal:"allowLocal",allowemptyprotocol:"allowEmptyProtocol",protocol:"protocol"},enableByHtml5:function(a){return"url"===a.attr("type")},validate:function(a,l,o){var t=a.getFieldValue(l,"uri");if(""===t)return!0;var e=o.allowLocal===!0||"true"===o.allowLocal,r=o.allowEmptyProtocol===!0||"true"===o.allowEmptyProtocol,f=(o.protocol||"http, https, ftp").split(",").join("|").replace(/\s/g,""),u=new RegExp("^(?:(?:"+f+")://)"+(r?"?":"")+"(?:\\S+(?::\\S*)?@)?(?:"+(e?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-?)*[a-z\\u00a1-\\uffff0-9])*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(e?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i");return u.test(t)}}}(jQuery);