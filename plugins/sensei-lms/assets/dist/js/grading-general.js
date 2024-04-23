/******/(()=>{// webpackBootstrap
/******/"use strict";
/******/var e,__,r={
/***/65736:
/***/e=>{e.exports=window.wp.i18n;
/***/
/******/}},n={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function a(e){
/******/ // Check if module is in cache
/******/var t=n[e];
/******/if(void 0!==t)
/******/return t.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=n[e]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return r[e](i,i.exports,a),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/a.n=e=>{
/******/var r=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return a.d(r,{a:r}),r;
/******/},
/******/ // define getter functions for harmony exports
/******/a.d=(e,r)=>{
/******/for(var n in r)
/******/a.o(r,n)&&!a.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:r[n]})
/******/;
/******/},
/******/a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)
/******/,
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
e=a(65736),__=e.__,jQuery(document).ready((function(e){
/***************************************************************************************************
   * 	1 - Helper Functions.
   ***************************************************************************************************/
/**
   * exists checks if selector exists
   * @since  1.2.0
   * @return boolean
   */
jQuery.fn.exists=function(){return this.length>0},
/**
   * Calculates the total grade based on the questions already graded
   * @return void
   */
jQuery.fn.calculateTotalGrade=function(){var e,r,n=0,a=0;jQuery(".question_box.user_right").each((function(){e=jQuery(this).find(".question_id").val(),r=parseInt(jQuery(this).find("#question_"+e+"_grade").val()),n+=r,a++})),jQuery(".question_box.user_wrong").each((function(){a++})),jQuery("#total_graded_questions").val(a);var t=parseInt(jQuery("#total_questions").val()),i=parseInt(jQuery("#quiz_grade_total").val()),s="0";0<i&&(s=parseFloat(100*n/i).toFixed(2)),s=s.replace(".00",""),jQuery("#total_grade").val(n),jQuery(".total_grade_total").html(n),jQuery(".total_grade_percent").html(s),jQuery(".quiz_grade_total").html(i),t==a?(jQuery("#all_questions_graded").val("yes"),jQuery(".grade-button").val(__("Grade","sensei-lms"))):(jQuery("#all_questions_graded").val("no"),jQuery(".grade-button").val(__("Save","sensei-lms")))},jQuery.fn.updateFeedback=function(){jQuery(".question_box").each((function(){var e=jQuery(this).find(".question_id").val(),r=parseInt(jQuery(this).find("#question_"+e+"_grade").val()),n=jQuery(this).find(".answer-feedback-correct"),a=jQuery(this).find(".answer-feedback-incorrect");n.toggle(0<r),a.toggle(!r)}))},
/**
   * Automatically grades questions where possible
   * @return void
   */
e.fn.autoGrade=function(){e(".question_box").each((function(){var r,n,a=e(this),t=!1;// Only grade questions that haven't already been graded.
if(a.hasClass("user_right")||a.hasClass("user_wrong")||a.hasClass("zero-graded"))jQuery(this).hasClass("zero-graded")&&(a.find(".grading-mark.icon_wrong input").attr("checked",!1),a.find(".grading-mark.icon_right input").attr("checked",!1),a.find("input.question-grade").val(0));else// Auto-grading
if(a.addClass("ungraded"),a.hasClass("gap-fill")?(r=a.find(".user-answer").contents().find(".highlight").html(),n=a.find(".correct-answer .highlight").html()):(r=a.find(".user-answer").contents().find("body").map((function(){return this.innerHTML.trim()})).toArray().join("<br>"),n=a.find(".correct-answer").html()),r=r.trim(),n=n.trim(),a.hasClass("auto-grade")){
// Split answers to multiple choice questions into an array since there may be
// multiple correct answers.
if(a.hasClass("multiple-choice")){var i=r.split("<br>"),s=n.split("<br>");t=!0,i.forEach((function(r){-1===e.inArray(r,s)&&(t=!1)})),i.length!==s.length-1&&(t=!1)}else r=r.split("<br>")[0],n=n.split("<br>")[0];t||r===n?(
// Right answer
a.addClass("user_right").removeClass("user_wrong").removeClass("ungraded"),a.find(".grading-mark.icon_right input").attr("checked",!0),a.find(".grading-mark.icon_wrong input").attr("checked",!1),a.find("input.question-grade").val(a.find("input.question_total_grade").val())):(
// Wrong answer
a.addClass("user_wrong").removeClass("user_right").removeClass("ungraded"),a.find(".grading-mark.icon_wrong input").attr("checked",!0),a.find(".grading-mark.icon_right input").attr("checked",!1),a.find("input.question-grade").val(0))}else
// Manual grading
a.find(".grading-mark.icon_wrong input").attr("checked",!1),a.find(".grading-mark.icon_right input").attr("checked",!1),a.removeClass("user_wrong").removeClass("user_right");// Question with a grade value of 0.
})),e.fn.calculateTotalGrade(),e.fn.updateFeedback()},// Calculate total grade on page load to make sure everything is set up correctly
jQuery.fn.autoGrade(),
/**
   * Resets all graded questions.
   */
jQuery.fn.resetGrades=function(){jQuery(".question_box").find(".grading-mark.icon_wrong input").attr("checked",!1),jQuery(".question_box").find(".grading-mark.icon_right input").attr("checked",!1),jQuery(".question_box").removeClass("user_wrong").removeClass("user_right").removeClass("ungraded"),jQuery(".question-grade").val("0"),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()},jQuery.fn.getQueryVariable=function(e){for(var r=window.location.search.substring(1).split("&"),n=0;n<r.length;n++){var a=r[n].split("=");if(a[0]==e)return a[1]}return!1},
/***************************************************************************************************
   * 	2 - Grading Overview Functions.
   ***************************************************************************************************/
/**
   * Course Change Event.
   *
   * @since 1.3.0
   * @access public
   */
jQuery("#grading-course-options").on("change","",(function(){
// Populate the Lessons select box
var e=jQuery(this).val();return jQuery.get(ajaxurl,{action:"get_lessons_dropdown",course_id:e},(function(e){
// Check for a response
""!=e&&(
// Empty the results div's
jQuery("#learners-to-grade").empty(),jQuery("#learners-graded").empty(),// Populate the Lessons drop down
jQuery("#grading-lesson-options").empty().append(e),// Add Chosen to the drop down
jQuery("#grading-lesson-options").exists()&&(
// Show the Lessons label
jQuery("#grading-lesson-options-label").show(),jQuery("#grading-lesson-options").trigger("change")))})),!1})),
/**
   * Lesson Change Event.
   *
   * @since 1.3.0
   * @access public
   */
jQuery("#grading-lesson-options").on("change","",(function(){
// Populate the Lessons select box
var e=jQuery(this).val(),r=jQuery("#grading-course-options").val(),n=jQuery.fn.getQueryVariable("view");// Perform the AJAX call to get the select box.
return jQuery.get(ajaxurl,{action:"get_redirect_url",course_id:r,lesson_id:e,view:n},(function(e){
// Check for a response
""!=e&&(window.location=e)})),!1})),
/***************************************************************************************************
   * 	3 - Grading User Quiz Functions.
   ***************************************************************************************************/
/**
   * Grade change event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".grading-mark").on("change","input",(function(){"right"==this.value?(jQuery("#"+this.name+"_box").addClass("user_right").removeClass("user_wrong ungraded"),jQuery("#"+this.name+"_box").find("input.question-grade").val(jQuery("#"+this.name+"_box").find("input.question_total_grade").val())):(jQuery("#"+this.name+"_box").addClass("user_wrong").removeClass("user_right ungraded"),jQuery("#"+this.name+"_box").find("input.question-grade").val(0)),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()})),
/**
   * Grade value change event
   *
   * @since 1.4.0
   * @access public
   */
jQuery(".question-grade").on("change","",(function(){var e=parseInt(jQuery(this).val()),r=this.id.replace("_grade","");e>0?(jQuery("#"+r+"_box").addClass("user_right").removeClass("user_wrong"),jQuery("#"+r+"_box .grading-mark input."+r+"_right_option").attr("checked","checked"),jQuery("#"+r+"_box .grading-mark input."+r+"_wrong_option").attr("checked",!1)):(jQuery("#"+r+"_box").addClass("user_wrong").removeClass("user_right"),jQuery("#"+r+"_box .grading-mark input."+r+"_wrong_option").attr("checked","checked"),jQuery("#"+r+"_box .grading-mark input."+r+"_right_option").attr("checked",!1)),jQuery.fn.calculateTotalGrade(),jQuery.fn.updateFeedback()})),
/**
   * Grade reset event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".sensei-grading-main .buttons").on("click",".reset-button",(function(){jQuery.fn.resetGrades()})),
/**
   * Auto grade event
   *
   * @since 1.3.0
   * @access public
   */
jQuery(".sensei-grading-main .buttons").on("click",".autograde-button",(function(){
// Toggle manual-grade questions to auto-grade for question types that are able to be
// automatically graded, so that they will now be scored.
e(".boolean.manual-grade, .multiple-choice.manual-grade, .gap-fill.manual-grade").addClass("auto-grade").removeClass("manual-grade"),jQuery.fn.autoGrade()})),jQuery(".sensei-grading-main").length&&jQuery.fn.updateFeedback(),
/***************************************************************************************************
   * 	4 - Load Select2 Dropdowns.
   ***************************************************************************************************/
// Grading Overview Drop Downs
jQuery("#grading-course-options").exists()&&jQuery("#grading-course-options").select2(),jQuery("#grading-lesson-options").exists()&&jQuery("#grading-lesson-options").select2()}))})
/******/();