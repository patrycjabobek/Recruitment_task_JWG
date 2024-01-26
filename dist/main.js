(()=>{"use strict";var e={315:(e,t,i)=>{i.d(t,{Z:()=>s});var r=i(81),o=i.n(r),n=i(645),a=i.n(n)()(o());a.push([e.id,'html{height:100%}body{font-family:"arboria",sans-serif;color:#1b1b1b;background-color:#f5cdd5;min-height:100%;margin:0;display:grid;grid-template-areas:"nav" "main" "joboffers" "jobList" "qanda" "cta" "footer"}a{text-decoration:none}a,h3{color:#000}input,textarea{box-sizing:border-box;font-style:normal;font-weight:normal;width:100%;max-width:100%;border:1px solid #d1d1d1;color:#1f1f1f;background-color:#fff;height:44px;padding:10px 16px}label{font-size:16px;line-height:20px;font-weight:400;margin-bottom:6px;color:#1b1b1b;display:inline-block;font-style:normal;word-break:break-word}hr{margin-bottom:15px;background-image:linear-gradient(90deg, #1db383, transparent);width:86px;height:3px;display:inline-block;border:none}footer{background-color:#f0f2f8;color:#944385;margin-top:0;overflow:auto;padding:20px;text-align:center}.button{color:#fff;padding:10px 40px;display:inline-block;border-radius:50px;font-weight:700;border:none;cursor:pointer}.button--primary{background-color:#1db383;transition:.3s}.button--primary:hover{background-color:linear-gradient(145deg, rgba(50, 107, 185, 0.3), #326ab7);background-image:linear-gradient(145deg, rgba(50, 107, 185, 0.3), #326ab7);transition:.3s}nav ul li a,nav ul li a:after,nav ul li a:before{transition:all .5s}.page-nav{grid-area:nav;display:grid;grid-template-columns:5% auto 1fr 5%;grid-template-rows:auto;align-items:center;padding-top:16px;grid-template-areas:". logo burgerBtn ." "nav nav nav nav"}.page-nav .burger-menu{position:relative;grid-area:burgerBtn;width:30%;justify-self:right;border:none;background:none;padding:0;margin:0;cursor:pointer}.page-nav .burger-menu span{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.page-nav .burger-menu span.isOpen{display:block}.page-nav__logo{grid-area:logo}.page-nav__nav{grid-area:nav;background-color:#26bbe1;display:none;height:100vh;margin-top:10%}.page-nav__nav ul{list-style:none;text-align:center;padding:0}.page-nav__nav ul li{display:flex;flex-direction:column}.page-nav__nav ul li a{font-size:1.5rem;font-weight:500;line-height:normal;z-index:1;padding:8px 12px;color:#d1e85a}.page-nav__nav ul li a:hover{color:#fff}.page-nav__nav ul li a:hover:after{opacity:1;visibility:visible;height:100%}.section-wrap{display:grid;grid-template-rows:auto}.section-wrap__content{grid-column:2/3;color:#944385}.section-main{grid-area:main;grid-template-columns:12% 1fr 12%;position:relative;text-align:center;min-height:100vh}.section-main__content{display:grid;grid-template-columns:12% 1fr 12%;grid-template-rows:auto;grid-template-areas:". headerGrid ." ". textGrid ." ". more ."}.section-main__content-header{grid-area:headerGrid;align-self:center}.section-main__content-header h1{font-size:3rem;font-weight:700;color:#fff;margin:1rem 0;text-align:center}.section-main__content-text{grid-area:textGrid;display:flex;justify-content:center;align-self:self-end}.section-main__content-text h3{color:#944385;text-align:center;font-size:1.25rem;font-weight:700;line-height:1.5rem;width:75%;margin:0 auto 10% auto}.section-main__content-more{grid-area:more;cursor:pointer}.section-main__content-more #arrow{transition:fill .3s ease}.section-main__content-more #arrow:hover{fill:#fff}.section-joboffers{grid-area:joboffers;position:relative;text-align:center;background-color:#fff}.section-joboffers__content{display:grid;grid-template-columns:12% 1fr 12%;grid-template-rows:auto;grid-template-areas:". headerGrid ." ". textGrid ." ". more .";min-height:100vh}.section-joboffers__content-header{grid-area:headerGrid;align-self:center}.section-joboffers__content-header h1{font-size:3rem;font-weight:700;margin:1rem 0;color:#fff;color:#000;text-align:center}.section-joboffers__content-text{grid-area:textGrid;display:flex;justify-content:center;align-self:self-end}.section-joboffers__content-text h3{color:#000;text-align:center;font-size:1.25rem;font-weight:700;line-height:1.5rem;width:75%;margin:0 auto 10% auto}.section-joboffers__content-more{grid-area:more;cursor:pointer;display:flex;justify-content:center}.section-joboffers__content-more h3{color:#944385}.section-joboffers__content-more:hover{transition:fill .3s ease}.section-joboffers__content-more:hover .arrow,.section-joboffers__content-more:hover h3{color:#000}.section-joboffers__content-more:hover .arrow rect,.section-joboffers__content-more:hover h3 rect{fill:#000}.section-joboffers__list{grid-area:jobList;display:grid}.section-joboffers__list-item{position:relative;border:1px solid #d1e85a;padding:8%;text-align:left;cursor:pointer;transition:.3s ease}.section-joboffers__list-item__salary{position:absolute;color:#007895;text-align:right;font-size:2.875rem;font-weight:700;right:5%}.section-joboffers__list-item__info{line-height:1.625rem}.section-joboffers__list-item__info h2{margin-bottom:0}.section-joboffers__list-item__info h4{margin-top:0;font-weight:400}.section-joboffers__list-item__description h4{margin-bottom:0}.section-joboffers__list-item__description p{margin:0}.section-joboffers__list-item__more{float:inline-end}.section-joboffers__list-item__more a{font-weight:700;font-size:1.375rem}.section-joboffers__list-item__more a svg{padding-left:10px}.section-joboffers__list-item:hover{border-radius:3.125rem;background:#d1e85a}.section-qna{grid-area:qanda;position:relative;text-align:center;min-height:100vh;background:#26bbe1}.section-qna__content{display:grid;grid-template-columns:12% .5fr .5fr 12%;grid-template-rows:auto;grid-template-areas:". headerGrid headerGrid." ". employer employee." ". questions questions ."}.section-qna__content-header{grid-area:headerGrid;align-self:center}.section-qna__content-header h1{font-size:3rem;font-weight:700;color:#fff;margin:1rem 0;text-align:center}.section-qna__content-employer{grid-area:employer;cursor:pointer}.section-qna__content-employer #arrow{transition:fill .3s ease}.section-qna__content-employer #arrow:hover{fill:#fff}.section-qna__content-employer__questions{grid-area:questions}.section-qna__content-employee{grid-area:employee}.section-qna__content-employee__questions{grid-area:questions}.section-cta{grid-area:cta;min-height:30vh;position:relative;overflow:hidden}.section-cta__content{display:grid;grid-template-columns:60vw;grid-template-rows:auto;text-align:center;justify-content:center;background-size:cover;margin:0 -10vw;padding:70px 0}footer{grid-area:footer}#snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px}#snackbar.show{visibility:visible;-webkit-animation:fadein .5s,fadeout .5s 2.5s;animation:fadein .5s,fadeout .5s 2.5s}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}.slider{height:500px;position:relative;overflow:hidden}.slide{width:350px;height:350px;position:absolute;transition:all .5s}.btn{position:absolute;width:50px;height:50px;padding:10px;border:none;border-radius:50%;z-index:100;cursor:pointer;background-color:#fff;font-size:18px}.btn:active{transform:scale(1.1)}.btn-prev{top:50%;left:2%}.btn-next{top:45%;right:2%}',""]);const s=a},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i="",r=void 0!==t[5];return t[4]&&(i+="@supports (".concat(t[4],") {")),t[2]&&(i+="@media ".concat(t[2]," {")),r&&(i+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),i+=e(t),r&&(i+="}"),t[2]&&(i+="}"),t[4]&&(i+="}"),i})).join("")},t.i=function(e,i,r,o,n){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var m=[].concat(e[l]);r&&a[m[0]]||(void 0!==n&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=n),i&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=i):m[2]=i),o&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=o):m[4]="".concat(o)),t.push(m))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function i(e){for(var i=-1,r=0;r<t.length;r++)if(t[r].identifier===e){i=r;break}return i}function r(e,r){for(var n={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],m=n[l]||0,u="".concat(l," ").concat(m);n[l]=m+1;var d=i(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,t){var i=t.domAPI(t);return i.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;i.update(e=t)}else i.remove()}}e.exports=function(e,o){var n=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<n.length;a++){var s=i(n[a]);t[s].references--}for(var c=r(e,o),l=0;l<n.length;l++){var m=i(n[l]);0===t[m].references&&(t[m].updater(),t.splice(m,1))}n=c}}},569:e=>{var t={};e.exports=function(e,i){var r=function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}t[e]=i}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,i)=>{e.exports=function(e){var t=i.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(i){!function(e,t,i){var r="";i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var o=void 0!==i.layer;o&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,o&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}");var n=i.sourceMap;n&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,i)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function i(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={id:r,exports:{}};return e[r](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.nc=void 0,(()=>{var e=i(379),t=i.n(e),r=i(795),o=i.n(r),n=i(569),a=i.n(n),s=i(565),c=i.n(s),l=i(216),m=i.n(l),u=i(589),d=i.n(u),p=i(315),f={};f.styleTagTransform=d(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=m(),t()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const g=class{constructor(e,t){this.question=e,this.answer=t,this.htmlElement=null}createComponent(){const e=document.createElement("div");e.classList.add("collapsible__container");const t=document.createElement("button");t.textContent=this.question;const i=this.createArrowIcon();t.appendChild(i),e.appendChild(t);const r=document.createElement("div");return r.classList.add("answer"),r.textContent=this.answer,e.appendChild(r),e.addEventListener("click",(()=>this.toggleAnswer())),e}createArrowIcon(){const e=document.createElementNS("http://www.w3.org/2000/svg","svg");return e.setAttribute("width","40"),e.setAttribute("height","41"),e.setAttribute("viewBox","0 0 40 41"),e.setAttribute("fill","none"),e.appendChild(this.getNode("rect",{x:"22.6279",y:"11.9125",width:"15.9756",height:"3.55558",transform:"rotate(135 22.6279 11.9125)",fill:"white"})),e.appendChild(this.getNode("rect",{x:"11.3145",y:"23.226",width:"16.0001",height:"3.55014",transform:"rotate(-135 11.3145 23.226)",fill:"white"})),e}getNode(e,t){for(var i in e=document.createElementNS("http://www.w3.org/2000/svg",e),t)e.setAttributeNS(null,i.replace(/[A-Z]/g,(function(e,t,i,r){return"-"+e.toLowerCase()})),t[i]);return e}toggleAnswer(){if(this.htmlElement){const e=this.htmlElement.querySelector(".answer");e.style.display="block"===e.style.display?"none":"block"}}},b=class{constructor(e){this.container=document.getElementById(e),this.faqItems=[]}addFAQItem(e){this.faqItems.push(e)}render(){this.faqItems.forEach((e=>{const t=e.createComponent();this.container.appendChild(t)}))}},h=new b("faqEmployerList"),_=new b("faqEmployeeList");[{question:"Lorem ipsum dolor sim lorem?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."},{question:"Lorem ipsum dolor sim lorem sim lorem dolor sim sim lorem ipsum?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."},{question:"Lorem ipsum dolor sim lorem?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."}].map((e=>{h.addFAQItem(new g(e.question,e.answer))})),[{question:"Lorem ipsum dolor sim lorem?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."},{question:"Lorem ipsum dolor sim lorem sim lorem dolor sim sim lorem ipsum?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."},{question:"Lorem ipsum dolor sim lorem?",answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem facilisi at tincidunt condimentum ipsum non. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi. Felis erat curabitur mauris morbi."}].map((e=>{_.addFAQItem(new g(e.question,e.answer))})),h.render(),_.render();let v=document.querySelector(".page-nav"),y=document.getElementById("burger-menu"),x=document.querySelector(".open"),w=document.querySelector(".close"),k=document.getElementById("links");y.addEventListener("click",(()=>{x.style.display="none"===x.style.display?"block":"none",w.style.display="none"===w.style.display?"block":"none","block"===k.style.display?(k.style.display="none")&&(v.style.backgroundColor="#F5CDD5"):(k.style.display="block")&&(v.style.backgroundColor="#26BBE1")}))})()})();