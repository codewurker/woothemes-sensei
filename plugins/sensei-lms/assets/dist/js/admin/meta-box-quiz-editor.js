/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,t={
/***/81975:
/***/e=>{e.exports=window.wp.escapeHtml;
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function i(e){
/******/ // Check if module is in cache
/******/var a=n[e];
/******/if(void 0!==a)
/******/return a.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var s=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return t[e](s,s.exports,i),s.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/i.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return i.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/i.d=(e,t)=>{
/******/for(var n in t)
/******/i.o(t,n)&&!i.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=i(81975),
/**
 * WordPress dependencies
 */
/* eslint-disable */
jQuery(document).ready((function(){var t;
/***************************************************************************************************
   * 	1 - Helper Functions.
   ***************************************************************************************************/
/**
   * exists checks if selector exists
   * @since  1.2.0
   * @return boolean
   */jQuery.fn.exists=function(){return this.length>0},
/**
   * Validation of input fields - Add, Edit Question.
   *
   * @since 1.0.0
   * @access public
   */
jQuery.fn.validateQuestionInput=function(e,t){
// Validate Actions
if("add"==e)
// Check for empty questions
return 0!=jQuery("#add_question").val().replace(/^\s+|\s+$/g,"").length;if("edit"==e){
// Check for empty questions
var n=t.closest("tr").prev("tr").find("td:first").text();return 0!=jQuery("#question_"+n).val().replace(/^\s+|\s+$/g,"").length}
// Default
return!1},
/**
   * Sets all Edit Question areas in the Questions table to hidden.
   *
   * @since 1.0.0
   * @access public
   */
jQuery.fn.resetQuestionTable=function(){jQuery("tr.question-quick-edit").each((function(){jQuery(this).hasClass("hidden")||jQuery(this).addClass("hidden")}))},
/**
   * Resets the values of the Add Question form to nothing.
   *
   * @since 1.0.0
   * @access public
   */
jQuery.fn.resetAddQuestionForm=function(){jQuery("#tab-new-content").find("div").find("input").each((function(){"radio"!=jQuery(this).attr("type")&&jQuery(this).val("");// End If Statement
})),jQuery("#add-new-question").find("div").find("textarea").each((function(){jQuery(this).val("")}))},
/**
   * Checks if the quiz can be automatically graded
   *
   * @since 1.3.0
   * @access public
   */
jQuery.fn.checkQuizGradeType=function(e){
// Fetch all current question types
var t,n,i=[];jQuery("#add-question-metadata > table > tbody > tr input.question_type").each((function(){t=jQuery(this).val(),i.push(t)})),// Add latest question to array if it exists
e&&i.push(e);for(var a=!1,s=0;s<i.length;s++)if(n=i[s],!a)switch(n){case"multiple-choice":case"boolean":case"gap-fill":default:a=!1;break;case"multi-line":case"single-line":case"file-upload":a=!0}// End Switch Statement
// Save quiz grade type
jQuery.fn.saveQuizGradeType()},
/**
   * Updates the Number of Questions counter.
   *
   * @since 1.0.0
   * @access public
   */
jQuery.fn.updateQuestionCount=function(e,t){
// Get current value
var n=parseInt(jQuery("#question_counter").val()),i=n;e=parseInt(e),// Increment or Decrement
i="-"==t?n-e:n+e,// Set new value
jQuery("#question_counter").val(i),i>0?jQuery("#no-questions-message").hasClass("hidden")||jQuery("#no-questions-message").addClass("hidden"):jQuery("#no-questions-message").removeClass("hidden");var a=new CustomEvent("sensei-quiz-editor-question-count-updated",{detail:{questions:i}});window.dispatchEvent(a),jQuery.fn.updateQuestionRows()},
/**
   * Save quiz grade type
   *
   * @since 1.3.0
   * access public
   */
jQuery.fn.saveQuizGradeType=function(){var e="quiz_grade_type="+(jQuery("input#quiz_grade_type").is(":checked")?"auto":"manual");return e+="&quiz_id="+jQuery("#quiz_id").val(),jQuery.post(ajaxurl,{action:"lesson_update_grade_type",lesson_update_grade_type_nonce:woo_localized_data.lesson_update_grade_type_nonce,data:e},(function(){})),!1},
/**
   * Save quiz question order
   *
   * @since 1.5.0
   * access public
   */
jQuery.fn.saveQuestionOrder=function(e){var t="question_order="+e;return t+="&quiz_id="+jQuery("#quiz_id").val(),jQuery.post(ajaxurl,{action:"lesson_update_question_order",lesson_update_question_order_nonce:woo_localized_data.lesson_update_question_order_nonce,data:t},(function(){})),!1},
/**
   * Save random question order for quiz
   *
   * @since 1.5.0
   * access public
   */
jQuery.fn.saveQuestionOrderRandom=function(){var e="random_question_order="+(jQuery("input#random_question_order").is(":checked")?"yes":"no");return e+="&quiz_id="+jQuery("#quiz_id").val(),jQuery.post(ajaxurl,{action:"lesson_update_question_order_random",lesson_update_question_order_random_nonce:woo_localized_data.lesson_update_question_order_random_nonce,data:e},(function(){})),!1},
/**
   * Reset question numbers and row highlighting
   *
   * @since 1.5.0
   * @access public
   */
jQuery.fn.updateQuestionRows=function(){var e=1,t="alternate";jQuery("#add-question-metadata").find("td.question-number").each((function(){if(jQuery(this).find("span.number").text(e),jQuery(this).closest("tbody").removeClass().addClass(t),t="alternate"==t?"":"alternate",""!=jQuery(this).find("span.total-number").text()){var n=parseInt(jQuery(this).find("span.total-number").text()),i=e+n-1,a="";a=e==i?e:e+" - "+i,jQuery(this).find("span.row-numbers").text(a),e+=n}else e++}))},
/**
   * Update question order input field
   *
   * @since 1.5.0
   */
jQuery.fn.updateQuestionOrder=function(){var e="";jQuery("#sortable-questions").find("input.row_question_id").each((function(t){t>0&&(e+=","),e+=jQuery(this).val()})),jQuery("input#question-order").val(e),jQuery.fn.saveQuestionOrder(e)},
/**
   * Upload media file to questions
   *
   * @param {object} button Button that was clicked
   * @return void
   *
   * @since  1.5.0
   */
jQuery.fn.uploadQuestionMedia=function(e){var n=e.attr("id"),i=n.replace("_button",""),a=n.replace("_button","_preview"),s=n.replace("_button","_link"),u=n.replace("_button","_button_delete");// When a file is selected, run a callback.
(// Create the media frame.
t=wp.media.frames.file_frame=wp.media({title:e.data("uploader_title"),button:{text:e.data("uploader_button_text")},multiple:!1})).on("select",(function(){var n=t.state().get("selection").first().toJSON();jQuery("#"+i).val(n.id);var r=n.type,o=!1;"image"==r&&(o=!0);var d=n.title;d&&""!=d||(d=n.filename);var l='<a class="'+r+'" href="'+n.url+'" target="_blank">'+d+"</a>";jQuery("#"+s).removeClass("hidden"),jQuery("#"+s).html(l),o?(jQuery("#"+a).removeClass("hidden"),jQuery("#"+a).attr("src",n.sizes.thumbnail.url)):(jQuery("#"+a).addClass("hidden"),jQuery("#"+a).attr("src","")),e.text(woo_localized_data.change_file),jQuery("#"+u).removeClass("hidden")})),// Open the modal
t.open()},jQuery.fn.deleteQuestionMedia=function(e){var t=e.attr("id"),n=t.replace("_button_delete","_button"),i=t.replace("_button_delete",""),a=t.replace("_button_delete","_preview"),s=t.replace("_button_delete","_link");jQuery("#"+i).val(""),jQuery("#"+a).addClass("hidden"),jQuery("#"+a).attr("src",""),jQuery("#"+s).addClass("hidden"),jQuery("#"+s).html(),jQuery("#"+n).text(woo_localized_data.add_file),e.addClass("hidden")},
/**
   * Update answer order input field
   *
   * @since 1.5.0
   */
jQuery.fn.updateAnswerOrder=function(e){var t="";e.find("input.question_answer").each((function(e){""!=jQuery(this).attr("rel")&&(e>0&&(t+=","),t+=jQuery(this).attr("rel"))})),e.find("input.answer_order").val(t)},
/**
   * JS version of PHP htmlentities.
   *
   * @since 1.0.8
   * @access public
   */
jQuery.fn.htmlentities=function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},jQuery.fn.ucwords=function(e){return(e=(e=(e=e.toLowerCase()).replace("-"," ")).replace("boolean","True/False")).replace(/(^([a-zA-Z{M}]))|([ -][a-zA-Z{M}])/g,(function(e){return e.toUpperCase()}))},jQuery.fn.filterExistingQuestions=function(e){var t="";return jQuery("tbody#existing-questions").fadeTo("fast",.33),t+="question_status="+jQuery("#existing-status").val(),""!=jQuery("#existing-type").val()&&(t+="&question_type="+jQuery("#existing-type").val()),""!=jQuery("#existing-category").val()&&(t+="&question_category="+jQuery("#existing-category").val()),""!=jQuery("#existing-search").val()&&(t+="&question_search="+jQuery("#existing-search").val()),t+="&question_page="+(e||jQuery("#existing-page").val()),// Perform the AJAX call.
jQuery.post(ajaxurl,{action:"filter_existing_questions",filter_existing_questions_nonce:woo_localized_data.filter_existing_questions_nonce,data:t},(function(e){if(e){var t=parseInt(e.count),n=parseInt(e.page),i=10*n;jQuery("tbody#existing-questions").html(e.html),jQuery("tbody#existing-questions").fadeTo("fast",1),jQuery("#existing-page").val(n),1<n?jQuery("#existing-pagination .prev").removeClass("no-paging"):jQuery("#existing-pagination .prev").addClass("no-paging"),i<=t?jQuery("#existing-pagination .next").removeClass("no-paging"):jQuery("#existing-pagination .next").addClass("no-paging")}})),!1},jQuery.fn.scrollToElement=function(e){var t=jQuery(e).offset().top-30;return jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop:t},800),!1},
/***************************************************************************************************
   * 	2 - Lesson Quiz Functions.
   ***************************************************************************************************/
/**
   * Gap Fill text change events
   *
   * @since 1.3.0
   * @access public
   */
jQuery("input.gapfill-field").each((function(){
// Handles change events like paste, tabbing, and click change selectors
jQuery(this).change((function(){var t=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_pre]").val(),n=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_gap]").val(),i=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_post]").val();jQuery(this).parent("div").find("p.gapfill-preview").html((0,e.escapeHTML)(t)+" <u>"+(0,e.escapeHTML)(n)+"</u> "+(0,e.escapeHTML)(i))})),// Handles the pressing up of the key, general typing
jQuery(this).keyup((function(){var t=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_pre]").val(),n=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_gap]").val(),i=jQuery(this).parent("div").find("input[name=add_question_right_answer_gapfill_post]").val();jQuery(this).parent("div").find("p.gapfill-preview").html((0,e.escapeHTML)(t)+" <u>"+(0,e.escapeHTML)(n)+"</u> "+(0,e.escapeHTML)(i))}))})),
/**
   * Quiz grade type checkbox change event
   *
   * @since 1.3.0
   * @access public
   */
jQuery("#add-quiz-metadata").on("change","#quiz_grade_type",(function(){jQuery.fn.saveQuizGradeType()})),
/***************************************************************************************************
   * 	3 - Load Chosen Dropdowns.
   ***************************************************************************************************/
// Quiz edit panel
jQuery("#add-question-type-options").exists()&&jQuery("#add-question-type-options").select2({width:"resolve"}),jQuery("#add-question-category-options").exists()&&jQuery("#add-question-category-options").select2({width:"resolve"}),jQuery("#add-multiple-question-options").exists()&&jQuery("#add-multiple-question-options").select2({width:"resolve"}),// Courses Write Panel
jQuery("#add-multiple-question-category-options").exists()&&jQuery("#add-multiple-question-category-options").select2({width:"resolve"})
/***************************************************************************************************
   * 	4 - Quiz Question Functions.
   ***************************************************************************************************/
/**
   * Add Question Click Event.
   *
   * @since 1.0.0
   * @access public
   */,jQuery("#add-question-actions").on("change","select.question-type-select",(function(){
// Show the correct Question Type
var e=jQuery(this),t=jQuery("#question-edit-panel > .ui-sortable-handle > span"),n=e.val();if(t.length>0){var i=e.find('option[value="'.concat(n,'"]')).text();t.text(i)}switch(jQuery("#add-new-question").find("div.question_default_fields").hide(),jQuery("#add-new-question").find("div.question_boolean_fields").hide(),jQuery("#add-new-question").find("div.question_gapfill_fields").hide(),jQuery("#add-new-question").find("div.question_multiline_fields").hide(),jQuery("#add-new-question").find("div.question_singleline_fields").hide(),jQuery("#add-new-question").find("div.question_fileupload_fields").hide(),jQuery(".add_question_random_order").hide(),n){case"multiple-choice":jQuery("#add-new-question").find("div.question_default_fields").show(),jQuery(".add_question_random_order").show();break;case"boolean":jQuery("#add-new-question").find("div.question_boolean_fields").show();break;case"gap-fill":jQuery("#add-new-question").find("div.question_gapfill_fields").show();break;case"multi-line":jQuery("#add-new-question").find("div.question_multiline_fields").show();break;case"single-line":jQuery("#add-new-question").find("div.question_singleline_fields").show();break;case"file-upload":jQuery("#add-new-question").find("div.question_fileupload_fields").show()}// End Switch Statement
})),
/**
   * Edit Question Click Event.
   *
   * @since 1.0.0
   * @access public
   */
jQuery("#add-question-metadata").on("click","a.question_table_edit",(function(){
// Display the question for edit
var e=jQuery(this).closest("tr").next("tr").find(".question_original_counter").text();jQuery("#add-question-actions button.add_question_answer").removeClass("hidden"),jQuery.fn.resetAddQuestionForm(),jQuery.fn.resetQuestionTable(),jQuery(this).closest("tr").next("tr").removeClass("hidden"),jQuery("#question_"+e).focus()})),
/**
   * Cancel Events Click Event - edit question.
   *
   * @since 1.0.0
   * @access public
   */
jQuery("#add-question-metadata").on("click","a.lesson_question_cancel",(function(){
// Hide the edit question panel
jQuery(this).closest("tr.question-quick-edit").addClass("hidden")})),
/**
   * Add Question Save Click Event - Ajax.
   *
   * @since 1.0.0
   * @access public
   */
jQuery("#add-new-question").on("click","a.add_question_save",(function(){var e="",t="",n="multiple-choice",i="",a="true";if(jQuery.fn.validateQuestionInput("add",jQuery(this))){
// Setup data to post
e+="quiz_id="+jQuery("#quiz_id").val(),e+="&action=add",""!=jQuery("#add-question-type-options").val()&&(n=jQuery("#add-question-type-options").val()),// End If Statement
""!=jQuery("#add-question-category-options").val()&&(i=jQuery("#add-question-category-options").val());// End If Statement
var s="question_default_fields";switch(n){case"multiple-choice":s="question_default_fields";break;case"boolean":s="question_boolean_fields";break;case"gap-fill":s="question_gapfill_fields";break;case"multi-line":s="question_multiline_fields";break;case"single-line":s="question_singleline_fields";break;case"file-upload":s="question_fileupload_fields"}// End Switch Statement
// Handle Required Fields
jQuery("#add-new-question").find("div.question_required_fields").find("input").each((function(){"radio"!=jQuery(this).attr("type")&&(e+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val()));// End If Statement
})),// Handle textarea required field
""!=jQuery("#add-new-question").find("div.question_required_fields").find("textarea").val()&&(e+="&"+jQuery("#add-new-question").find("div.question_required_fields").find("textarea").attr("name")+"="+encodeURIComponent(jQuery("#add-new-question").find("div.question_required_fields").find("textarea").val()));// End If Statement
// Handle Question Input Fields
var u=0;jQuery("#add-new-question").find("div."+s).find("input").each((function(){"radio"==jQuery(this).attr("type")?
// Only get the selected radio button
0==u&&(a=jQuery("input[name="+jQuery(this).attr("name")+"]:checked").val(),e+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(a),u++):e+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val());// End If Statement
})),// Handle Question Textarea Fields
""!=jQuery("#add_question_right_answer_essay").val()&&"question_essay_fields"==s&&(e+="&"+jQuery("#add_question_right_answer_essay").attr("name")+"="+encodeURIComponent(jQuery("#add_question_right_answer_essay").val())),// End If Statement
""!=jQuery("#add_question_right_answer_multiline").val()&&"question_multiline_fields"==s&&(e+="&"+jQuery("#add_question_right_answer_multiline").attr("name")+"="+encodeURIComponent(jQuery("#add_question_right_answer_multiline").val())),// End If Statement
e+="&question_type="+n,e+="&question_category="+i,t=jQuery("#add-question-grade").val(),e+="&question_grade="+t;var r=parseInt(jQuery("#question_counter").val());e+="&question_count="+r;var o=jQuery("#add-new-question").find(".answer_order").val();e+="&answer_order="+o;var d=jQuery("#add-new-question").find(".question_media").val();if(e+="&question_media="+d,""!=jQuery("div#add-new-question").find("div."+s).find(".answer_feedback").exists()){var l=jQuery("#add-new-question").find("div."+s).find(".answer_feedback").val();e+="&answer_feedback="+encodeURIComponent(l)}var _="no";return jQuery("div#add-new-question").find(".random_order").is(":checked")&&(_="yes"),e+="&random_order="+_,// Perform the AJAX call.
jQuery.post(ajaxurl,{action:"lesson_update_question",lesson_update_question_nonce:woo_localized_data.lesson_update_question_nonce,data:e},(function(e){
// Check for a valid response
if(e){jQuery.fn.updateQuestionCount(1,"+"),jQuery("#add-question-metadata table").append(e),jQuery.fn.resetAddQuestionForm(),jQuery.fn.checkQuizGradeType(n);var t=jQuery("#show_questions").attr("max");t++,jQuery("#show_questions").attr("max",t),jQuery.fn.scrollToElement("#lesson-quiz")}})),!1}jQuery("#add_question").focus()})),
/**
   * Add Multiple Questions Save Click Event - Ajax.
   *
   * @since 1.6.0
   * @access public
   */
jQuery("#add-new-question").on("click","a.add_multiple_save",(function(){var e="",t="",n=0;e+="quiz_id="+jQuery("#quiz_id").val(),""!=jQuery("#add-multiple-question-count").val()&&(n=parseInt(jQuery("#add-multiple-question-count").val())),// End If Statement
e+="&question_number="+n;var i=parseInt(jQuery("#add-multiple-question-count").attr("max"));// Only allow submission if selected number is not greater than the amount of questions in the category
return n>i?(alert(woo_localized_data.too_many_for_cat),jQuery("#add-multiple-question-count").focus(),!1):(""!=jQuery("#add-multiple-question-category-options").val()&&(t=jQuery("#add-multiple-question-category-options").val()),// End If Statement
e+="&question_category="+t,e+="&question_count="+parseInt(jQuery("#question_counter").val()),t&&n?(
// Perform the AJAX call.
jQuery.post(ajaxurl,{action:"lesson_add_multiple_questions",lesson_add_multiple_questions_nonce:woo_localized_data.lesson_add_multiple_questions_nonce,data:e},(function(e){
// Check for a valid response
if(e){jQuery("#add-multiple-question-category-options").val(""),jQuery("#add-multiple-question-count").val("1"),jQuery.fn.updateQuestionCount(n,"+"),jQuery("#add-question-metadata table").append(e),jQuery.fn.updateQuestionOrder();var t=jQuery("#show_questions").attr("max");t+=n,jQuery("#show_questions").attr("max",t),jQuery.fn.scrollToElement("#lesson-quiz")}})),!1):void jQuery("#add-multiple-question-category-options").focus())})),
/**
   * Edit Question Save Click Event - Ajax.
   *
   * @since 1.0.0
   * @access public
   */
jQuery("#add-question-metadata").on("click","a.question_table_save",(function(){var e,t,n="",i="";if(jQuery.fn.validateQuestionInput("edit",jQuery(this))){
// Setup the data to post
n+="quiz_id="+jQuery("#quiz_id").val(),n+="&action=save",jQuery(this).closest("td").children("input").each((function(){n+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val())})),i=jQuery(this).closest("td").find("span.question_original_counter").text(),""!=jQuery(this).closest("td").find("input.question_type").val()&&(e=jQuery(this).closest("td").find("input.question_type").val());// End If Statement
var a="question_default_fields";switch(e){case"multiple-choice":a="question_default_fields";break;case"boolean":a="question_boolean_fields";break;case"gap-fill":a="question_gapfill_fields";break;case"essay-paste":a="question_essay_fields";break;case"multi-line":a="question_multiline_fields";break;case"single-line":a="question_singleline_fields";break;case"file-upload":a="question_fileupload_fields"}// End Switch Statement
// Handle Required Fields
jQuery(this).closest("td").find("div.question_required_fields").find("input").each((function(){"radio"!=jQuery(this).attr("type")&&(n+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val()));// End If Statement
})),// Handle textarea required field
""!=jQuery(this).closest("td").find("div.question_required_fields").find("textarea").val()&&(n+="&"+jQuery(this).closest("td").find("div.question_required_fields").find("textarea").attr("name")+"="+encodeURIComponent(jQuery(this).closest("td").find("div.question_required_fields").find("textarea").val()));// End If Statement
// Handle Question Input Fields
var s=0;jQuery(this).closest("td").find("div."+a).find("input").each((function(){"radio"==jQuery(this).attr("type")?
// Only get the selected radio button
0==s&&(n+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery("input[name="+jQuery(this).attr("name")+"]:checked").val()),s++):n+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val());// End If Statement
})),// Handle Question Textarea Fields
""!=jQuery(this).closest("td").find("div."+a).find("textarea").val()&&"question_multiline_fields"==a&&(n+="&"+jQuery(this).closest("td").find("div."+a).find("textarea").attr("name")+"="+encodeURIComponent(jQuery(this).closest("td").find("div."+a).find("textarea").val())),// End If Statement
"question_fileupload_fields"==a&&jQuery(this).closest("td").find("div."+a).find("textarea").each((function(){n+="&"+jQuery(this).attr("name")+"="+encodeURIComponent(jQuery(this).val())})),// End If Statement
n+="&question_type="+e,t=jQuery(this).closest("td").find("input.question_grade").val(),n+="&question_grade="+t;var u=parseInt(jQuery("#question_counter").val());n+="&question_count="+u;var r=jQuery(this).closest("td").find(".answer_order").val();n+="&answer_order="+r;var o=jQuery(this).closest("td").find(".question_media").val();if(n+="&question_media="+o,""!=jQuery(this).closest("td").find(".answer_feedback").exists()){var d=jQuery(this).closest("td").find(".answer_feedback").val();n+="&answer_feedback="+encodeURIComponent(d)}var l="no";return jQuery(this).closest("td").find(".random_order").is(":checked")&&(l="yes"),n+="&random_order="+l,// Perform the AJAX call.
jQuery.post(ajaxurl,{action:"lesson_update_question",lesson_update_question_nonce:woo_localized_data.lesson_update_question_nonce,data:n},(function(e){
// show the user the of the succesful update:
var t,n;// update the question title :
e&&(t=jQuery("#question_"+i).closest("tr").find(".question_required_fields input[name=question] ").val(),jQuery("#question_"+i).closest("tr").prev().find(".question-title-column").html(t),// update the grade total
n=jQuery("#question_"+i).closest("tr").find(".question_required_fields input[name=question_grade] ").val(),jQuery("#question_"+i).closest("tr").prev().find(".question-grade-column").html(n),// hide the update field
jQuery("#question_"+i).closest("tr").addClass("hidden"))})),!1}})),
/**
   * Remove Question Click Event - Ajax.
   *
   * @since 1.0.0
   * @access public
   */
jQuery("#add-question-metadata").on("click","a.question_table_delete",(function(){var e="",t="";if(confirm(woo_localized_data.confirm_remove)){
// Setup data to post
e+="&action=delete",jQuery(this).closest("tr").next("tr").find("td").find("input").each((function(){"question_id"==jQuery(this).attr("name")&&(e+="&question_id="+jQuery(this).val());// End If Statement
})),e+="&quiz_id="+jQuery("#quiz_id").val(),t=jQuery(this).closest("tr").find("td.question-number span.number").text();var n=jQuery(this).closest("tbody");// Perform the AJAX call.
return jQuery.post(ajaxurl,{action:"lesson_update_question",lesson_update_question_nonce:woo_localized_data.lesson_update_question_nonce,data:e},(function(e){if(e){
// Remove the html element for the deleted question
jQuery("#add-question-metadata > table > tbody > tr").children("td").each((function(){if(jQuery(this).find("span.number").text()==t)// Exit each() to prevent multiple row deletions
return jQuery(this).closest("tr").next("tr").remove(),jQuery(this).closest("tr").remove(),!1})),jQuery.fn.updateQuestionCount(1,"-"),jQuery.fn.checkQuizGradeType(!1),jQuery.fn.updateAnswerOrder(n);var i=parseInt(jQuery("#show_questions").attr("max"));i--,jQuery("#show_questions").attr("max",i),parseInt(jQuery("#show_questions").val())>i&&jQuery("#show_questions").val(i)}})),!1}})),
/**
   * Remove Multple Questions Row Click Event - Ajax.
   *
   * @since 1.6.0
   * @access public
   */
jQuery("#add-question-metadata").on("click","a.question_multiple_delete",(function(){var e="";if(confirm(woo_localized_data.confirm_remove_multiple)){e+="question_id="+jQuery(this).attr("rel"),e+="&quiz_id="+jQuery("#quiz_id").val();var t=jQuery(this).closest("tr").find("td.question-number span.number").text(),n=jQuery(this).closest("tr").find("td.question-number span.total-number").text();// Perform the AJAX call.
return jQuery.post(ajaxurl,{action:"lesson_remove_multiple_questions",lesson_remove_multiple_questions_nonce:woo_localized_data.lesson_remove_multiple_questions_nonce,data:e},(function(e){if(e){
// Remove the html element for the deleted question
jQuery("#add-question-metadata > table > tbody > tr").children("td").each((function(){if(jQuery(this).find("span.number").text()==t)// Exit each() to prevent multiple row deletions
return jQuery(this).closest("tr").remove(),!1})),jQuery.fn.updateQuestionCount(n,"-");var i=parseInt(jQuery("#show_questions").attr("max"));i-=n,jQuery("#show_questions").attr("max",i),parseInt(jQuery("#show_questions").val())>i&&jQuery("#show_questions").val(i)}})),!1}})),
/**
   * Add Existing Questions Click Event - Ajax.
   *
   * @since 1.6.0
   * @access public
   */
jQuery("#add-new-question").on("click","a.add_existing_save",(function(){var e="",t="",n=0;if(jQuery("#existing-questions").find("input.existing-item").each((function(){if(jQuery(this).is(":checked")){var t=jQuery(this).val();e+=t+",",++n}})),e)return t="questions="+e,t+="&quiz_id="+jQuery("#quiz_id").val(),t+="&question_count="+parseInt(jQuery("#question_counter").val()),// Perform the AJAX call.
jQuery.post(ajaxurl,{action:"lesson_add_existing_questions",lesson_add_existing_questions_nonce:woo_localized_data.lesson_add_existing_questions_nonce,data:t},(function(e){if(e){jQuery.fn.updateQuestionCount(n,"+"),jQuery("#add-question-metadata table").append(e),jQuery.fn.checkQuizGradeType();var t=jQuery("#show_questions").attr("max");t+=n,jQuery("#show_questions").attr("max",t),jQuery.fn.scrollToElement("#lesson-quiz"),jQuery("#existing-questions").find("input.existing-item").each((function(){jQuery(this).removeAttr("checked")}))}})),!1})),jQuery("#existing-filter-button").click((function(){jQuery.fn.filterExistingQuestions(1)})),jQuery("#existing-pagination").on("click","a",(function(){var e=parseInt(jQuery("#existing-page").val()),t=e;jQuery(this).hasClass("prev")?t=e-1:jQuery(this).hasClass("next")&&(t=e+1),t=parseInt(t),jQuery.fn.filterExistingQuestions(t)})),jQuery("#quiz-settings").on("change","#pass_required",(function(){jQuery(this).is(":checked")?jQuery(".form-field.quiz_passmark").removeClass("hidden"):(jQuery(".form-field.quiz_passmark").addClass("hidden"),jQuery("#quiz_passmark").val(0))})),jQuery("#quiz-settings").on("change","#random_question_order",(function(){jQuery.fn.saveQuestionOrderRandom()})),jQuery("#add-question-main").on("blur",".question_answer",(function(){var e=jQuery(this).val(),t=jQuery(this);return jQuery.get(ajaxurl,{action:"question_get_answer_id",answer_value:e},(function(e){e&&(t.attr("rel",e),jQuery.fn.updateAnswerOrder(t.closest("div")))})),!1})),jQuery("#add-question-main").on("click",".add_wrong_answer_option",(function(){var e=jQuery(this).attr("rel"),t=jQuery('input[name="question_wrong_answers[]"]').length-1,n='<label class="answer" for="question_'+e+"_wrong_answer_"+ ++t+'"><span>'+woo_localized_data.wrong_colon+'</span> <input type="text" id="question_'+e+"_wrong_answer_"+t+'" name="question_wrong_answers[]" value="" size="25" class="question_answer widefat" /> <a class="remove_answer_option"></a></label>';jQuery(this).closest("div").before(n)})),jQuery("#add-question-main").on("click",".add_right_answer_option",(function(){var e=jQuery(this).attr("rel"),t=jQuery('input[name="question_right_answers[]"]').length-1,n='<label class="answer" for="question_'+e+"_right_answer_"+ ++t+'"><span>'+woo_localized_data.right_colon+'</span> <input type="text" id="question_'+e+"_right_answer_"+t+'" name="question_right_answers[]" value="" size="25" class="question_answer widefat" /> <a class="remove_answer_option"></a></label>';jQuery(this).closest("div").before(n)})),jQuery("#add-question-main").on("click",".remove_answer_option",(function(){jQuery(this).closest("label.answer").remove()})),jQuery(".multiple-choice-answers").sortable({items:"label.answer"}),jQuery(".multiple-choice-answers").on("sortstop",(function(){jQuery.fn.updateAnswerOrder(jQuery(this))})),jQuery("#sortable-questions").sortable({items:"tbody",start:function(e,t){t.placeholder.html("<tr><td colspan='5'>&nbsp;</td></tr>")}}),jQuery("#sortable-questions").on("sortstop",(function(){jQuery.fn.updateQuestionOrder(),jQuery.fn.updateQuestionRows()})),jQuery("#add-question-main").on("click",".upload_media_file_button",(function(e){e.preventDefault(),jQuery.fn.uploadQuestionMedia(jQuery(this))})),jQuery("#add-question-main").on("click",".delete_media_file_button",(function(e){e.preventDefault(),jQuery.fn.deleteQuestionMedia(jQuery(this))})),jQuery("#add-question-main").on("click",".question_media_preview",(function(e){e.preventDefault(),jQuery.fn.uploadQuestionMedia(jQuery(this).closest("div").find(".upload_media_file_button"))})),jQuery("#add-new-question .tab-content:not(:first)").addClass("hidden"),jQuery(".add-question-tabs .nav-tab").click((function(){var e=jQuery(this).attr("id")+"-content";jQuery("#add-new-question .nav-tab").removeClass("nav-tab-active"),jQuery(this).addClass("nav-tab-active"),jQuery("#add-new-question .tab-content").addClass("hidden"),jQuery("#"+e).removeClass("hidden")})),jQuery("#add-multiple-question-category-options").change((function(){var e=jQuery(this).val();jQuery.get(ajaxurl,{action:"get_question_category_limit",cat:e},(function(e){if(e){var t=parseInt(e);t&&jQuery("#add-multiple-question-count").attr("max",t)}}))})),jQuery("#existing-table th.check-column input").click((function(){jQuery("#existing-questions").find(":checkbox").attr("checked",this.checked)})),jQuery("tbody#existing-questions").on("click","tr td:not(.cb)",(function(){jQuery(this).closest("tr").find(":checkbox").each((function(){jQuery(this).prop("checked",!jQuery(this).prop("checked"))}))}))}))})
/******/();