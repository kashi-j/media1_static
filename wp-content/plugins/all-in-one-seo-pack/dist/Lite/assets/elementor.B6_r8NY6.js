import"./js/vue2.B3EPUlhG.js";import{Y as v,h as k}from"./js/vue.esm-bundler.DzelZkHk.js";import{c as E,b as S}from"./js/vue-router.U-UdjH5a.js";import{e as _,l as I}from"./js/index.DmkhSBhC.js";import{l as C}from"./js/index.DX4OhBfI.js";import{l as A}from"./js/index.3BJ3ZnWB.js";import{b as D,f as P,v as x,l as L}from"./js/links.CKSg78-h.js";import{g as O,m as h,T as B}from"./js/postSlug.D1i5fFFO.js";import{i as U}from"./js/DatePicker.9jCaxc1v.js";import{i as $}from"./js/isEmpty.BWu-tYPE.js";import{s as m,_ as s}from"./js/default-i18n.BtxsUzQk.js";import{A as p}from"./js/App.CoNAsNOl.js";import"./js/translations.B4Iz5cbd.js";import"./js/constants.DARe-ccJ.js";import"./js/Caret.Cuasz9Up.js";import"./js/_plugin-vue_export-helper.BN1snXvA.js";import"./js/isArrayLikeObject.CkjpbQo7.js";import"./js/metabox.BW1QyeRU.js";import"./js/cleanForSlug.C_GG_Tvc.js";import"./js/toString.EVG10Qqs.js";import"./js/_baseTrim.BYZhh0MR.js";import"./js/_stringToArray.DnK4tKcY.js";import"./js/get.CmvQfcJ_.js";import"./js/isUndefined.2CoGFx8R.js";import"./js/_getTag.0B4_HiWU.js";import"./js/debounce.vOAperWf.js";import"./js/toNumber.DHWd7Z3r.js";/* empty css                */import"./js/allowed.B_mIy271.js";import"./js/params.B3T1WKlC.js";import"./js/JsonValues.D25FTfEu.js";import"./js/SettingsRow.B0N4hwjp.js";import"./js/Row.ou4tdPuA.js";import"./js/Checkbox.CfGJSeWE.js";import"./js/Checkmark.Du5wcsnR.js";import"./js/ScrollAndHighlight.DCpqKtXJ.js";import"./js/LogoGear.oMlhtqmB.js";import"./js/Tabs.Cl9YKSoz.js";import"./js/TruSeoScore.-L7x872T.js";import"./js/Ellipse.HvxcRElJ.js";import"./js/Information.Dx9dnFtu.js";import"./js/Slide.BfXXFx9A.js";import"./js/Index.6gbvf_mk.js";import"./js/Settings.CvT2HtRn.js";import"./js/MaxCounts.DHV7qSQX.js";import"./js/Tags.BcJqtOJO.js";import"./js/tags.BOsOOXAU.js";import"./js/regex.C2CBDGQi.js";import"./js/toFinite.CtNJVvVF.js";import"./js/Tooltip.DcUmvaHX.js";import"./js/Plus.CShy191p.js";import"./js/Eye.DFiNxd3l.js";import"./js/RadioToggle.XiBFFWmC.js";import"./js/GoogleSearchPreview.C5aCQaFX.js";import"./js/strings.gPxlDykU.js";import"./js/isString.Dmb68Xbt.js";import"./js/HtmlTagsEditor.DRjNQQYX.js";import"./js/Editor.lV8823Bb.js";import"./js/UnfilteredHtml.D-19NKqQ.js";import"./js/ProBadge.Dgq0taM8.js";import"./js/popup.Dv7cb5WI.js";import"./js/license.8zyTf6Rb.js";import"./js/upperFirst.Cx8cdEgZ.js";import"./js/addons.Bhqo_sme.js";import"./js/Blur.B433XVqJ.js";import"./js/Index.Ck0NNxBQ.js";import"./js/WpTable.EicK-ih4.js";import"./js/Table.B2KnjpXq.js";import"./js/numbers.ursUutt1.js";import"./js/PostTypes.Cef6XkQ_.js";import"./js/InternalOutbound.CfM4VZLz.js";import"./js/RequiredPlans.BWoa4M_T.js";import"./js/Image.BF1-Ygnr.js";import"./js/FacebookPreview.BiNQJi-p.js";import"./js/Img.sJ8H0e44.js";import"./js/Profile.BSy0ZIgG.js";import"./js/ImageUploader.DrSIpvuy.js";import"./js/TwitterPreview.DHa9D5iN.js";import"./js/Book.iWCUYtMr.js";import"./js/Build.CQX7DDZt.js";import"./js/Redirects.Bud-ttI3.js";import"./js/Index.BM2l6rZx.js";import"./js/External.bx7ZSfw_.js";import"./js/Exclamation.BU2oeqa4.js";import"./js/Gear.CzHv0eD2.js";import"./js/Date.Bc79vv_Y.js";import"./js/Card.C6Yzm1Gr.js";import"./js/Upsell.DRezA3oa.js";class T extends window.$e.modules.hookUI.Base{constructor(t,n,o){super(),this.hook=t,this.id=n,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}class H extends window.$e.modules.hookData.Base{constructor(t,n,o){super(),this.hook=t,this.id=n,this.callback=o}getCommand(){return this.hook}getId(){return this.id}apply(){return this.callback()}}function c(e,t,n){window.$e.hooks.registerUIAfter(new T(e,t,n))}function M(e,t,n){window.$e.hooks.registerDataAfter(new H(e,t,n))}let l={},d=!1;const u=()=>{const e=window.elementor.documents.getCurrent();if(!["wp-post","wp-page"].includes(e.config.type))return;const t={...l},n=O();U(t,n)||(l=n,h())},R=()=>{const e=D();$(e.currentPost)||window.elementor.config.document.id===window.elementor.config.document.revisions.current_id&&e.saveCurrentPost(e.currentPost).then(()=>{const t=P(),n=x();t.isUnlicensed||n.fetch()})},q=()=>{window.$e.internal("document/save/set-is-modified",{status:!0})},V=()=>{d||(d=!0,c("editor/documents/attach-preview","aioseo-content-scraper-attach-preview",u),c("document/save/set-is-modified","aioseo-content-scraper-on-modified",u),M("document/save/save","aioseo-save",R),_.on("postSettingsUpdated",q))},j=({elementor:e,elementorModules:t})=>{if(e.config.user.introduction["aioseo-introduction"]===!0)return;const n=new t.editor.utils.Introduction({introductionKey:"aioseo-introduction",dialogType:"alert",dialogOptions:{id:"aioseo-introduction",headerMessage:m(s("New: %1$s %2$s integration","all-in-one-seo-pack"),"AIOSEO","Elementor"),message:m(s("You can now manage your SEO settings inside of %1$s via %2$s before you publish your post!","all-in-one-seo-pack"),"Elementor","All in One SEO"),position:{my:"center center",at:"center center"},strings:{confirm:s("Got It!","all-in-one-seo-pack")},hide:{onButtonClick:!1},onConfirm:()=>{n.setViewed(),n.getDialog().hide()}}});n.show()},r={icon:"eicon-calendar",name:"aioseo-limit-modified-date",param:"aioseo_limit_modified_date",title:s("Save (Don't Modify Date)","all-in-one-seo-pack")},f=e=>{const t=document.getElementById(`elementor-panel-footer-sub-menu-item-${r.name}`);t&&(t.classList.remove("elementor-disabled"),e||t.classList.add("elementor-disabled"))},W=({elementor:e,elementorCommon:t,$e:n})=>{e.once("preview:loaded",function(){e.getRegion("panel").currentView.footer.currentView.addSubMenuItem("saver-options",{icon:r.icon,name:r.name,title:r.title,callback:o=>{o.currentTarget.classList.contains("elementor-disabled")||(t.ajax.requestConstants[r.param]=!0,n.run("document/save/default"))}})}),e.on("document:loaded",o=>{f(o.container.settings.get("post_status")==="draft")}),n.commandsInternal.on("run:after",(o,a,b)=>{switch(a){case"document/save/set-is-modified":f(b.status);break;case"document/save/save":case"document/save/default":delete t.ajax.requestConstants[r.param];break}})};let i=null,w=!1;const Y=()=>{let e=window.elementor.getPreferences("ui_theme")||"auto";e==="auto"&&(e=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),document.body.classList.forEach(t=>{t.startsWith("aioseo-elementor-")&&document.body.classList.remove(t)}),document.body.classList.add("aioseo-elementor-"+e)},z=({elementor:e,$e:t,Marionette:n})=>{t.routes.on("run:after",function(o,a){Y(),a==="panel/page-settings/aioseo"&&(i==null||i.unmount(),i=g("#elementor-panel-page-settings-controls"))}),e.modules.layouts.panel.pages.menu.Menu.addItem({name:"aioseo",icon:"aioseo aioseo-element-menu-icon aioseo-element-menu-icon-"+e.getPreferences("ui_theme"),title:"All in One SEO",type:"page",callback:()=>{try{t.routes.run("panel/page-settings/aioseo")}catch{t.routes.run("panel/page-settings/settings"),t.routes.run("panel/page-settings/aioseo")}}},"more"),e.once("preview:loaded",function(){t.components.get("panel/elements").addTab("aioseo",{title:"AIOSEO"})}),e.hooks.addFilter("panel/elements/regionViews",o=>(o.aioseo={region:o.global.region,view:n.ItemView.extend({template:!1,id:"elementor-panel-aioseo",className:"aioseo-elementor aioseo-sidebar-panel",initialize(){document.getElementById("elementor-panel-elements-search-area").hidden=!0},onShow(){i==null||i.unmount(),i=g("#elementor-panel-aioseo")},onDestroy(){document.getElementById("elementor-panel-elements-search-area").hidden=!1}}),options:{}},o))},g=e=>{const t=document.querySelector(e);t.classList.add("edit-post-sidebar","aioseo-elementor-panel"),t.appendChild(document.createElement("div"));const n=E({history:S(),routes:[{path:"/",component:p}]});let o=v({name:"Standalone/Elementor",data(){return{tableContext:window.aioseo.currentPost.context,screenContext:"sidebar"}},render:()=>k(p)});return o=I(o),o=C(o),o=A(o),o.use(n),n.app=o,L(o,n),V(),o.config.globalProperties.$truSeo=new B,o.mount(`${e} > div`),h(),o},y=()=>{z(window),j(window),W(window)};window.elementor&&(setTimeout(y),w=!0);(function(e){w||e(window).on("elementor:init",()=>{window.elementor.on("panel:init",()=>{setTimeout(y)})})})(window.jQuery);