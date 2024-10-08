import{m as Y,q as F,x as q,z as A,L as X,b as y,n as oe,s as ie,v as ue,y as re,B as z,C as L,D as se,E as ce,G as ve,A as de,a9 as me,H as C,J as v,aa as ge,i as he,ab as W,M as D,ac as Ee,r as U,ad as He,a3 as _,a0 as Z,ae as j,u as fe,af as ye,K as p,N as be,X as $,O as we,ag as Ce,ah as Pe,ai as Me,aj as _e,a4 as Ie,ak as Ne,al as Re,am as De,an as pe,F as Le,ao as Ye,ap as Oe}from"./index-DM3VhAi8.js";import{u as Se}from"./ssrBoot-PdBFYS53.js";const We=Y({text:String,...F(),...q()},"VToolbarTitle"),Ae=A()({name:"VToolbarTitle",props:We(),setup(e,m){let{slots:a}=m;return X(()=>{const T=!!(a.default||a.text||e.text);return y(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var t;return[T&&y("div",{class:"v-toolbar-title__placeholder"},[a.text?a.text():e.text,(t=a.default)==null?void 0:t.call(a)])]}})}),{}}}),Xe=[null,"prominent","default","comfortable","compact"],Te=Y({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Xe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...oe(),...F(),...ie(),...ue(),...q({tag:"header"}),...re()},"VToolbar"),ae=A()({name:"VToolbar",props:Te(),setup(e,m){var h;let{slots:a}=m;const{backgroundColorClasses:T,backgroundColorStyles:t}=z(L(e,"color")),{borderClasses:l}=se(e),{elevationClasses:n}=ce(e),{roundedClasses:r}=ve(e),{themeClasses:x}=de(e),{rtlClasses:S}=me(),i=C(!!(e.extended||(h=a.extension)!=null&&h.call(a))),u=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),g=v(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ge({VBtn:{variant:"text"}}),X(()=>{var P;const o=!!(e.title||a.title),b=!!(a.image||e.image),H=(P=a.extension)==null?void 0:P.call(a);return i.value=!!(e.extended||H),y(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},T.value,l.value,n.value,r.value,x.value,S.value,e.class],style:[t.value,e.style]},{default:()=>[b&&y("div",{key:"image",class:"v-toolbar__image"},[a.image?y(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):y(he,{key:"image-img",cover:!0,src:e.image},null)]),y(W,{defaults:{VTabs:{height:D(u.value)}}},{default:()=>{var s,B,M;return[y("div",{class:"v-toolbar__content",style:{height:D(u.value)}},[a.prepend&&y("div",{class:"v-toolbar__prepend"},[(s=a.prepend)==null?void 0:s.call(a)]),o&&y(Ae,{key:"title",text:e.title},{text:a.title}),(B=a.default)==null?void 0:B.call(a),a.append&&y("div",{class:"v-toolbar__append"},[(M=a.append)==null?void 0:M.call(a)])])]}}),y(W,{defaults:{VTabs:{height:D(g.value)}}},{default:()=>[y(Ee,null,{default:()=>[i.value&&y("div",{class:"v-toolbar__extension",style:{height:D(g.value)}},[H])]})]})]})}),{contentHeight:u,extensionHeight:g}}}),ze=Y({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function $e(e){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:a}=m;let T=0,t=0;const l=U(null),n=C(0),r=C(0),x=C(0),S=C(!1),i=C(!1),u=v(()=>Number(e.scrollThreshold)),g=v(()=>He((u.value-n.value)/u.value||0)),h=()=>{const o=l.value;if(!o||a&&!a.value)return;T=n.value,n.value="window"in o?o.pageYOffset:o.scrollTop;const b=o instanceof Window?document.documentElement.scrollHeight:o.scrollHeight;if(t!==b){t=b;return}i.value=n.value<T,x.value=Math.abs(n.value-u.value)};return _(i,()=>{r.value=r.value||n.value}),_(S,()=>{r.value=0}),Z(()=>{_(()=>e.scrollTarget,o=>{var H;const b=o?document.querySelector(o):window;b&&b!==l.value&&((H=l.value)==null||H.removeEventListener("scroll",h),l.value=b,l.value.addEventListener("scroll",h,{passive:!0}))},{immediate:!0})}),j(()=>{var o;(o=l.value)==null||o.removeEventListener("scroll",h)}),a&&_(a,h,{immediate:!0}),{scrollThreshold:u,currentScroll:n,currentThreshold:x,isScrollActive:S,scrollRatio:g,isScrollingUp:i,savedScroll:r}}const Fe=Y({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Te(),...fe(),...ze(),height:{type:[Number,String],default:64}},"VAppBar"),at=A()({name:"VAppBar",props:Fe(),emits:{"update:modelValue":e=>!0},setup(e,m){let{slots:a}=m;const T=U(),t=ye(e,"modelValue"),l=v(()=>{var B;const s=new Set(((B=e.scrollBehavior)==null?void 0:B.split(" "))??[]);return{hide:s.has("hide"),fullyHide:s.has("fully-hide"),inverted:s.has("inverted"),collapse:s.has("collapse"),elevate:s.has("elevate"),fadeImage:s.has("fade-image")}}),n=v(()=>{const s=l.value;return s.hide||s.fullyHide||s.inverted||s.collapse||s.elevate||s.fadeImage||!t.value}),{currentScroll:r,scrollThreshold:x,isScrollingUp:S,scrollRatio:i}=$e(e,{canScroll:n}),u=v(()=>l.value.hide||l.value.fullyHide),g=v(()=>e.collapse||l.value.collapse&&(l.value.inverted?i.value>0:i.value===0)),h=v(()=>e.flat||l.value.fullyHide&&!t.value||l.value.elevate&&(l.value.inverted?r.value>0:r.value===0)),o=v(()=>l.value.fadeImage?l.value.inverted?1-i.value:i.value:void 0),b=v(()=>{var M,I;if(l.value.hide&&l.value.inverted)return 0;const s=((M=T.value)==null?void 0:M.contentHeight)??0,B=((I=T.value)==null?void 0:I.extensionHeight)??0;return u.value?r.value<x.value||l.value.fullyHide?s+B:s:s+B});p(v(()=>!!e.scrollBehavior),()=>{we(()=>{u.value?l.value.inverted?t.value=r.value>x.value:t.value=S.value||r.value<x.value:t.value=!0})});const{ssrBootStyles:H}=Se(),{layoutItemStyles:P}=be({id:e.name,order:v(()=>parseInt(e.order,10)),position:L(e,"location"),layoutSize:b,elementSize:C(void 0),active:t,absolute:L(e,"absolute")});return X(()=>{const s=ae.filterProps(e);return y(ae,$({ref:T,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...P.value,"--v-toolbar-image-opacity":o.value,height:void 0,...H.value},e.style]},s,{collapse:g.value,flat:h.value}),a)}),{}}});function qe(e){let{rootEl:m,isSticky:a,layoutItemStyles:T}=e;const t=C(!1),l=C(0),n=v(()=>{const S=typeof t.value=="boolean"?"top":t.value;return[a.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[S]:D(l.value)}:{top:T.value.top}]});Z(()=>{_(a,S=>{S?window.addEventListener("scroll",x,{passive:!0}):window.removeEventListener("scroll",x)},{immediate:!0})}),j(()=>{window.removeEventListener("scroll",x)});let r=0;function x(){const S=r>window.scrollY?"up":"down",i=m.value.getBoundingClientRect(),u=parseFloat(T.value.top??0),g=window.scrollY-Math.max(0,l.value-u),h=i.height+Math.max(l.value,u)-window.scrollY-window.innerHeight,o=parseFloat(getComputedStyle(m.value).getPropertyValue("--v-body-scroll-y"))||0;i.height<window.innerHeight-u?(t.value="top",l.value=u):S==="up"&&t.value==="bottom"||S==="down"&&t.value==="top"?(l.value=window.scrollY+i.top-o,t.value=!0):S==="down"&&h<=0?(l.value=0,t.value="bottom"):S==="up"&&g<=0&&(o?t.value!=="top"&&(l.value=-g+o+u,t.value="top"):(l.value=i.top+g,t.value="top")),r=window.scrollY}return{isStuck:t,stickyStyles:n}}const Ue=100,Ze=20;function le(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function ne(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let m=0;for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue;const T=le(m),t=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t);m+=(t-T)*Math.abs(t),a===e.length-1&&(m*=.5)}return le(m)*1e3}function je(){const e={};function m(t){Array.from(t.changedTouches).forEach(l=>{(e[l.identifier]??(e[l.identifier]=new Ce(Ze))).push([t.timeStamp,l])})}function a(t){Array.from(t.changedTouches).forEach(l=>{delete e[l.identifier]})}function T(t){var S;const l=(S=e[t])==null?void 0:S.values().reverse();if(!l)throw new Error(`No samples for touch id ${t}`);const n=l[0],r=[],x=[];for(const i of l){if(n[0]-i[0]>Ue)break;r.push({t:i[0],d:i[1].clientX}),x.push({t:i[0],d:i[1].clientY})}return{x:ne(r),y:ne(x),get direction(){const{x:i,y:u}=this,[g,h]=[Math.abs(i),Math.abs(u)];return g>h&&i>=0?"right":g>h&&i<=0?"left":h>g&&u>=0?"down":h>g&&u<=0?"up":Ge()}}}return{addMovement:m,endTouch:a,getVelocity:T}}function Ge(){throw new Error}function Je(e){let{el:m,isActive:a,isTemporary:T,width:t,touchless:l,position:n}=e;Z(()=>{window.addEventListener("touchstart",s,{passive:!0}),window.addEventListener("touchmove",B,{passive:!1}),window.addEventListener("touchend",M,{passive:!0})}),j(()=>{window.removeEventListener("touchstart",s),window.removeEventListener("touchmove",B),window.removeEventListener("touchend",M)});const r=v(()=>["left","right"].includes(n.value)),{addMovement:x,endTouch:S,getVelocity:i}=je();let u=!1;const g=C(!1),h=C(0),o=C(0);let b;function H(c,d){return(n.value==="left"?c:n.value==="right"?document.documentElement.clientWidth-c:n.value==="top"?c:n.value==="bottom"?document.documentElement.clientHeight-c:R())-(d?t.value:0)}function P(c){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const f=n.value==="left"?(c-o.value)/t.value:n.value==="right"?(document.documentElement.clientWidth-c-o.value)/t.value:n.value==="top"?(c-o.value)/t.value:n.value==="bottom"?(document.documentElement.clientHeight-c-o.value)/t.value:R();return d?Math.max(0,Math.min(1,f)):f}function s(c){if(l.value)return;const d=c.changedTouches[0].clientX,f=c.changedTouches[0].clientY,w=25,V=n.value==="left"?d<w:n.value==="right"?d>document.documentElement.clientWidth-w:n.value==="top"?f<w:n.value==="bottom"?f>document.documentElement.clientHeight-w:R(),k=a.value&&(n.value==="left"?d<t.value:n.value==="right"?d>document.documentElement.clientWidth-t.value:n.value==="top"?f<t.value:n.value==="bottom"?f>document.documentElement.clientHeight-t.value:R());(V||k||a.value&&T.value)&&(b=[d,f],o.value=H(r.value?d:f,a.value),h.value=P(r.value?d:f),u=o.value>-20&&o.value<80,S(c),x(c))}function B(c){const d=c.changedTouches[0].clientX,f=c.changedTouches[0].clientY;if(u){if(!c.cancelable){u=!1;return}const V=Math.abs(d-b[0]),k=Math.abs(f-b[1]);(r.value?V>k&&V>3:k>V&&k>3)?(g.value=!0,u=!1):(r.value?k:V)>3&&(u=!1)}if(!g.value)return;c.preventDefault(),x(c);const w=P(r.value?d:f,!1);h.value=Math.max(0,Math.min(1,w)),w>1?o.value=H(r.value?d:f,!0):w<0&&(o.value=H(r.value?d:f,!1))}function M(c){if(u=!1,!g.value)return;x(c),g.value=!1;const d=i(c.changedTouches[0].identifier),f=Math.abs(d.x),w=Math.abs(d.y);(r.value?f>w&&f>400:w>f&&w>3)?a.value=d.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.value]||R()):a.value=h.value>.5}const I=v(()=>g.value?{transform:n.value==="left"?`translateX(calc(-100% + ${h.value*t.value}px))`:n.value==="right"?`translateX(calc(100% - ${h.value*t.value}px))`:n.value==="top"?`translateY(calc(-100% + ${h.value*t.value}px))`:n.value==="bottom"?`translateY(calc(100% - ${h.value*t.value}px))`:R(),transition:"none"}:void 0);return p(g,()=>{var f,w;const c=((f=m.value)==null?void 0:f.style.transform)??null,d=((w=m.value)==null?void 0:w.style.transition)??null;we(()=>{var V,k,N,O;(k=m.value)==null||k.style.setProperty("transform",((V=I.value)==null?void 0:V.transform)||"none"),(O=m.value)==null||O.style.setProperty("transition",((N=I.value)==null?void 0:N.transition)||null)}),Pe(()=>{var V,k;(V=m.value)==null||V.style.setProperty("transform",c),(k=m.value)==null||k.style.setProperty("transition",d)})}),{isDragging:g,dragProgress:h,dragStyles:I}}function R(){throw new Error}const Ke=["start","end","left","right","top","bottom"],Qe=Y({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,persistent:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>Ke.includes(e)},sticky:Boolean,...oe(),...F(),...Me(),..._e({mobile:null}),...ie(),...fe(),...ue(),...q({tag:"nav"}),...re()},"VNavigationDrawer"),lt=A()({name:"VNavigationDrawer",props:Qe(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,m){let{attrs:a,emit:T,slots:t}=m;const{isRtl:l}=me(),{themeClasses:n}=de(e),{borderClasses:r}=se(e),{backgroundColorClasses:x,backgroundColorStyles:S}=z(L(e,"color")),{elevationClasses:i}=ce(e),{displayClasses:u,mobile:g}=Ie(e),{roundedClasses:h}=ve(e),o=Ne(),b=ye(e,"modelValue",null,E=>!!E),{ssrBootStyles:H}=Se(),{scopeId:P}=Re(),s=U(),B=C(!1),{runOpenDelay:M,runCloseDelay:I}=Ye(e,E=>{B.value=E}),c=v(()=>e.rail&&e.expandOnHover&&B.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),d=v(()=>De(e.location,l.value)),f=v(()=>e.persistent),w=v(()=>!e.permanent&&(g.value||e.temporary)),V=v(()=>e.sticky&&!w.value&&d.value!=="bottom");p(()=>e.expandOnHover&&e.rail!=null,()=>{_(B,E=>T("update:rail",!E))}),p(()=>!e.disableResizeWatcher,()=>{_(w,E=>!e.permanent&&Oe(()=>b.value=!E))}),p(()=>!e.disableRouteWatcher&&!!o,()=>{_(o.currentRoute,()=>w.value&&(b.value=!1))}),_(()=>e.permanent,E=>{E&&(b.value=!0)}),e.modelValue==null&&!w.value&&(b.value=e.permanent||!g.value);const{isDragging:k,dragProgress:N}=Je({el:s,isActive:b,isTemporary:w,width:c,touchless:L(e,"touchless"),position:d}),O=v(()=>{const E=w.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):c.value;return k.value?E*N.value:E}),xe=v(()=>["top","bottom"].includes(e.location)?0:c.value),{layoutItemStyles:G,layoutItemScrimStyles:ke}=be({id:e.name,order:v(()=>parseInt(e.order,10)),position:d,layoutSize:O,elementSize:xe,active:v(()=>b.value||k.value),disableTransitions:v(()=>k.value),absolute:v(()=>e.absolute||V.value&&typeof J.value!="string")}),{isStuck:J,stickyStyles:Ve}=qe({rootEl:s,isSticky:V,layoutItemStyles:G}),K=z(v(()=>typeof e.scrim=="string"?e.scrim:null)),Be=v(()=>({...k.value?{opacity:N.value*.2,transition:"none"}:void 0,...ke.value}));return ge({VList:{bgColor:"transparent"}}),X(()=>{const E=t.image||e.image;return y(Le,null,[y(e.tag,$({ref:s,onMouseenter:M,onMouseleave:I,class:["v-navigation-drawer",`v-navigation-drawer--${d.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":B.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":w.value,"v-navigation-drawer--persistent":f.value,"v-navigation-drawer--active":b.value,"v-navigation-drawer--sticky":V.value},n.value,x.value,r.value,u.value,i.value,h.value,e.class],style:[S.value,G.value,H.value,Ve.value,e.style,["top","bottom"].includes(d.value)?{height:"auto"}:{}]},P,a),{default:()=>{var Q,ee,te;return[E&&y("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?y(W,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):y(he,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&y("div",{class:"v-navigation-drawer__prepend"},[(Q=t.prepend)==null?void 0:Q.call(t)]),y("div",{class:"v-navigation-drawer__content"},[(ee=t.default)==null?void 0:ee.call(t)]),t.append&&y("div",{class:"v-navigation-drawer__append"},[(te=t.append)==null?void 0:te.call(t)])]}}),y(pe,{name:"fade-transition"},{default:()=>[w.value&&(k.value||b.value)&&!!e.scrim&&y("div",$({class:["v-navigation-drawer__scrim",K.backgroundColorClasses.value],style:[Be.value,K.backgroundColorStyles.value],onClick:()=>{f.value||(b.value=!1)}},P),null)]})])}),{isStuck:J}}}),nt=""+new URL("logo01-B99_X8yn.webp",import.meta.url).href;export{at as V,nt as _,lt as a};