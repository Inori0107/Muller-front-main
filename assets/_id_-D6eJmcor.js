import{_ as U,R as J,Q as M,r as P,J as Q,o as u,c as V,b as t,w as a,i as w,h as i,t as n,T as c,U as W,V as m,e as q,f as r,j as _,d as h,Y as b,au as j,Z as I,F as x,k as T,g as Y,b9 as Z,a2 as z,P as G,ax as H,p as K,l as X,W as tt}from"./index-KgvYbjNy.js";import{c as at,e as et,u as st,b as lt,V as ot}from"./index.esm-DrnuDCAF.js";import{V as B}from"./VContainer-DfVp4qj-.js";import{V as p}from"./VRow-B7l6IZ1i.js";import{V as d}from"./VCol-D4q1EKs3.js";import{V as rt}from"./VDivider-DQ7h8VTZ.js";import{V as ct}from"./VSheet-BAN1BhpD.js";const F=f=>(K("data-v-b72cf5aa"),f=f(),X(),f),ut={class:"my-4"},nt={class:"mx-1"},dt={class:"my-4"},it={style:{"line-height":"3rem"}},mt=F(()=>i("h1",{class:"text-red"},"已下架",-1)),_t=F(()=>i("div",{class:"category"},"更多商品",-1)),pt={__name:"[id]",setup(f){const{api:k}=tt(),N=z(),$=G(),g=J(),S=M(),o=P({_id:"",name:"",price:0,description:"",image:"",sell:!0,category:"",song:[]});(async()=>{var s,l;try{const{data:e}=await k.get("/product/"+N.params.id);Object.assign(o.value,e.result),document.title="購物網 | "+o.value.name}catch(e){g({text:((l=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const R=async(s,l)=>{if(!S.isLogin){$.push({query:{login:!0}});return}try{const e=await S.addCart_P(s,l);g({text:e.text,snackbarProps:{color:e.color}})}catch{g({text:"加入購物車失敗",snackbarProps:{color:"red"}})}},A=at({quantity:et().typeError("數量必填").required("數量必填").min(1,"最少為 1")}),{isSubmitting:C,handleSubmit:D}=st({validationSchema:A,initialValues:{quantity:1}}),y=lt("quantity"),E=D(async s=>{R(o.value._id,s.quantity)}),v=P([]);(async()=>{var s,l;try{const{data:e}=await k.get("/product",{params:{category:"專輯"}});v.value.splice(0,v.value.length,...e.result.data)}catch(e){g({text:((l=(s=e==null?void 0:e.response)==null?void 0:s.data)==null?void 0:l.message)||"發生錯誤",snackbarProps:{color:"red"}})}})();const L=Q(()=>v.value.filter(s=>s._id!==o.value._id));return(s,l)=>(u(),V(x,null,[t(ct,{style:{height:"auto","padding-top":"84px"}},{default:a(()=>[t(B,null,{default:a(()=>[t(p,{justify:"center",align:"center"},{default:a(()=>[t(d,{cols:"9",md:"4",class:"text-center"},{default:a(()=>[t(w,{src:o.value.image,class:"img"},null,8,["src"])]),_:1}),t(d,{cols:"9",md:"5"},{default:a(()=>[t(d,null,{default:a(()=>[i("h1",ut,n(o.value.name),1),i("p",nt,"NT $"+n(o.value.price),1),t(rt,{class:"my-4"}),i("p",dt,n(o.value.description),1)]),_:1}),t(ot,{disabled:c(C),onSubmit:W(c(E),["prevent"])},{default:a(()=>[t(p,{class:"mx-1"},{default:a(()=>[t(m,{variant:"",icon:"",onClick:l[0]||(l[0]=e=>c(y).value.value--)},{default:a(()=>[t(q,null,{default:a(()=>[r("mdi-minus")]),_:1})]),_:1}),t(_),i("span",it,n(c(y).value),1),t(_),t(m,{variant:"",icon:"",onClick:l[1]||(l[1]=e=>c(y).value.value++)},{default:a(()=>[t(q,null,{default:a(()=>[r("mdi-plus")]),_:1})]),_:1}),t(_),t(m,{type:"submit","prepend-icon":"mdi-cart",loading:c(C),flat:"false"},{default:a(()=>[r(" 加入購物車 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1}),t(p,{justify:"center",class:"mt-8"},{default:a(()=>[o.value.song.length>0?(u(),h(d,{key:0,cols:"9"},{default:a(()=>[t(b,{class:"cool-card"},{default:a(()=>[t(j,{class:"song-title"},{default:a(()=>[r("收錄曲目")]),_:1}),t(I,null,{default:a(()=>[t(p,null,{default:a(()=>[(u(!0),V(x,null,T(o.value.song,(e,O)=>(u(),h(d,{cols:"12",key:O},{default:a(()=>[t(b,{class:"song-card"},{default:a(()=>[t(I,null,{default:a(()=>[r(n(e),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})):Y("",!0)]),_:1}),t(Z,{class:"align-center justify-center text-center","model-value":!o.value.sell,persistent:""},{default:a(()=>[mt,t(m,{to:"/shop/product"},{default:a(()=>[r("商品列表")]),_:1})]),_:1},8,["model-value"])]),_:1})]),_:1}),t(B,{class:"mt-4 mb-8"},{default:a(()=>[_t,t(p,{justify:"center"},{default:a(()=>[(u(!0),V(x,null,T(c(L),e=>(u(),h(d,{cols:"7",md:"3",key:e._id,class:"my-8"},{default:a(()=>[t(b,null,{default:a(()=>[t(w,{src:e.image},null,8,["src"]),t(j,{class:"card-title"},{default:a(()=>[r(n(e.name),1)]),_:2},1024),t(H,null,{default:a(()=>[t(_),t(m,{to:"/shop/products/"+e._id},{default:a(()=>[r("查看詳情")]),_:2},1032,["to"]),t(_)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})],64))}},St=U(pt,[["__scopeId","data-v-b72cf5aa"]]);export{St as default};
