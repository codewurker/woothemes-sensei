/******/
/**
 * Lesson bulk edit screen save functionality
 */
jQuery((function(e){e("#the-list").on("click","#bulk-edit #bulk_edit ",(function(){
// define the bulk edit row
var i=e("#bulk-edit"),s=new Array;// get the selected post ids that are being edited
i.find("#bulk-titles-list button").each((function(){s.push(e(this).attr("id").replace(/^(_)/i,""))}));// get the data:
//security as the wordpress nonce
var n=e('input[name="_edit_lessons_nonce"]').val(),t=i.find("#sensei-edit-lesson-course").val(),d=i.find("#sensei-edit-lesson-complexity").val(),a=i.find("#sensei-edit-lesson-pass-required").val(),_=i.find("#sensei-edit-quiz-pass-percentage").val(),l=i.find("#sensei-edit-enable-quiz-reset").val(),o=i.find("#sensei-edit-show-questions").val(),r=i.find("#sensei-edit-random-question-order").val(),u=i.find("#sensei-edit-quiz-grade-type").val();// selected course value
// save the data
e.ajax({url:ajaxurl,
// this is a variable that WordPress has already defined for us
type:"POST",async:!1,cache:!1,data:{action:"save_bulk_edit_book",
// this is the name of our WP AJAX function that we'll set up next
security:n,
// sending the field values
sensei_edit_lesson_course:t,sensei_edit_complexity:d,sensei_edit_pass_required:a,sensei_edit_pass_percentage:_,sensei_edit_enable_quiz_reset:l,sensei_edit_show_questions:o,sensei_edit_random_question_order:r,sensei_edit_quiz_grade_type:u,
// post ids to apply the changes to
post_ids:s}})}))}));