import{l as d,o as r,c as o,a as e,n as s,d as g,z as u,f as n,b as a,w as _,m as y,q as v}from"./entry.3a59f98e.js";import{_ as x}from"./Sample.54b4c506.js";import f from"./carousel.esm.a63dd2ea.js";const b={class:"card glass shadow-lg flat"},h=e("div",{class:"form-control"},[e("textarea",{class:"textarea textarea-bordered textarea-primary h-36",placeholder:"Briefly describe your requirements."})],-1),T=e("span",{class:"animate-pulse"},"🔥",-1),N=d({__name:"OrderFormDescription",props:{type:{default:"horizontal"}},setup(l){return(t,i)=>(r(),o("div",b,[e("div",{class:s(["card-body p-4 flex",t.type=="verticle"?"flex-column":"flex-column md:flex-row"])},[h,e("button",{class:s(["btn btn-primary",t.type=="verticle"?"":"sm:mt-9"])},[g("Find An Expert "),T],2)],2)]))}}),O={class:"container mx-auto py-8 sm:py-16"},S=e("div",{class:"section-header my-8 text-center max-w-lg mx-auto px-4"},[e("h2",{class:"text-2xl sm:text-4xl"},"Check Out Our Samples"),e("p",null,"Original. Quality. On time")],-1),V={__name:"Samples",setup(l){u(()=>{t.value=[{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"},{name:"test",image:"test.png",rating:4,description:"Timely delivery"}]});const t=n(),i=n([{breakpoint:"1199px",numVisible:1,numScroll:1},{breakpoint:"991px",numVisible:2,numScroll:1},{breakpoint:"767px",numVisible:1,numScroll:1}]);return(k,w)=>{const m=x,p=f;return r(),o("div",O,[S,a(p,{value:t.value,numVisible:4,numScroll:3,responsiveOptions:i.value,circular:"",autoplayInterval:3e3,class:"mb-4"},{item:_(c=>[a(m,y(v(c.data)),null,16)]),_:1},8,["value","responsiveOptions"])])}}},P=V;export{N as _,P as a};
