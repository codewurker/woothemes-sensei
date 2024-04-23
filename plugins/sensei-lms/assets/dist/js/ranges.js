/******/jQuery(document).ready((function(){jQuery("select.range-input").each((function(){if(jQuery(this).attr("id")){var e=jQuery(this),t=e.val(),i=jQuery(this).find("option").length,d=jQuery("<div></div>").addClass("slider-value"),n=jQuery("<div></div>").addClass("slider").insertAfter(e).slider({min:1,max:parseInt(i),range:"min",value:e[0].selectedIndex+1,slide:function(t,i){e[0].selectedIndex=i.value-1,jQuery(this).parents("td").find(".slider-value").text(e.val())}});// The select element being targeted.
d.text(t),// Fill the slider value element with the correct slider value.
n.after(d),// Insert the slider value display.
e.hide(),// Hide the select element.
// When the select element changes, update the slider value. The select element is changed by the slider.
e.change((function(){n.slider("value",this.selectedIndex+1),jQuery(this).parents("td").find(".slider-value").text(jQuery(this).val())}))}}))}));