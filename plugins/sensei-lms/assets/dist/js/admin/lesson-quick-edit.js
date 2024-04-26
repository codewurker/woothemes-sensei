/******/(()=>{var e,i;e=jQuery,i=window.inlineEditPost.edit,
// and then we overwrite the function with our own code
window.inlineEditPost.edit=function(n){
// "call" the original WP edit function
// we don't want to leave WordPress hanging
i.apply(this,arguments);
// now we take care of our business
// get the post ID
var t=0;if(n instanceof Element&&(t=parseInt(this.getId(n))),t>0){
// define the edit row
var r=e("#edit-"+t),s=window["sensei_quick_edit_"+t];
//on the save button click, set senseiFieldValues to the values user entered in the form fields
r.find(".save").on("click",(function(){e(".sensei-quiz-settings :input",r).each((function(){const i=e(this).attr("name"),n=e(this).val();s[i]=n}))})),
// populate the data
//data is localized in sensei_quick_edit object
"on"==s.pass_required||"1"==s.pass_required?s.pass_required=1:s.pass_required=0,"on"==s.enable_quiz_reset||"1"==s.enable_quiz_reset?s.enable_quiz_reset=1:s.enable_quiz_reset=0,"auto"===s.quiz_grade_type||"1"===s.quiz_grade_type?s.quiz_grade_type=1:s.quiz_grade_type=0,"yes"==s.random_question_order||"1"==s.random_question_order?s.random_question_order=1:s.random_question_order=0;for(const[i,n]of Object.entries(s)){var a=e(':input[name="'+i+'"]',r);"INPUT"==a.prop("nodeName")?a.val(parseInt(n)):e(':input[name="'+i+'"] option[value="'+n+'"] ',r).attr("selected",!0)}}}})
/******/();