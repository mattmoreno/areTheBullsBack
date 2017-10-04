/**
 * file validator
 *
 * @link        http://formvalidation.io/validators/file/
 * @author      https://twitter.com/nghuuphuoc
 * @copyright   (c) 2013 - 2015 Nguyen Huu Phuoc
 * @license     http://formvalidation.io/license/
 */
!function($){FormValidation.I18n=$.extend(!0,FormValidation.I18n||{},{en_US:{file:{"default":"Please choose a valid file"}}}),FormValidation.Validator.file={html5Attributes:{extension:"extension",maxfiles:"maxFiles",minfiles:"minFiles",maxsize:"maxSize",minsize:"minSize",maxtotalsize:"maxTotalSize",mintotalsize:"minTotalSize",message:"message",type:"type"},validate:function(e,i,a){var t=e.getFieldValue(i,"file");if(""===t)return!0;var n,s=a.extension?a.extension.toLowerCase().split(","):null,l=a.type?a.type.toLowerCase().split(","):null,r=window.File&&window.FileList&&window.FileReader;if(r){var o=i.get(0).files,m=o.length,f=0;if(a.maxFiles&&m>parseInt(a.maxFiles,10)||a.minFiles&&m<parseInt(a.minFiles,10))return!1;for(var x=0;m>x;x++)if(f+=o[x].size,n=o[x].name.substr(o[x].name.lastIndexOf(".")+1),a.minSize&&o[x].size<parseInt(a.minSize,10)||a.maxSize&&o[x].size>parseInt(a.maxSize,10)||s&&-1===$.inArray(n.toLowerCase(),s)||o[x].type&&l&&-1===$.inArray(o[x].type.toLowerCase(),l))return!1;if(a.maxTotalSize&&f>parseInt(a.maxTotalSize,10)||a.minTotalSize&&f<parseInt(a.minTotalSize,10))return!1}else if(n=t.substr(t.lastIndexOf(".")+1),s&&-1===$.inArray(n.toLowerCase(),s))return!1;return!0}}}(jQuery);