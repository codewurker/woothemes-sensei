/******/jQuery(document).ready((function(){var e=window._;
/**
   * Add select to the modules select boxes
   */
// module order screen
jQuery("#module-order-course").select2({width:"resolve"}),
/**
   * Sortable functionality
   */
jQuery(".sortable-module-list").sortable(),jQuery(".sortable-tab-list").disableSelection(),jQuery(".sortable-module-list").on("sortstop",(function(){var e="";jQuery(this).find(".module").each((function(o){o>0&&(e+=","),e+=jQuery(this).find("span").attr("rel")})),jQuery('input[name="module-order"]').val(e)})),
/**
   * Searching for courses on the modules admin edit screen
   */
jQuery("select.ajax_chosen_select_courses").select2({minimumInputLength:2,placeholder:window.modulesAdmin.selectplaceholder,width:"300px",multiple:!0,ajax:{
// in wp-admin ajaxurl is supplied by WordPress and is available globaly
url:ajaxurl,delay:250,dataType:"json",cache:!0,data:function(e){
// page is the one-based page number tracked by Select2
return{term:e.term,
//search term
page:e.page||1,action:"sensei_json_search_courses",security:window.modulesAdmin.search_courses_nonce,default:""}},processResults:function(e,o){var t=[];
// wrap the users inside results for select 2 usage
return jQuery.each(e,(function(e,o){if(!jQuery.isEmptyObject(o)){var r={id:e,text:o};t.push(r)}})),{results:t,page:o}}}}),// end select2
jQuery("#sensei-module-add-toggle").on("click",(function(){var e="wp-hidden-child",o=jQuery(this).parent().next("p#sensei-module-add"),t=o.children("#newmodule");if(o.hasClass(e))return o.removeClass(e),t.val(""),void t.focus();o.addClass(e)})),jQuery("#sensei-module-add-submit").on("click",(function(){
// setup the fields
var o=
/**
 * Get the url qiuery paramater by name
 *
 * Credit: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 *
 * @param {string} name
 * @returns {string}
 */
function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var o=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===o?"":decodeURIComponent(o[1].replace(/\+/g," "))}("post"),t=jQuery(this).parent().children("#newmodule"),r=jQuery(this).parent().children("#add_module_nonce"),s=jQuery("#module_course_mb #taxonomy-module #module-all ul#modulechecklist"),u=t.val(),n=r.val();if(e.isEmpty(u)||e.isEmpty(n))t.focus();else{var l={newTerm:u,security:n,action:"sensei_add_new_module_term",course_id:o,from_page:"course"};jQuery.post(ajaxurl,l,(function(o){var r,u;if(o.success){
// make sure the return values are valid
if(r=o.data.termId,u=o.data.termName,!(parseInt(r)>0)||e.isEmpty(u))return void t.focus();
// setup the new list item
var n='<li id="module-'+r+'">';return n+='<label class="selectit">',n+='<input value="'+r+'" type="checkbox" checked="checked" name="tax_input[module][]" id="in-module-'+r+'">',n+=u,n+="</label></li>",
// ad the list item
s.prepend(n),
// clear the input
t.val(""),void t.focus()}if(void 0!==o.data.errors&&void 0!==o.data.errors.term_exists){r=o.data.term.id;
// find term with id and just make sure it is
var l=s.find("#module-"+r+" input");
// checked also move the focus of the user there
l.prop("checked","checked"),
// then empty the field that was added
l.focus(),t.val("")}}))}}));
/**
   * After changing the course teacher, it prevents updating the modules
   * until the next page refresh. Otherwise, some issues can happen because
   * the modules list in the frontend can be out of date with the server.
   */
const o=document.querySelector('select[name="sensei-course-teacher-author"]');o&&o.addEventListener("change",(()=>{const e=document.querySelector("#module_course_mb");e&&e.parentNode.removeChild(e)})),
// Refresh the modules meta box on course select change.
jQuery("#lesson-course-options").on("change",(function(){var e;
// Try to get the lesson ID from the wp data store. If not present, fallback to getting it from the DOM.
const o=(null===(e=wp.data.select("core/editor"))||void 0===e?void 0:e.getCurrentPostId())||jQuery("#post_ID").val(),t=jQuery(this).val();jQuery.get(ajaxurl,{action:"sensei_get_lesson_module_metabox",lesson_id:o,course_id:t,security:window.modulesAdmin.getLessonModuleMetaBoxNonce},(function(e){""!==e&&(
// Replace the meta box and re-initialize select2.
jQuery("> .inside","#module_select").html(e),jQuery("#lesson-module-options").select2({width:"resolve"}))}))}))}));