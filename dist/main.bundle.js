"use strict";(self.webpackChunkwebpack_template=self.webpackChunkwebpack_template||[]).push([[179],{426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"* {\r\n  list-style: none;\r\n  border: none;\r\n  padding-inline-start: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: ghostwhite;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmain {\r\n  background-color: white;\r\n  border: 1px ghostwhite;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: 1px 2px 2px 2px gray;\r\n  width: 85%;\r\n  height: 90%;\r\n  margin-top: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.adjust-span {\r\n  display: grid;\r\n  grid-template-columns: 94% 2%;\r\n  gap: 1.5%;\r\n  align-items: center;\r\n  padding: 1%;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nform li {\r\n  display: grid;\r\n  grid-template-columns: 4% 90% 4%;\r\n  gap: 1%;\r\n  align-items: center;\r\n}\r\n\r\n#addInput {\r\n  padding-left: 2%;\r\n}\r\n\r\n#addbtn {\r\n  visibility: hidden;\r\n  padding-right: 0;\r\n}\r\n\r\nspan,\r\nli input {\r\n  justify-self: center;\r\n}\r\n\r\nspan,\r\n#remove {\r\n  color: gray;\r\n}\r\n\r\n#addbtn span {\r\n  visibility: visible;\r\n}\r\n\r\n.delete-ic {\r\n  display: none;\r\n}\r\n\r\n.form input {\r\n  padding: 10px 10px 10px 0;\r\n}\r\n\r\nform li,\r\nform p {\r\n  padding: 10px;\r\n}\r\n\r\nform li,\r\nform div {\r\n  border-bottom: 1px solid gray;\r\n}\r\n\r\nli button {\r\n  background-color: transparent;\r\n}\r\n\r\n#remove {\r\n  padding: 2%;\r\n  justify-self: end;\r\n}\r\n\r\nlabel {\r\n  display: none;\r\n}\r\n\r\ntextarea {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  justify-items: center;\r\n  align-items: center;\r\n  text-align: justify;\r\n  height: 65%;\r\n  width: 100%;\r\n}\r\n\r\n.inputT {\r\n  background-color: transparent;\r\n  border: none;\r\n  appearance: none;\r\n  resize: none;\r\n  outline: none;\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],d=i[c]||0,u="".concat(c," ").concat(d);i[c]=d+1;var p=r(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var l=t(n,o),c=0;c<i.length;c++){var d=r(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},104:(n,e,r)=>{r.d(e,{ah:()=>h,fX:()=>E,wU:()=>w,nC:()=>b,Z1:()=>I});var t=r(379),o=r.n(t),i=r(795),a=r.n(i),s=r(569),l=r.n(s),c=r(565),d=r.n(c),u=r(216),p=r.n(u),f=r(589),m=r.n(f),y=r(426),v={};function g(){localStorage.setItem("arr",JSON.stringify(h))}v.styleTagTransform=m(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=p(),o()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;let h=[];const b=document.getElementById("tasks-list"),x=document.getElementById("addInput"),k=document.getElementById("addbtn");let E=0;function I(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function w(){h.forEach(((n,e)=>{const r=document.createElement("li");r.setAttribute("id",`i${n.index}`),r.innerHTML+=`\n      <input type="checkbox" name="task${n.index}">\n      <label for="task${n.index}">${n.description}</label>\n      <textarea  id="task${e}" name="inputT" class="inputT">${n.description}</textarea>\n      <button type="button" id="removeTask">\n      <span id='delete-${e}' class="material-symbols-outlined  delete-ic">delete</span>\n      <span class="material-symbols-outlined ic-vDots">more_vert</span>\n      </button>\n    `,r.addEventListener("mouseenter",(()=>{const n=document.getElementById(`delete-${e}`);n&&(n.style.display="block"),r.querySelector(".ic-vDots").style.display="none",r.style.backgroundColor="yellow"})),r.addEventListener("mouseleave",(()=>{const n=document.getElementById(`delete-${e}`);n&&(n.style.display="none"),r.querySelector(".ic-vDots").style.display="block",r.style.backgroundColor="white"})),r.querySelector("#removeTask").addEventListener("click",(()=>{E=`${n.index}`-1,h.splice(E,1),h.forEach(((n,e)=>{n.index=e+1})),g(),I(b),w(),r.querySelector(".ic-vDots").style.display="none"}));const t=r.querySelector(".inputT");t.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),h[e].description=t.value,g(),I(b),w())})),b.appendChild(r)}))}k.addEventListener("click",(()=>{!function(){const n=document.getElementById("addInput").value,e=h.length+1;if(n){const r={description:n,completed:!1,index:e};h.push(r),g()}}(),I(b),w(),document.getElementById("addInput").placeholder="Add to your list...",document.getElementById("addInput").value=""})),x.addEventListener("keypress",(n=>{"Enter"===n.key&&(n.preventDefault(),k.click())})),window.onload=()=>{localStorage.getItem("arr")&&(h=JSON.parse(localStorage.getItem("arr"))),w()}}},n=>{n(n.s=104)}]);