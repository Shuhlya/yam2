import{r as e,_ as m,G as n,a0 as d,az as c,j as s}from"./index-3St8o1xV.js";import{O as u,o as p}from"./page-5izxbHE4.js";import{B as g}from"./BreadcrumbAdmin-A9doLk6b.js";import"./DateFormInput-bBgTSeu2.js";import"./DemoFilterDropdown-swigqS2q.js";import"./PageTitle-EMS5YwYN.js";const x=e.lazy(()=>m(()=>import("./PersonDetailsCard-tz-Gy1gk.js"),__vite__mapDeps([0,1,2]))),D=()=>{const o=n(),{customerId:a}=d(),[t,i]=e.useState();e.useEffect(()=>{(async()=>{const r=await c(Number(a));r?i(r):o("/not-found")})()},[a]);const l=[{key:"date",name:"Date"},{key:"id",name:"Order ID"},{key:"dish_id",name:"Dish"},{key:"amount",name:"Amount"},{key:"status",name:"Status"}];return s.jsx("div",{className:"w-full lg:ps-64",children:s.jsxs("div",{className:"page-content space-y-6 p-6",children:[s.jsx(g,{title:"Customers Details",link:"/admin/customers",subtitle:"Customers"}),s.jsxs("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-3",children:[s.jsx("div",{className:"lg:col-span-1",children:t&&s.jsx(x,{seller:t})}),s.jsx("div",{className:"lg:col-span-2",children:s.jsx(u,{title:"Customer Order history",columns:l,rows:p})})]})]})})};export{D as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PersonDetailsCard-tz-Gy1gk.js","assets/index-3St8o1xV.js","assets/index-Y88LFwnN.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}