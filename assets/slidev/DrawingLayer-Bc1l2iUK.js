import{d as u,t as l,L as m,I as c,N as i,o as p,b as f,i as d,B as t}from"../modules/vue-D78jvW9U.js";import{u as _}from"./SlideWrapper-Yp9FdPyK.js";import{u as v}from"./context-B2UpMPSt.js";import"../index-D2G-Jx5v.js";import"../modules/shiki-B8cbrRli.js";const x=u({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=_(),r=v().$scale,n=l();return m(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{x as default};