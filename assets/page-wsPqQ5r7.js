import{u as t,j as e,ax as r,f as a}from"./index-3St8o1xV.js";import{B as l}from"./Breadcrumb-MDIkZ1nH.js";import{e as d}from"./error404-Fz0SwKZp.js";import"./PageTitle-EMS5YwYN.js";const n=()=>{const{wishlists:s}=t();return s.length?e.jsx(e.Fragment,{children:s.map(i=>e.jsx(r,{dish:i},i.id))}):e.jsxs("div",{className:"flex flex-col items-center justify-center p-10",children:[e.jsx("p",{className:"text-3xl",children:"Add Products to wishlist and check again"}),e.jsx("img",{src:d,width:250,height:250,alt:"not-found-image",className:"h-full max-w-full"}),e.jsx(a,{to:"/dishes",className:"rounded-lg bg-primary px-6 py-3 text-base font-medium capitalize text-white transition-all hover:bg-primary-500 mx-auto inline-block",children:"Check Products"})]})},x=()=>e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Wishlist"}),e.jsx("section",{className:"py-6 lg:py-10",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"divide-y divide-default-200 overflow-hidden rounded-lg border border-default-200 ",children:e.jsx(n,{})})})})]});export{x as default};