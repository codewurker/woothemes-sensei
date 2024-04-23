/******/jQuery(document).ready((function(e){
/***************************************************************************************************
   * 	1 - Helper Functions.
   ***************************************************************************************************/
/**
   * exists checks if selector exists
   * @since  1.6.0
   * @return boolean
   */
jQuery.fn.exists=function(){return this.length>0},jQuery(".edit-date-date-picker").datepicker({
// The space and colon characters are added to allow users typing a datetime manually.
dateFormat:"yy-mm-dd :",onSelect:function(t){var r=e(this).attr("value").split(" ");t.indexOf(" :")>-1&&(t=t.substring(0,t.length-2)),r[1]&&(t=t+" "+r[1]),e(this).val(t)}}),
/***************************************************************************************************
   * 	2 - Learner Management Overview Functions.
   ***************************************************************************************************/
/**
   * Used for student enrolment hints.
   *
   * @since 3.0.0
   */
jQuery(document).tooltip({items:".sensei-tooltip",tooltipClass:"sensei-ui-tooltip",content:function(){return jQuery(this).data("tooltip")}}),
/**
   * Course Category Change Event.
   *
   * @since 1.6.0
   * @access public
   */
jQuery("#course-category-options").on("change","",(function(){var e="course_cat="+jQuery(this).val();jQuery.post(ajaxurl,{action:"get_redirect_url_learners",data:e,security:window.woo_learners_general_data.course_category_nonce},(function(e){
// Check for a response
""!=e&&(window.location=e)}))})),e(".edit-start-date-submit").click((function(){var t=e(this),r=t.attr("data-user-id"),a=t.attr("data-post-id"),n=t.attr("data-post-type"),o=t.attr("data-comment-id"),s={};if(t.parents("tr").find(".edit-date-date-picker").each((function(e,t){s[t.getAttribute("data-name")]=t.value})),r&&a&&n&&o&&0!==Object.keys(s).length){var i={user_id:r,post_id:a,post_type:n,comment_id:o,new_dates:s};e.post(ajaxurl,{action:"edit_date_started",data:i,security:window.woo_learners_general_data.edit_date_nonce},(function(e){e&&location.reload()}))}})),jQuery(".learner-action").click((function(e){var t=jQuery(this).attr("data-action"),r=jQuery(this).attr("data-provider"),a={withdraw:{message:window.woo_learners_general_data.remove_from_course_confirm,eventName:"learner_management_remove_enrollment"},enrol:{message:window.woo_learners_general_data.enrol_in_course_confirm,eventName:"learner_management_enroll"},restore_enrollment:{message:window.woo_learners_general_data.restore_enrollment_confirm,eventName:"learner_management_restore_enrollment"}}[t];if(void 0!==a){var n=a.message;if(confirm(n)){var o=r?{provider:r}:null;window.sensei_log_event(a.eventName,o)}else e.preventDefault()}})),jQuery(".learner-async-action").click((function(e){var t="",r=jQuery(this).attr("data-user-id"),a=jQuery(this).attr("data-post-id"),n=jQuery(this).attr("data-post-type"),o=jQuery(this).attr("data-action"),s=window.woo_learners_general_data.remove_generic_confirm,i={remove_progress:{lesson:window.woo_learners_general_data.remove_from_lesson_confirm,course:window.woo_learners_general_data.remove_progress_confirm,action:"remove_user_from_post"},reset_progress:{lesson:window.woo_learners_general_data.reset_lesson_confirm,course:window.woo_learners_general_data.reset_course_confirm,action:"reset_user_post"}};if(void 0!==i[o]&&(s=i[o][n],confirm(s))){var d=jQuery(this).closest("tr");r&&a&&n&&(t+="user_id="+r,t+="&post_id="+a,t+="&post_type="+n,jQuery.post(ajaxurl,{action:i[o].action,data:t,security:window.woo_learners_general_data.modify_user_post_nonce},(function(e){if(e){if("removed"===e)return void d.fadeTo(400,0,(function(){d.remove()}));"reset_progress"===o&&d.find(".graded").html(window.slgL10n.inprogress).removeClass("graded").addClass("in-progress")}})),window.sensei_log_event("learner_management_"+o))}}));var t=jQuery("select#add_learner_search"),r=jQuery("[name='add_learner_submit']").first(),a=jQuery(".sensei-learners-extra .add-student-form-container");t.select2({minimumInputLength:3,placeholder:window.woo_learners_general_data.selectplaceholder,width:"300px",ajax:{
// in wp-admin ajaxurl is supplied by WordPress and is available globaly
url:window.ajaxurl,dataType:"json",cache:!0,id:function(e){return e._id},data:function(e){
// page is the one-based page number tracked by Select2
return{term:e.term,
//search term
page:e.page||1,action:"sensei_json_search_users",security:window.woo_learners_general_data.search_users_nonce,default:""}},processResults:function(e,t){var r=[];// wrap the users inside results for select 2 usage
return jQuery.each(e,(function(e,t){jQuery.isEmptyObject(t)||r.push({id:e,text:t})})),{results:r,page:t}}}}),// end select2
t.on("change.select2",(function(){var e=t.select2("data").length<1;r.prop("disabled",e),e?a.addClass("student-search-empty"):a.removeClass("student-search-empty")}));// For mobile devices (below 783px) put the filters and bulk actions below the table, else keep above.
var n=e(".tablenav.top > .sensei-student-bulk-actions__wrapper").first(),o=e(".tablenav.bottom > .tablenav-pages"),s=e(".tablenav.top > .tablenav-pages"),i=e("#woothemes-sensei"),d=function(){var t=e(window).width(),r=t<783?o:s,a=t<783?"inherit":"";r.has(n).length||(r.before(n),i.css({position:a}))};d(),e(window).resize(d),
/***************************************************************************************************
   * 	3 - Load Select2 Dropdowns.
   ***************************************************************************************************/
// Learner Management Drop Downs
jQuery("#course-category-options").exists()&&jQuery("#course-category-options").select2()}));