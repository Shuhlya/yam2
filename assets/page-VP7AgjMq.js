import{b4 as t0,m as n0,j as d}from"./index-3St8o1xV.js";import{_ as U}from"./react-apexcharts.min-m9L7r0-q.js";import{B as a0}from"./BreadcrumbAdmin-A9doLk6b.js";import"./PageTitle-EMS5YwYN.js";var P={exports:{}};(function(L,o0){(function(W,C){L.exports=C()})(t0,function(){var W=1e3,C=6e4,E=36e5,z="millisecond",M="second",b="minute",S="hour",f="day",Y="week",h="month",J="quarter",m="year",k="date",Z="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,R=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var n=["th","st","nd","rd"],e=r%100;return"["+r+(n[(e-20)%10]||n[e]||n[0])+"]"}},I=function(r,n,e){var a=String(r);return!a||a.length>=n?r:""+Array(n+1-a.length).join(e)+r},e0={s:I,z:function(r){var n=-r.utcOffset(),e=Math.abs(n),a=Math.floor(e/60),t=e%60;return(n<=0?"+":"-")+I(a,2,"0")+":"+I(t,2,"0")},m:function r(n,e){if(n.date()<e.date())return-r(e,n);var a=12*(e.year()-n.year())+(e.month()-n.month()),t=n.clone().add(a,h),s=e-t<0,i=n.clone().add(a+(s?-1:1),h);return+(-(a+(e-t)/(s?t-i:i-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:h,y:m,w:Y,d:f,D:k,h:S,m:b,s:M,ms:z,Q:J}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},O="en",p={};p[O]=K;var B="$isDayjsObject",F=function(r){return r instanceof T||!(!r||!r[B])},H=function r(n,e,a){var t;if(!n)return O;if(typeof n=="string"){var s=n.toLowerCase();p[s]&&(t=s),e&&(p[s]=e,t=s);var i=n.split("-");if(!t&&i.length>1)return r(i[0])}else{var c=n.name;p[c]=n,t=c}return!a&&t&&(O=t),t||!a&&O},y=function(r,n){if(F(r))return r.clone();var e=typeof n=="object"?n:{};return e.date=r,e.args=arguments,new T(e)},o=e0;o.l=H,o.i=F,o.w=function(r,n){return y(r,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var T=function(){function r(e){this.$L=H(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[B]=!0}var n=r.prototype;return n.parse=function(e){this.$d=function(a){var t=a.date,s=a.utc;if(t===null)return new Date(NaN);if(o.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var i=t.match(Q);if(i){var c=i[2]-1||0,u=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,u)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,u)}}return new Date(t)}(e),this.init()},n.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},n.$utils=function(){return o},n.isValid=function(){return this.$d.toString()!==Z},n.isSame=function(e,a){var t=y(e);return this.startOf(a)<=t&&t<=this.endOf(a)},n.isAfter=function(e,a){return y(e)<this.startOf(a)},n.isBefore=function(e,a){return this.endOf(a)<y(e)},n.$g=function(e,a,t){return o.u(e)?this[a]:this.set(t,e)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(e,a){var t=this,s=!!o.u(a)||a,i=o.p(e),c=function(v,w){var $=o.w(t.$u?Date.UTC(t.$y,w,v):new Date(t.$y,w,v),t);return s?$:$.endOf(f)},u=function(v,w){return o.w(t.toDate()[v].apply(t.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice(w)),t)},x=this.$W,l=this.$M,D=this.$D,j="set"+(this.$u?"UTC":"");switch(i){case m:return s?c(1,0):c(31,11);case h:return s?c(1,l):c(0,l+1);case Y:var g=this.$locale().weekStart||0,_=(x<g?x+7:x)-g;return c(s?D-_:D+(6-_),l);case f:case k:return u(j+"Hours",0);case S:return u(j+"Minutes",1);case b:return u(j+"Seconds",2);case M:return u(j+"Milliseconds",3);default:return this.clone()}},n.endOf=function(e){return this.startOf(e,!1)},n.$set=function(e,a){var t,s=o.p(e),i="set"+(this.$u?"UTC":""),c=(t={},t[f]=i+"Date",t[k]=i+"Date",t[h]=i+"Month",t[m]=i+"FullYear",t[S]=i+"Hours",t[b]=i+"Minutes",t[M]=i+"Seconds",t[z]=i+"Milliseconds",t)[s],u=s===f?this.$D+(a-this.$W):a;if(s===h||s===m){var x=this.clone().set(k,1);x.$d[c](u),x.init(),this.$d=x.set(k,Math.min(this.$D,x.daysInMonth())).$d}else c&&this.$d[c](u);return this.init(),this},n.set=function(e,a){return this.clone().$set(e,a)},n.get=function(e){return this[o.p(e)]()},n.add=function(e,a){var t,s=this;e=Number(e);var i=o.p(a),c=function(l){var D=y(s);return o.w(D.date(D.date()+Math.round(l*e)),s)};if(i===h)return this.set(h,this.$M+e);if(i===m)return this.set(m,this.$y+e);if(i===f)return c(1);if(i===Y)return c(7);var u=(t={},t[b]=C,t[S]=E,t[M]=W,t)[i]||1,x=this.$d.getTime()+e*u;return o.w(x,this)},n.subtract=function(e,a){return this.add(-1*e,a)},n.format=function(e){var a=this,t=this.$locale();if(!this.isValid())return t.invalidDate||Z;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=o.z(this),c=this.$H,u=this.$m,x=this.$M,l=t.weekdays,D=t.months,j=t.meridiem,g=function(w,$,N,A){return w&&(w[$]||w(a,s))||N[$].slice(0,A)},_=function(w){return o.s(c%12||12,w,"0")},v=j||function(w,$,N){var A=w<12?"AM":"PM";return N?A.toLowerCase():A};return s.replace(R,function(w,$){return $||function(N){switch(N){case"YY":return String(a.$y).slice(-2);case"YYYY":return o.s(a.$y,4,"0");case"M":return x+1;case"MM":return o.s(x+1,2,"0");case"MMM":return g(t.monthsShort,x,D,3);case"MMMM":return g(D,x);case"D":return a.$D;case"DD":return o.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return g(t.weekdaysMin,a.$W,l,2);case"ddd":return g(t.weekdaysShort,a.$W,l,3);case"dddd":return l[a.$W];case"H":return String(c);case"HH":return o.s(c,2,"0");case"h":return _(1);case"hh":return _(2);case"a":return v(c,u,!0);case"A":return v(c,u,!1);case"m":return String(u);case"mm":return o.s(u,2,"0");case"s":return String(a.$s);case"ss":return o.s(a.$s,2,"0");case"SSS":return o.s(a.$ms,3,"0");case"Z":return i}return null}(w)||i.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(e,a,t){var s,i=this,c=o.p(a),u=y(e),x=(u.utcOffset()-this.utcOffset())*C,l=this-u,D=function(){return o.m(i,u)};switch(c){case m:s=D()/12;break;case h:s=D();break;case J:s=D()/3;break;case Y:s=(l-x)/6048e5;break;case f:s=(l-x)/864e5;break;case S:s=l/E;break;case b:s=l/C;break;case M:s=l/W;break;default:s=l}return t?s:o.a(s)},n.daysInMonth=function(){return this.endOf(h).$D},n.$locale=function(){return p[this.$L]},n.locale=function(e,a){if(!e)return this.$L;var t=this.clone(),s=H(e,a,!0);return s&&(t.$L=s),t},n.clone=function(){return o.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},r}(),V=T.prototype;return y.prototype=V,[["$ms",z],["$s",M],["$m",b],["$H",S],["$W",f],["$M",h],["$y",m],["$D",k]].forEach(function(r){V[r[1]]=function(n){return this.$g(n,r[0],r[1])}}),y.extend=function(r,n){return r.$i||(r(n,T,y),r.$i=!0),y},y.locale=H,y.isDayjs=F,y.unix=function(r){return y(1e3*r)},y.en=p[O],y.Ls=p,y.p={},y})})(P);var r0=P.exports;const s0=n0(r0),i0=[{x:new Date(2016,1,1),y:[51.98,56.29,51.59,53.85]},{x:new Date(2016,2,1),y:[53.66,54.99,51.35,52.95]},{x:new Date(2016,3,1),y:[52.96,53.78,51.54,52.48]},{x:new Date(2016,4,1),y:[52.54,52.79,47.88,49.24]},{x:new Date(2016,5,1),y:[49.1,52.86,47.7,52.78]},{x:new Date(2016,6,1),y:[52.83,53.48,50.32,52.29]},{x:new Date(2016,7,1),y:[52.2,54.48,51.64,52.58]},{x:new Date(2016,8,1),y:[52.76,57.35,52.15,57.03]},{x:new Date(2016,9,1),y:[57.04,58.15,48.88,56.19]},{x:new Date(2016,10,1),y:[56.09,58.85,55.48,58.79]},{x:new Date(2016,11,1),y:[58.78,59.65,58.23,59.05]},{x:new Date(2017,0,1),y:[59.37,61.11,59.35,60.34]},{x:new Date(2017,1,1),y:[60.4,60.52,56.71,56.93]},{x:new Date(2017,2,1),y:[57.02,59.71,56.04,56.82]},{x:new Date(2017,3,1),y:[56.97,59.62,54.77,59.3]},{x:new Date(2017,4,1),y:[59.11,62.29,59.1,59.85]},{x:new Date(2017,5,1),y:[59.97,60.11,55.66,58.42]},{x:new Date(2017,6,1),y:[58.34,60.93,56.75,57.42]},{x:new Date(2017,7,1),y:[57.76,58.08,51.18,54.71]},{x:new Date(2017,8,1),y:[54.8,61.42,53.18,57.35]},{x:new Date(2017,9,1),y:[57.56,63.09,57,62.99]},{x:new Date(2017,10,1),y:[62.89,63.42,59.72,61.76]},{x:new Date(2017,11,1),y:[61.71,64.15,61.29,63.04]}],X={chart:{height:400,type:"candlestick"},plotOptions:{candlestick:{colors:{upward:"#47ad77",downward:"#fa5c7c"}}},series:[{data:i0}],stroke:{show:!0,colors:["#f1f3fa"],width:1},xaxis:{type:"datetime"},grid:{borderColor:"#f1f3fa"}},q={series:[{name:"candle",data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],chart:{height:380,type:"candlestick"},title:{text:"CandleStick Chart - Category X-axis",align:"left"},grid:{padding:{top:0,right:-2,bottom:-25,left:0}},annotations:{xaxis:[{x:"Oct 06 14:00",borderColor:"#3e60d5",label:{borderColor:"#3e60d5",style:{fontSize:"12px",color:"#fff",background:"#3e60d5"},orientation:"horizontal",offsetY:7,text:"Annotation Test"}}]},plotOptions:{candlestick:{colors:{upward:"#47ad77",downward:"#fa5c7c"}}},tooltip:{enabled:!0},colors:["#3e60d5","#ffbc00"],xaxis:{type:"category",labels:{formatter:function(L){return s0(L).format("MMM DD HH:mm")}}},yaxis:{tooltip:{enabled:!0}}},G={series:[{name:"Line",type:"line",data:[{x:new Date(15387786e5),y:6604},{x:new Date(15387822e5),y:6602},{x:new Date(15388146e5),y:6607},{x:new Date(15388848e5),y:6620}]},{name:"Candle",type:"candlestick",data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}],chart:{height:380,type:"line"},title:{text:"CandleStick Chart",align:"left"},stroke:{width:[3,1],colors:["rgba(62,96,213,0.85)"]},legend:{show:!0,horizontalAlign:"center",offsetX:0,offsetY:5},grid:{padding:{top:0,right:-2,bottom:15,left:10}},colors:["#3e60d5","#47ad77","#fa5c7c"],plotOptions:{candlestick:{colors:{upward:"#47ad77",downward:"#fa5c7c"}}},xaxis:{type:"datetime"}},x0=()=>d.jsx("div",{className:"w-full lg:ps-64",children:d.jsxs("div",{className:"page-content space-y-6 p-6",children:[d.jsx(a0,{title:"Candlestick",subtitle:"Charts"}),d.jsxs("div",{className:"grid xl:grid-cols-2 gap-6",children:[d.jsx("div",{className:"rounded-lg border border-default-200",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h4",{className:"card-title",children:"Simple Candlestick Chart"}),d.jsx("div",{dir:"ltr",children:d.jsx(U,{className:"apex-charts",options:X,height:380,series:X.series,type:"candlestick"})})]})}),d.jsx("div",{className:"rounded-lg border border-default-200",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h4",{className:"card-title mb-3",children:"Category X-Axis"}),d.jsx("div",{dir:"ltr",children:d.jsx(U,{className:"apex-charts",options:q,height:380,series:q.series,type:"candlestick"})})]})}),d.jsx("div",{className:"rounded-lg border border-default-200",children:d.jsxs("div",{className:"p-6",children:[d.jsx("h4",{className:"card-title mb-3",children:"Candlestick with Line"}),d.jsx("div",{dir:"ltr",children:d.jsx(U,{className:"apex-charts",options:G,height:380,series:G.series,type:"candlestick"})})]})})]})]})});export{x0 as default};
