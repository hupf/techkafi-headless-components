import{a as n,l as r,n as d,m as g}from"./Mermaid.vue_vue_type_script_setup_true_lang-DQwoQ3hq.js";var w=n((t,e)=>{let o;return e==="sandbox"&&(o=r("#i"+t)),(e==="sandbox"?r(o.nodes()[0].contentDocument.body):r("body")).select(`[id="${t}"]`)},"getDiagramElement"),b=n((t,e,o,a)=>{t.attr("class",o);const{width:i,height:s,x:h,y:x}=l(t,e);d(t,s,i,a);const c=m(h,x,i,s,e);t.attr("viewBox",c),g.debug(`viewBox configured: ${c} with padding: ${e}`)},"setupViewPortForSVG"),l=n((t,e)=>{var a;const o=((a=t.node())==null?void 0:a.getBBox())||{width:0,height:0,x:0,y:0};return{width:o.width+e*2,height:o.height+e*2,x:o.x,y:o.y}},"calculateDimensionsWithPadding"),m=n((t,e,o,a,i)=>`${t-i} ${e-i} ${o} ${a}`,"createViewBox");export{w as g,b as s};
