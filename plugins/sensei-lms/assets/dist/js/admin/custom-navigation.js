/******/!function(){var e=document.querySelector("#sensei-custom-navigation");if(e){// Move the custom navigation to the top of the page.
document.querySelector("#wpbody-content > .wrap").prepend(e);// Find the default heading and hide it.
var n=document.querySelector(".wrap > h1.wp-heading-inline");n&&(n.style.display="none");// Find the default "Add New" button and hide it.
var t=document.querySelector(".wrap > a.page-title-action");t&&(t.style.display="none")}}();