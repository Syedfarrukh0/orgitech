(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3838],{4791:function(e,s,a){"use strict";a.d(s,{Z:function(){return Modal}});var r=a(5893),t=a(7294),i=a(5675),l=a.n(i);a(6732),a(5538);var d=a(5152),n=a.n(d),o=a(990);let c=n()(()=>Promise.all([a.e(4730),a.e(7081)]).then(a.bind(a,5376)),{loadableGenerated:{webpack:()=>[5376]},loading:()=>(0,r.jsx)("p",{children:"Loading..."}),ssr:!1});function Modal(){let[e,s]=(0,t.useState)(!1),[a,i]=(0,t.useState)(!1),[d,n]=(0,t.useState)(null);(0,t.useEffect)(()=>{if(e&&!d){let loadComponent=async()=>{let e=await c;n(e)};loadComponent()}},[e,d]);let closeModal=()=>{s(!1)};return(0,t.useEffect)(()=>{let e=o.ZP.timeline({scrollTrigger:{trigger:".popUpButton-div",start:"top top",end:"bottom top-=20%",scrub:!0,ease:"power1.out"}});e.fromTo("#popUpButton",{opacity:0,y:-100},{opacity:1,y:0,duration:2})}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"popUpButton-div",children:(0,r.jsxs)("button",{"aria-label":"open popup form",id:"popUpButton",onClick:()=>{s(!0)},onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},children:[(0,r.jsx)(l(),{"data-cursor-size":"80px","data-cursor-exclusion":!0,width:100,height:100,className:"popUpRotate",alt:"PopUp Form HireUs Image",title:"PopUp Form HireUs Image",src:"/assets/icons/hire-us.svg",priority:!1}),(0,r.jsx)(l(),{height:50,width:50,title:"PopUp Form Pen Image",alt:"PopUp Form Pen Image",className:"popUpImg",src:a?"/assets/icons/form-pen.gif":"/assets/icons/form-pen.png",priority:!1})]})}),(0,r.jsx)("div",{id:"PopUpMyModal",className:"PopUpmodal ".concat(e?"form-visible":""),children:(0,r.jsx)("div",{className:"PopUpContainer",onClick:e=>{e.target===e.currentTarget&&closeModal()},children:(0,r.jsxs)("div",{className:"PopUpmodal-content",children:[(0,r.jsx)("div",{"data-cursor-size":"60px","data-cursor-exclusion":!0,children:(0,r.jsx)("button",{"aria-label":"close popup form",onClick:closeModal,className:"PopUpClose",children:(0,r.jsx)(l(),{height:50,width:50,priority:!1,title:"Close Form",alt:"close form",src:"/assets/icons/form-close.svg"})})}),d&&(0,r.jsx)(d,{})]})})})]})}},5699:function(e,s,a){"use strict";a.d(s,{Z:function(){return SliderMarquee}});var r=a(5893),t=a(7294),i=a(990),l=a(6546),d=a.n(l),n=a(5675),o=a.n(n);function SliderMarquee(){return(0,t.useEffect)(()=>{let e=i.ZP.context(()=>{let e=document.getElementById("container"),s=document.getElementById("scroll-container"),a=2e3-e.offsetWidth,r=i.ZP.timeline({scrollTrigger:{trigger:s,scrub:!0,start:"top bottom",end:"200% top",pin:!1}});i.ZP.utils.toArray(".module").forEach((e,s)=>{r.fromTo(e,{x:0},{x:"-=".concat(a),autoAlpha:1,duration:.1},"-=0.1")}),i.ZP.utils.toArray(".module-2").forEach((e,s)=>{r.fromTo(e,{x:0},{x:"+=".concat(a),autoAlpha:1,duration:.1},"-=0.1")})});return()=>e.revert()}),(0,t.useEffect)(()=>{i.ZP.utils.toArray(".parallax-slider").forEach(function(e){let s=e.querySelector("img");i.ZP.to(s,{x:()=>s.offsetHeight-e.offsetHeight,ease:"none",startAt:{x:"-10%"},scrollTrigger:{trigger:e,start:"top bottom",end:"150% top",scrub:!0,pin:!1,markers:!1,invalidateOnRefresh:!0},x:"10%"})})}),(0,r.jsx)("div",{children:(0,r.jsxs)("div",{id:"scroll-container",children:[(0,r.jsxs)("div",{id:"container",className:"cf-10",children:[(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-02.webp",alt:"image 1",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-03.webp",alt:"image 2",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-03.webp",alt:"image 3",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-03.webp",alt:"image 4",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-02.webp",alt:"image 5",width:1e3,height:1e3})})]}),(0,r.jsxs)("div",{id:"container",className:"cr-10",children:[(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-04.webp",alt:"image 1",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-05.webp",alt:"image 2",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-06.webp",alt:"image 3",width:1e3,height:1e3})})]}),(0,r.jsxs)("div",{id:"container",className:"minus-10",children:[(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-01.webp",alt:"image 1",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-07.webp",alt:"image 2",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-08.webp",alt:"image 3",width:800,height:550})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-09.webp",alt:"image 4",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-07.webp",alt:"image 5",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider-2/card-08.webp",alt:"image 6",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module",children:(0,r.jsx)(o(),{src:"/assets/slider/card-09.webp",alt:"image 6",width:1e3,height:1e3})})]}),(0,r.jsxs)("div",{id:"container",className:"cl-10",children:[(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider/card-01.webp",alt:"image 1",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider/card-06.webp",alt:"image 2",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider/card-02.webp",alt:"image 3",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider/card-07.webp",alt:"image 4",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2 parallax-slider",children:(0,r.jsx)(o(),{src:"/assets/slider/card-06.webp",alt:"image 5",width:1e3,height:1e3})}),(0,r.jsx)("div",{className:"module-2",children:(0,r.jsx)(o(),{src:"/assets/slider/card-01.webp",alt:"image 6",width:1e3,height:1e3})})]})]})})}a(5124),i.ZP.registerPlugin(d())},3047:function(e,s,a){"use strict";var r=a(5893),t=a(7294),i=a(990);s.Z=e=>{let{text:s}=e;return(0,t.useEffect)(()=>{let e=document.querySelectorAll(".mainLoaderBar"),s=i.ZP.timeline(),a=i.ZP.context(()=>{s.from(".loader-wrap-heading p",{delay:.5,y:200,skewY:10,duration:1}).to(".loader-wrap-heading p",{delay:.5,y:-200,skewY:10,duration:1}).to(e,{height:0,duration:.6,delay:-.5,ease:"power2.easeIn",stagger:.1}).to("#loader",{y:"-1500",opacity:0,ease:"power2.inOut"})});return()=>a.revert()},[]),(0,r.jsxs)("div",{className:"loader-wrap",id:"loader",children:[(0,r.jsxs)("div",{className:"mainLoaderBg",children:[(0,r.jsx)("span",{className:"mainLoaderBar",id:"loaderbars"}),(0,r.jsx)("span",{className:"mainLoaderBar",id:"loaderbars"}),(0,r.jsx)("span",{className:"mainLoaderBar",id:"loaderbars"}),(0,r.jsx)("span",{className:"mainLoaderBar",id:"loaderbars"}),(0,r.jsx)("span",{className:"mainLoaderBar",id:"loaderbars"})]}),(0,r.jsx)("div",{className:"loader-wrap-heading",children:(0,r.jsx)("span",{children:(0,r.jsx)("p",{children:s})})})]})}},7237:function(e){e.exports={nextContainer:"next_nextContainer__89t8T",subHeading:"next_subHeading__FRofA",mainHeading:"next_mainHeading__i1utm",nextUpContainer:"next_nextUpContainer__GI5eb"}},2708:function(e,s,a){"use strict";a.d(s,{YD:function(){return useInView}});var r=a(7294),t=Object.defineProperty,i=new Map,l=new WeakMap,d=0,n=void 0;function useInView({threshold:e,delay:s,trackVisibility:a,rootMargin:t,root:o,triggerOnce:c,skip:h,initialInView:p,fallbackInView:m,onChange:u}={}){var x;let[g,j]=r.useState(null),w=r.useRef(),[f,v]=r.useState({inView:!!p,entry:void 0});w.current=u,r.useEffect(()=>{let r;if(!h&&g)return r=function(e,s,a={},r=n){if(void 0===window.IntersectionObserver&&void 0!==r){let t=e.getBoundingClientRect();return s(r,{isIntersecting:r,target:e,intersectionRatio:"number"==typeof a.threshold?a.threshold:0,time:0,boundingClientRect:t,intersectionRect:t,rootBounds:t}),()=>{}}let{id:t,observer:o,elements:c}=function(e){let s=Object.keys(e).sort().filter(s=>void 0!==e[s]).map(s=>{var a;return`${s}_${"root"===s?(a=e.root)?(l.has(a)||(d+=1,l.set(a,d.toString())),l.get(a)):"0":e[s]}`}).toString(),a=i.get(s);if(!a){let r;let t=new Map,l=new IntersectionObserver(s=>{s.forEach(s=>{var a;let i=s.isIntersecting&&r.some(e=>s.intersectionRatio>=e);e.trackVisibility&&void 0===s.isVisible&&(s.isVisible=i),null==(a=t.get(s.target))||a.forEach(e=>{e(i,s)})})},e);r=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),a={id:s,observer:l,elements:t},i.set(s,a)}return a}(a),h=c.get(e)||[];return c.has(e)||c.set(e,h),h.push(s),o.observe(e),function(){h.splice(h.indexOf(s),1),0===h.length&&(c.delete(e),o.unobserve(e)),0===c.size&&(o.disconnect(),i.delete(t))}}(g,(e,s)=>{v({inView:e,entry:s}),w.current&&w.current(e,s),s.isIntersecting&&c&&r&&(r(),r=void 0)},{root:o,rootMargin:t,threshold:e,trackVisibility:a,delay:s},m),()=>{r&&r()}},[Array.isArray(e)?e.toString():e,g,o,t,c,h,a,m,s]);let b=null==(x=f.entry)?void 0:x.target,N=r.useRef();g||!b||c||h||N.current===b||(N.current=b,v({inView:!!p,entry:void 0}));let y=[j,f.inView,f.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}r.Component}}]);