import{j as e}from"./index-3St8o1xV.js";import{_ as d}from"./react-apexcharts.min-m9L7r0-q.js";const c=({change:t,changeType:a,title:r,color:l})=>{const s={chart:{type:"bar",height:80,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"90%",borderRadius:7}},colors:[l],series:[{data:[45,80]}],labels:["1","2"],xaxis:{crosshairs:{width:4}},tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(){return""}}},marker:{show:!1}}};return e.jsx("div",{className:"rounded-lg border border-default-200",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h5",{className:"mb-6 text-lg font-semibold text-default-900",children:r}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsxs("div",{className:"w-1/4",children:[e.jsx(d,{className:"apex-charts",options:s,height:80,series:s.series,type:"bar"}),e.jsx("div",{id:"new_order","data-colors":"#009400"})]}),e.jsxs("div",{className:"w-4/5",children:[e.jsxs("p",{className:"text-sm font-medium text-default-500",children:[t,"% Payment"]}),e.jsx("h3",{className:"text-lg font-medium text-default-950",children:a})]})]})]})})};export{c as default};
