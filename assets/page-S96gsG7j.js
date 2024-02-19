import{r as x,G as S,I as C,J as F,K as R,M as u,N as z,O as A,P as T,Q as p,j as e,T as U,f as b,R as E,S as h,U as f,V as g,W as I}from"./index-3St8o1xV.js";import{P as W}from"./PasswordFormInput-TaRtU_dd.js";import{A as q}from"./AuthFormLayout-snAGLPFc.js";import{P as M}from"./PageTitle-EMS5YwYN.js";const V=()=>{const[l,d]=x.useState(!1),r=S(),{session:o,saveSession:j}=C(),[y]=F(),N=R({email:u().email("Please enter a valid email").required("Please enter your email"),password:u().required("Please enter your password")}),{control:w,handleSubmit:v,reset:L}=z({resolver:A(N),defaultValues:{email:"user@coderthemes.com",password:"password"}}),P=a=>{L({email:a=="user"?"user@coderthemes.com":"admin@coderthemes.com",password:(a=="user","password")})};x.useEffect(()=>{o&&m(o.role)},[]);const m=(a,n=!1)=>{const s=y.get("redirectTo"),i=s==null?void 0:s.startsWith("/admin");if(a=="admin"&&!(s&&!i)){r(s&&i?s:"/admin/dashboard");return}else if(a=="user"&&!(s&&i)){r(s&&!i?s:"/home");return}n&&(a=="admin"?r("/admin/dashboard"):a=="user"&&r("/home"))},k=v(async a=>{var n,s,i,c;try{const t=await T.post("/login",a);t.data.token&&(j({...t.data??{},token:t.data.token}),(t.data.role=="user"||t.data.role=="admin")&&m(t.data.role,!0))}catch(t){(s=(n=t.response)==null?void 0:n.data)!=null&&s.error&&p.error((c=(i=t.response)==null?void 0:i.data)==null?void 0:c.error,{position:"top-right",duration:2e3})}finally{d(!1)}p.success("Successfully logged in. Redirecting....",{position:"top-right",duration:2e3})});return{loading:l,login:k,control:w,changeUserRole:P}},$=()=>{const{loading:l,login:d,control:r,changeUserRole:o}=V();return e.jsxs(e.Fragment,{children:[e.jsxs("form",{onSubmit:d,children:[e.jsx(U,{name:"email",control:r,type:"email",className:"bg-white",placeholder:"Enter your email",label:"Email",containerClassName:"mb-6",fullWidth:!0}),e.jsx(W,{name:"password",control:r,label:"Password",labelClassName:"block text-sm font-medium text-default-900 mb-2",containerClassName:"mb-1",fullWidth:!0}),e.jsx(b,{to:"/auth/forgot-password",className:"float-right text-end text-sm text-default-600 underline",children:"Forgot Password?"}),e.jsx("button",{type:"submit",className:"mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500",disabled:l,children:"Log In"})]}),e.jsxs("div",{className:"mt-6 flex flex-col justify-center gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border border-dashed border-primary",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2",children:[e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(E,{size:22}),e.jsx("p",{className:"text-base text-default-900",children:"User"})]}),e.jsxs("button",{className:"flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600",onClick:()=>o("user"),children:[e.jsx(h,{}),"Use"]})]}),e.jsxs("p",{className:"p-2 px-4",children:[e.jsxs("span",{className:"flex items-center gap-2 text-sm",children:[e.jsx(f,{size:18})," user@coderthemes.com"]}),e.jsxs("span",{className:"mt-2 flex items-center gap-2 text-sm",children:[e.jsx(g,{size:18})," password"]})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 rounded-lg border border-dashed border-primary",children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2",children:[e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(I,{size:22}),e.jsx("p",{className:"text-base text-default-900",children:"Administator"})]}),e.jsxs("button",{className:"flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600",onClick:()=>o("admin"),children:[e.jsx(h,{}),"Use"]})]}),e.jsxs("p",{className:"p-2 px-4",children:[e.jsxs("span",{className:"flex items-center gap-2 text-sm",children:[e.jsx(f,{size:18})," admin@coderthemes.com"]}),e.jsxs("span",{className:"mt-2 flex items-center gap-2 text-sm",children:[e.jsx(g,{size:18})," password"]})]})]})]})]})},B=()=>e.jsxs("p",{className:"mt-auto text-center text-default-950",children:["Don’t have an account ?"," ",e.jsx(b,{to:"/auth/register",className:"ms-1 text-primary",children:e.jsx("span",{className:"font-medium",children:"Register"})})]}),K=()=>e.jsxs(q,{authTitle:"Login",helpText:"Enter your credentials to access Yum.",bottomLink:e.jsx(B,{}),hasThirdPartyAuth:!0,children:[e.jsx(M,{title:"Login"}),e.jsx($,{})]});export{K as default};