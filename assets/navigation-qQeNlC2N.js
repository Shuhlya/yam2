import{aM as L,aN as w}from"./index-3St8o1xV.js";function N(c,a,d,o){return c.params.createElements&&Object.keys(o).forEach(r=>{if(!d[r]&&d.auto===!0){let s=L(c.el,`.${o[r]}`)[0];s||(s=w("div",o[r]),s.className=o[r],c.el.append(s)),d[r]=s,a[r]=s}}),d}function y(c){let{swiper:a,extendParams:d,on:o,emit:r}=c;d({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),a.navigation={nextEl:null,prevEl:null};const s=n=>(Array.isArray(n)?n:[n]).filter(i=>!!i);function E(n){let i;return n&&typeof n=="string"&&a.isElement&&(i=a.el.querySelector(n),i)?i:(n&&(typeof n=="string"&&(i=[...document.querySelectorAll(n)]),a.params.uniqueNavElements&&typeof n=="string"&&i.length>1&&a.el.querySelectorAll(n).length===1&&(i=a.el.querySelector(n))),n&&!i?n:i)}function f(n,i){const t=a.params.navigation;n=s(n),n.forEach(e=>{e&&(e.classList[i?"add":"remove"](...t.disabledClass.split(" ")),e.tagName==="BUTTON"&&(e.disabled=i),a.params.watchOverflow&&a.enabled&&e.classList[a.isLocked?"add":"remove"](t.lockClass))})}function p(){const{nextEl:n,prevEl:i}=a.navigation;if(a.params.loop){f(i,!1),f(n,!1);return}f(i,a.isBeginning&&!a.params.rewind),f(n,a.isEnd&&!a.params.rewind)}function b(n){n.preventDefault(),!(a.isBeginning&&!a.params.loop&&!a.params.rewind)&&(a.slidePrev(),r("navigationPrev"))}function x(n){n.preventDefault(),!(a.isEnd&&!a.params.loop&&!a.params.rewind)&&(a.slideNext(),r("navigationNext"))}function v(){const n=a.params.navigation;if(a.params.navigation=N(a,a.originalParams.navigation,a.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(n.nextEl||n.prevEl))return;let i=E(n.nextEl),t=E(n.prevEl);Object.assign(a.navigation,{nextEl:i,prevEl:t}),i=s(i),t=s(t);const e=(l,g)=>{l&&l.addEventListener("click",g==="next"?x:b),!a.enabled&&l&&l.classList.add(...n.lockClass.split(" "))};i.forEach(l=>e(l,"next")),t.forEach(l=>e(l,"prev"))}function m(){let{nextEl:n,prevEl:i}=a.navigation;n=s(n),i=s(i);const t=(e,l)=>{e.removeEventListener("click",l==="next"?x:b),e.classList.remove(...a.params.navigation.disabledClass.split(" "))};n.forEach(e=>t(e,"next")),i.forEach(e=>t(e,"prev"))}o("init",()=>{a.params.navigation.enabled===!1?h():(v(),p())}),o("toEdge fromEdge lock unlock",()=>{p()}),o("destroy",()=>{m()}),o("enable disable",()=>{let{nextEl:n,prevEl:i}=a.navigation;if(n=s(n),i=s(i),a.enabled){p();return}[...n,...i].filter(t=>!!t).forEach(t=>t.classList.add(a.params.navigation.lockClass))}),o("click",(n,i)=>{let{nextEl:t,prevEl:e}=a.navigation;t=s(t),e=s(e);const l=i.target;if(a.params.navigation.hideOnClick&&!e.includes(l)&&!t.includes(l)){if(a.pagination&&a.params.pagination&&a.params.pagination.clickable&&(a.pagination.el===l||a.pagination.el.contains(l)))return;let g;t.length?g=t[0].classList.contains(a.params.navigation.hiddenClass):e.length&&(g=e[0].classList.contains(a.params.navigation.hiddenClass)),r(g===!0?"navigationShow":"navigationHide"),[...t,...e].filter(u=>!!u).forEach(u=>u.classList.toggle(a.params.navigation.hiddenClass))}});const C=()=>{a.el.classList.remove(...a.params.navigation.navigationDisabledClass.split(" ")),v(),p()},h=()=>{a.el.classList.add(...a.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(a.navigation,{enable:C,disable:h,update:p,init:v,destroy:m})}export{y as N};
