import{aI as v,aJ as I,r as E,j as c,aK as x,aL as T}from"./index-3St8o1xV.js";import{N as y}from"./navigation-qQeNlC2N.js";import{T as b}from"./thumbs-zF4Ey4Z9.js";import{b as A}from"./burrito-bowl-NZ9P1W4G.js";const B="/yum_r/assets/burrito-bowl-2--UygpMpu.png",L="/yum_r/assets/burrito-bowl-3-dprVYhWX.png";function _(w){let{swiper:e,extendParams:m,on:a}=w;m({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function u(l,i){const o=function(){let n,r,p;return(g,N)=>{for(r=-1,n=g.length;n-r>1;)p=n+r>>1,g[p]<=N?r=p:n=p;return n}}();this.x=l,this.y=i,this.lastIndex=l.length-1;let t,s;return this.interpolate=function(n){return n?(s=o(this.x,n),t=s-1,(n-this.x[t])*(this.y[s]-this.y[t])/(this.x[s]-this.x[t])+this.y[t]):0},this}function f(l){e.controller.spline=e.params.loop?new u(e.slidesGrid,l.slidesGrid):new u(e.snapGrid,l.snapGrid)}function S(l,i){const o=e.controller.control;let t,s;const d=e.constructor;function n(r){if(r.destroyed)return;const p=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(f(r),s=-e.controller.spline.interpolate(-p)),(!s||e.params.controller.by==="container")&&(t=(r.maxTranslate()-r.minTranslate())/(e.maxTranslate()-e.minTranslate()),(Number.isNaN(t)||!Number.isFinite(t))&&(t=1),s=(p-e.minTranslate())*t+r.minTranslate()),e.params.controller.inverse&&(s=r.maxTranslate()-s),r.updateProgress(s),r.setTranslate(s,e),r.updateActiveIndex(),r.updateSlidesClasses()}if(Array.isArray(o))for(let r=0;r<o.length;r+=1)o[r]!==i&&o[r]instanceof d&&n(o[r]);else o instanceof d&&i!==o&&n(o)}function j(l,i){const o=e.constructor,t=e.controller.control;let s;function d(n){n.destroyed||(n.setTransition(l,e),l!==0&&(n.transitionStart(),n.params.autoHeight&&v(()=>{n.updateAutoHeight()}),I(n.wrapperEl,()=>{t&&n.transitionEnd()})))}if(Array.isArray(t))for(s=0;s<t.length;s+=1)t[s]!==i&&t[s]instanceof o&&d(t[s]);else t instanceof o&&i!==t&&d(t)}function h(){e.controller.control&&e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}a("beforeInit",()=>{if(typeof window<"u"&&(typeof e.params.controller.control=="string"||e.params.controller.control instanceof HTMLElement)){const l=document.querySelector(e.params.controller.control);if(l&&l.swiper)e.controller.control=l.swiper;else if(l){const i=o=>{e.controller.control=o.detail[0],e.update(),l.removeEventListener("init",i)};l.addEventListener("init",i)}return}e.controller.control=e.params.controller.control}),a("update",()=>{h()}),a("resize",()=>{h()}),a("observerUpdate",()=>{h()}),a("setTranslate",(l,i,o)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTranslate(i,o)}),a("setTransition",(l,i,o)=>{!e.controller.control||e.controller.control.destroyed||e.controller.setTransition(i,o)}),Object.assign(e.controller,{setTranslate:S,setTransition:j})}const H=({images:w})=>{const[e,m]=E.useState(null),a=[A,B,L];return c.jsxs("div",{className:"grid grid-cols-1",children:[c.jsx("div",{children:c.jsx(x,{modules:[y,b,_],spaceBetween:24,thumbs:{swiper:e&&!e.destroyed?e:null},className:"cart-swiper",loop:!0,children:a.map((u,f)=>c.jsx(T,{children:c.jsx("img",{width:500,height:430,alt:"food-image",src:u,className:"mx-auto h-full max-w-full"})},f))})}),c.jsx(x,{className:"cart-swiper-pagination justify-center",wrapperClass:"flex-wrap justify-center gap-2 w-full",loop:!1,spaceBetween:10,slidesPerView:4,onSwiper:m,modules:[y,b],watchSlidesProgress:!0,children:a.map((u,f)=>c.jsx(T,{className:"!h-24 !w-24 cursor-pointer lg:!h-32 lg:!w-32",children:c.jsx("img",{width:124,height:124,alt:"food-image",src:u,className:"h-full w-full rounded"})},f))})]})};export{H as D};