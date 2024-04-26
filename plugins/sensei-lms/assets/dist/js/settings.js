/******/jQuery(document).ready((function(e){
/***** Settings Tabs *****/
const n=e("#woothemes-sensei.sensei-settings");
// Show the current section.
/**
   * Update the hidden referer field.
   *
   * @param {string} url
   */
function t(e){const t=new URL(e);n.find('input[name="_wp_http_referer"]').val(t.pathname+t.search)}
/**
   * Hide all sections.
   */
/**
   * Show a settings section.
   *
   * @param {string} sectionId
   */
function i(e){n.find("section").hide(),
/**
   * Hide the header and submit button if there are no settings in the section.
   *
   * @param {string} sectionId
   */
function(e){
// Hide header and submit if there is not settings form in section
r("woocommerce-settings"===e?!n.find("#woocommerce-settings tr").length&&n.find("#sensei-promo-banner"):"sensei-content-drip-settings"===e&&(!n.find("#sensei-content-drip-settings tr").length&&n.find("#sensei-promo-banner")))}
/**
   * Hide the header and submit button.
   *
   * @param {boolean} shouldHide
   */(e),n.find(`section#${e}`).show(),n.find("a.tab.current").removeClass("current"),n.find(`a.tab[href*="tab=${e}"]`).addClass("current"),sensei_log_event("settings_view",{view:e}),
/**
   * Mark a section as visited.
   * This is used to track which sections are being used.
   *
   * @param {string} sectionId
   */
function(e){const n=new FormData;n.append("action","sensei_settings_section_visited"),n.append("section_id",e),n.append("nonce",window.senseiSettingsSectionVisitNonce),fetch(ajaxurl,{method:"POST",body:n})}
/***** Colour pickers *****/(e)}
/**
   * Get section id from the current URL.
   *
   * @returns {string}
   */
/**
   * Get section id from a URL.
   *
   * @param {string} url
   * @returns {string}
   */
function o(e){return new URLSearchParams(e).get("tab")||e.split("#")[1]||"default-settings"}
/**
   * Check if a section exists.
   *
   * @param {string} sectionId
   * @returns {boolean}
   */function s(n){return e("#"+n).length>0}function r(e){e?(n.find("#submit").hide(),n.find("h2").hide()):(n.find("#submit").show(),n.find("h2").show())}i(o(window.location.href)),
// Switch to the section when the tab is clicked.
n.find("a.tab:not(.external)").on("click",(function(n){const r=e(this).attr("href"),c=o(r);if(!s(c))return!0;
/**
   * Change the current browser URL.
   *
   * @param {string} url
   */
var a;a=r,window.history.pushState({},null,a),t(r),i(c),n.preventDefault()})),
// Change the section when the user navigates the session history.
addEventListener("popstate",(e=>{const n=o(window.location.href);s(n)&&(t(window.location.href),i(n))})),jQuery(".colorpicker").hide(),jQuery(".colorpicker").each((function(){jQuery(this).farbtastic(jQuery(this).prev(".color"))})),jQuery(".color").click((function(){jQuery(this).next(".colorpicker").fadeIn()})),jQuery(document).mousedown((function(){jQuery(".colorpicker").each((function(){"block"==jQuery(this).css("display")&&jQuery(this).fadeOut()}))}))}));