/******/jQuery(document).ready((function(t){var e=t(".sortable-lesson-list"),o=t(".sortable-course-list");e.sortable({connectWith:".sortable-lesson-list"}),o.sortable(),t("#lesson-order-course").select2({width:"resolve"}),t(".sortable-tab-list").disableSelection(),
/* Order Courses */
o.on("sortstop",(function(){var e="";t(this).find(".course").each((function(o){o>0&&(e+=","),e+=t(this).find("span").attr("rel")})),t('input[name="course-order"]').val(e)})),
/* Order Lessons */
e.on("sortstop",(function(e,o){var s=t(o.item[0]),n=s.parent().data("module-id");s.find("input").val(n)}))}));