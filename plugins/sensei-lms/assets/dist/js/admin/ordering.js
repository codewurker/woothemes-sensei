/******/jQuery(document).ready((function(t){const e=t(".sortable-lesson-list"),s=t(".sortable-course-list");e.sortable({connectWith:".sortable-lesson-list"}),s.sortable(),t("#lesson-order-course").select2({width:"resolve"}),t(".sortable-tab-list").disableSelection(),
/* Order Courses */
s.on("sortstop",(function(){var e="";t(this).find(".course").each((function(s){s>0&&(e+=","),e+=t(this).find("span").attr("rel")})),t('input[name="course-order"]').val(e)})),
/* Order Lessons */
e.on("sortstop",((e,s)=>{const o=t(s.item[0]),n=o.parent().data("module-id");o.find("input").val(n)}))}));