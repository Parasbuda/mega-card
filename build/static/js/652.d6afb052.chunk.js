"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[652],{43120:function(e,t,n){function r(e){return e?(e.nodeName||"").toLowerCase():null}n.d(t,{Z:function(){return r}})},93265:function(e,t,n){function r(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}n.d(t,{Z:function(){return r}})},39265:function(e,t,n){n.d(t,{Re:function(){return o},Zq:function(){return a},kK:function(){return i}});var r=n(93265);function i(e){return e instanceof(0,r.Z)(e).Element||e instanceof Element}function o(e){return e instanceof(0,r.Z)(e).HTMLElement||e instanceof HTMLElement}function a(e){return"undefined"!==typeof ShadowRoot&&(e instanceof(0,r.Z)(e).ShadowRoot||e instanceof ShadowRoot)}},13514:function(e,t,n){var r=n(43120),i=n(39265);t.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},a=t.elements[e];(0,i.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?a.removeAttribute(e):a.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],a=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});(0,i.Re)(o)&&(0,r.Z)(o)&&(Object.assign(o.style,s),Object.keys(a).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]}},50481:function(e,t,n){n.d(t,{fi:function(){return ge}});var r=n(39265),i=Math.max,o=Math.min,a=Math.round;function s(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),i=1,o=1;if((0,r.Re)(e)&&t){var s=e.offsetHeight,c=e.offsetWidth;c>0&&(i=a(n.width)/c||1),s>0&&(o=a(n.height)/s||1)}return{width:n.width/i,height:n.height/o,top:n.top/o,right:n.right/i,bottom:n.bottom/o,left:n.left/i,x:n.left/i,y:n.top/o}}var c=n(93265);function u(e){var t=(0,c.Z)(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}var f=n(43120);function p(e){return(((0,r.kK)(e)?e.ownerDocument:e.document)||window.document).documentElement}function d(e){return s(p(e)).left+u(e).scrollLeft}function l(e){return(0,c.Z)(e).getComputedStyle(e)}function m(e){var t=l(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function v(e,t,n){void 0===n&&(n=!1);var i=(0,r.Re)(t),o=(0,r.Re)(t)&&function(e){var t=e.getBoundingClientRect(),n=a(t.width)/e.offsetWidth||1,r=a(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),l=p(t),v=s(e,o),h={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(i||!i&&!n)&&(("body"!==(0,f.Z)(t)||m(l))&&(h=function(e){return e!==(0,c.Z)(e)&&(0,r.Re)(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:u(e);var t}(t)),(0,r.Re)(t)?((g=s(t,!0)).x+=t.clientLeft,g.y+=t.clientTop):l&&(g.x=d(l))),{x:v.left+h.scrollLeft-g.x,y:v.top+h.scrollTop-g.y,width:v.width,height:v.height}}function h(e){var t=s(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function g(e){return"html"===(0,f.Z)(e)?e:e.assignedSlot||e.parentNode||((0,r.Zq)(e)?e.host:null)||p(e)}function b(e){return["html","body","#document"].indexOf((0,f.Z)(e))>=0?e.ownerDocument.body:(0,r.Re)(e)&&m(e)?e:b(g(e))}function y(e,t){var n;void 0===t&&(t=[]);var r=b(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=(0,c.Z)(r),a=i?[o].concat(o.visualViewport||[],m(r)?r:[]):r,s=t.concat(a);return i?s:s.concat(y(g(a)))}function w(e){return["table","td","th"].indexOf((0,f.Z)(e))>=0}function x(e){return(0,r.Re)(e)&&"fixed"!==l(e).position?e.offsetParent:null}function O(e){for(var t=(0,c.Z)(e),n=x(e);n&&w(n)&&"static"===l(n).position;)n=x(n);return n&&("html"===(0,f.Z)(n)||"body"===(0,f.Z)(n)&&"static"===l(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&(0,r.Re)(e)&&"fixed"===l(e).position)return null;var n=g(e);for((0,r.Zq)(n)&&(n=n.host);(0,r.Re)(n)&&["html","body"].indexOf((0,f.Z)(n))<0;){var i=l(n);if("none"!==i.transform||"none"!==i.perspective||"paint"===i.contain||-1!==["transform","perspective"].indexOf(i.willChange)||t&&"filter"===i.willChange||t&&i.filter&&"none"!==i.filter)return n;n=n.parentNode}return null}(e)||t}var E="top",A="bottom",T="right",j="left",k="auto",D=[E,A,T,j],L="start",C="end",R="viewport",P="popper",S=D.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+C])}),[]),M=[].concat(D,[k]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+C])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function Z(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function V(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function N(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,i=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?W:o;return function(e,t,n){void 0===n&&(n=a);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:o,setOptions:function(n){var c="function"===typeof n?n(o.options):n;f(),o.options=Object.assign({},a,o.options,c),o.scrollParents={reference:(0,r.kK)(e)?y(e):e.contextElement?y(e.contextElement):[],popper:y(t)};var p=function(e){var t=Z(e);return H.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(i,o.options.modifiers)));return o.orderedModifiers=p.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};s.push(a||c)}})),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(B(t,n)){o.rects={reference:v(t,O(n),"fixed"===o.options.strategy),popper:h(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,f=void 0===s?{}:s,p=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:p,instance:u})||o)}else o.reset=!1,r=-1}}},update:V((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){f(),c=!0}};if(!B(e,t))return u;function f(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var I={passive:!0};var q={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,a=r.resize,s=void 0===a||a,u=(0,c.Z)(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&f.forEach((function(e){e.addEventListener("scroll",n.update,I)})),s&&u.addEventListener("resize",n.update,I),function(){o&&f.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),s&&u.removeEventListener("resize",n.update,I)}},data:{}};function _(e){return e.split("-")[0]}function U(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e){var t,n=e.reference,r=e.element,i=e.placement,o=i?_(i):null,a=i?U(i):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(o){case E:t={x:s,y:n.y-r.height};break;case A:t={x:s,y:n.y+n.height};break;case T:t={x:n.x+n.width,y:c};break;case j:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=o?$(o):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case L:t[u]=t[u]-(n[f]/2-r[f]/2);break;case C:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}var K={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=F({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},z={top:"auto",right:"auto",bottom:"auto",left:"auto"};function X(e){var t,n=e.popper,r=e.popperRect,i=e.placement,o=e.variation,s=e.offsets,u=e.position,f=e.gpuAcceleration,d=e.adaptive,m=e.roundOffsets,v=e.isFixed,h=s.x,g=void 0===h?0:h,b=s.y,y=void 0===b?0:b,w="function"===typeof m?m({x:g,y:y}):{x:g,y:y};g=w.x,y=w.y;var x=s.hasOwnProperty("x"),k=s.hasOwnProperty("y"),D=j,L=E,R=window;if(d){var P=O(n),S="clientHeight",M="clientWidth";if(P===(0,c.Z)(n)&&"static"!==l(P=p(n)).position&&"absolute"===u&&(S="scrollHeight",M="scrollWidth"),P=P,i===E||(i===j||i===T)&&o===C)L=A,y-=(v&&P===R&&R.visualViewport?R.visualViewport.height:P[S])-r.height,y*=f?1:-1;if(i===j||(i===E||i===A)&&o===C)D=T,g-=(v&&P===R&&R.visualViewport?R.visualViewport.width:P[M])-r.width,g*=f?1:-1}var H,Z=Object.assign({position:u},d&&z),V=!0===m?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:a(t*r)/r||0,y:a(n*r)/r||0}}({x:g,y:y}):{x:g,y:y};return g=V.x,y=V.y,f?Object.assign({},Z,((H={})[L]=k?"0":"",H[D]=x?"0":"",H.transform=(R.devicePixelRatio||1)<=1?"translate("+g+"px, "+y+"px)":"translate3d("+g+"px, "+y+"px, 0)",H)):Object.assign({},Z,((t={})[L]=k?y+"px":"",t[D]=x?g+"px":"",t.transform="",t))}var Y={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,a=void 0===o||o,s=n.roundOffsets,c=void 0===s||s,u={placement:_(t.placement),variation:U(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,X(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,X(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},J=n(13514);var G={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,a=M.reduce((function(e,n){return e[n]=function(e,t,n){var r=_(e),i=[j,E].indexOf(r)>=0?-1:1,o="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=o[0],s=o[1];return a=a||0,s=(s||0)*i,[j,T].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,o),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},Q={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Q[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&(0,r.Zq)(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function oe(e,t){return t===R?ie(function(e){var t=(0,c.Z)(e),n=p(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,a=0,s=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:i,height:o,x:a+d(e),y:s}}(e)):(0,r.kK)(t)?function(e){var t=s(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):ie(function(e){var t,n=p(e),r=u(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=i(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=i(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+d(e),f=-r.scrollTop;return"rtl"===l(o||n).direction&&(c+=i(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:c,y:f}}(p(e)))}function ae(e,t,n){var a="clippingParents"===t?function(e){var t=y(g(e)),n=["absolute","fixed"].indexOf(l(e).position)>=0&&(0,r.Re)(e)?O(e):e;return(0,r.kK)(n)?t.filter((function(e){return(0,r.kK)(e)&&re(e,n)&&"body"!==(0,f.Z)(e)})):[]}(e):[].concat(t),s=[].concat(a,[n]),c=s[0],u=s.reduce((function(t,n){var r=oe(e,n);return t.top=i(r.top,t.top),t.right=o(r.right,t.right),t.bottom=o(r.bottom,t.bottom),t.left=i(r.left,t.left),t}),oe(e,c));return u.width=u.right-u.left,u.height=u.bottom-u.top,u.x=u.left,u.y=u.top,u}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,i=n.placement,o=void 0===i?e.placement:i,a=n.boundary,c=void 0===a?"clippingParents":a,u=n.rootBoundary,f=void 0===u?R:u,d=n.elementContext,l=void 0===d?P:d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,g=void 0===h?0:h,b=se("number"!==typeof g?g:ce(g,D)),y=l===P?"reference":P,w=e.rects.popper,x=e.elements[v?y:l],O=ae((0,r.kK)(x)?x:x.contextElement||p(e.elements.popper),c,f),j=s(e.elements.reference),k=F({reference:j,element:w,strategy:"absolute",placement:o}),L=ie(Object.assign({},w,k)),C=l===P?L:j,S={top:O.top-C.top+b.top,bottom:C.bottom-O.bottom+b.bottom,left:O.left-C.left+b.left,right:C.right-O.right+b.right},M=e.modifiersData.offset;if(l===P&&M){var H=M[o];Object.keys(S).forEach((function(e){var t=[T,A].indexOf(e)>=0?1:-1,n=[E,A].indexOf(e)>=0?"y":"x";S[e]+=H[n]*t}))}return S}var fe={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var i=n.mainAxis,o=void 0===i||i,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,g=_(h),b=c||(g===h||!m?[ee(h)]:function(e){if(_(e)===k)return[];var t=ee(e);return[ne(e),t,ne(t)]}(h)),y=[h].concat(b).reduce((function(e,n){return e.concat(_(n)===k?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?M:c,f=U(r),p=f?s?S:S.filter((function(e){return U(e)===f})):D,d=p.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=p);var l=d.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:i,rootBoundary:o,padding:a})[_(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:p,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,C=!0,R=y[0],P=0;P<y.length;P++){var H=y[P],Z=_(H),V=U(H)===L,W=[E,A].indexOf(Z)>=0,B=W?"width":"height",N=ue(t,{placement:H,boundary:f,rootBoundary:p,altBoundary:d,padding:u}),I=W?V?T:j:V?A:E;w[B]>x[B]&&(I=ee(I));var q=ee(I),$=[];if(o&&$.push(N[Z]<=0),s&&$.push(N[I]<=0,N[q]<=0),$.every((function(e){return e}))){R=H,C=!1;break}O.set(H,$)}if(C)for(var F=function(e){var t=y.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return R=t,"break"},K=m?3:1;K>0;K--){if("break"===F(K))break}t.placement!==R&&(t.modifiersData[r]._skip=!0,t.placement=R,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function pe(e,t,n){return i(e,o(t,n))}var de={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,s=void 0===a||a,c=n.altAxis,u=void 0!==c&&c,f=n.boundary,p=n.rootBoundary,d=n.altBoundary,l=n.padding,m=n.tether,v=void 0===m||m,g=n.tetherOffset,b=void 0===g?0:g,y=ue(t,{boundary:f,rootBoundary:p,padding:l,altBoundary:d}),w=_(t.placement),x=U(t.placement),k=!x,D=$(w),C="x"===D?"y":"x",R=t.modifiersData.popperOffsets,P=t.rects.reference,S=t.rects.popper,M="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,H="number"===typeof M?{mainAxis:M,altAxis:M}:Object.assign({mainAxis:0,altAxis:0},M),Z=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,V={x:0,y:0};if(R){if(s){var W,B="y"===D?E:j,N="y"===D?A:T,I="y"===D?"height":"width",q=R[D],F=q+y[B],K=q-y[N],z=v?-S[I]/2:0,X=x===L?P[I]:S[I],Y=x===L?-S[I]:-P[I],J=t.elements.arrow,G=v&&J?h(J):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[B],te=Q[N],ne=pe(0,P[I],G[I]),re=k?P[I]/2-z-ne-ee-H.mainAxis:X-ne-ee-H.mainAxis,ie=k?-P[I]/2+z+ne+te+H.mainAxis:Y+ne+te+H.mainAxis,oe=t.elements.arrow&&O(t.elements.arrow),ae=oe?"y"===D?oe.clientTop||0:oe.clientLeft||0:0,se=null!=(W=null==Z?void 0:Z[D])?W:0,ce=q+ie-se,fe=pe(v?o(F,q+re-se-ae):F,q,v?i(K,ce):K);R[D]=fe,V[D]=fe-q}if(u){var de,le="x"===D?E:j,me="x"===D?A:T,ve=R[C],he="y"===C?"height":"width",ge=ve+y[le],be=ve-y[me],ye=-1!==[E,j].indexOf(w),we=null!=(de=null==Z?void 0:Z[C])?de:0,xe=ye?ge:ve-P[he]-S[he]-we+H.altAxis,Oe=ye?ve+P[he]+S[he]-we-H.altAxis:be,Ee=v&&ye?function(e,t,n){var r=pe(e,t,n);return r>n?n:r}(xe,ve,Oe):pe(v?xe:ge,ve,v?Oe:be);R[C]=Ee,V[C]=Ee-ve}t.modifiersData[r]=V}},requiresIfExists:["offset"]};var le={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,i=e.options,o=n.elements.arrow,a=n.modifiersData.popperOffsets,s=_(n.placement),c=$(s),u=[j,T].indexOf(s)>=0?"height":"width";if(o&&a){var f=function(e,t){return se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,D))}(i.padding,n),p=h(o),d="y"===c?E:j,l="y"===c?A:T,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],v=a[c]-n.rects.reference[c],g=O(o),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=m/2-v/2,w=f[d],x=b-p[u]-f[l],k=b/2-p[u]/2+y,L=pe(w,k,x),C=c;n.modifiersData[r]=((t={})[C]=L,t.centerOffset=L-k,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function ve(e){return[E,T,A,j].some((function(t){return e[t]>=0}))}var he={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),c=me(a,r),u=me(s,i,o),f=ve(c),p=ve(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":p})}},ge=N({defaultModifiers:[q,K,Y,J.Z,G,fe,de,le,he]})},36652:function(e,t,n){n.d(t,{ZP:function(){return le}});var r=n(50481),i=n(13514),o="tippy-content",a="tippy-backdrop",s="tippy-arrow",c="tippy-svg-arrow",u={passive:!0,capture:!0},f=function(){return document.body};function p(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function d(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function l(e,t){return"function"===typeof e?e.apply(void 0,t):e}function m(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function v(e){return[].concat(e)}function h(e,t){-1===e.indexOf(t)&&e.push(t)}function g(e){return e.split("-")[0]}function b(e){return[].slice.call(e)}function y(e){return Object.keys(e).reduce((function(t,n){return void 0!==e[n]&&(t[n]=e[n]),t}),{})}function w(){return document.createElement("div")}function x(e){return["Element","Fragment"].some((function(t){return d(e,t)}))}function O(e){return d(e,"MouseEvent")}function E(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function A(e){return x(e)?[e]:function(e){return d(e,"NodeList")}(e)?b(e):Array.isArray(e)?e:b(document.querySelectorAll(e))}function T(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function j(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function k(e){var t,n=v(e)[0];return null!=n&&null!=(t=n.ownerDocument)&&t.body?n.ownerDocument:document}function D(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function L(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==n.getRootNode||null==(r=n.getRootNode())?void 0:r.host}return!1}var C={isTouch:!1},R=0;function P(){C.isTouch||(C.isTouch=!0,window.performance&&document.addEventListener("mousemove",S))}function S(){var e=performance.now();e-R<20&&(C.isTouch=!1,document.removeEventListener("mousemove",S)),R=e}function M(){var e=document.activeElement;if(E(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var H=!!("undefined"!==typeof window&&"undefined"!==typeof document)&&!!window.msCrypto;var Z={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},V=Object.assign({appendTo:f,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},Z,{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),W=Object.keys(V);function B(e){var t=(e.plugins||[]).reduce((function(t,n){var r,i=n.name,o=n.defaultValue;i&&(t[i]=void 0!==e[i]?e[i]:null!=(r=V[i])?r:o);return t}),{});return Object.assign({},e,t)}function N(e,t){var n=Object.assign({},t,{content:l(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(B(Object.assign({},V,{plugins:t}))):W).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(i){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},V.aria,n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function I(e,t){e.innerHTML=t}function q(e){var t=w();return!0===e?t.className=s:(t.className=c,x(e)?t.appendChild(e):I(t,e)),t}function _(e,t){x(t.content)?(I(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?I(e,t.content):e.textContent=t.content)}function U(e){var t=e.firstElementChild,n=b(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(o)})),arrow:n.find((function(e){return e.classList.contains(s)||e.classList.contains(c)})),backdrop:n.find((function(e){return e.classList.contains(a)}))}}function $(e){var t=w(),n=w();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=w();function i(n,r){var i=U(t),o=i.box,a=i.content,s=i.arrow;r.theme?o.setAttribute("data-theme",r.theme):o.removeAttribute("data-theme"),"string"===typeof r.animation?o.setAttribute("data-animation",r.animation):o.removeAttribute("data-animation"),r.inertia?o.setAttribute("data-inertia",""):o.removeAttribute("data-inertia"),o.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?o.setAttribute("role",r.role):o.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||_(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(o.removeChild(s),o.appendChild(q(r.arrow))):o.appendChild(q(r.arrow)):s&&o.removeChild(s)}return r.className=o,r.setAttribute("data-state","hidden"),_(r,e.props),t.appendChild(n),n.appendChild(r),i(e.props,e.props),{popper:t,onUpdate:i}}$.$$tippy=!0;var F=1,K=[],z=[];function X(e,t){var n,i,o,a,s,c,d,x,E=N(e,Object.assign({},V,B(y(t)))),A=!1,R=!1,P=!1,S=!1,M=[],Z=m(we,E.interactiveDebounce),W=F++,I=(x=E.plugins).filter((function(e,t){return x.indexOf(e)===t})),q={id:W,reference:e,popper:w(),popperInstance:null,props:E,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:I,clearDelayTimeouts:function(){clearTimeout(n),clearTimeout(i),cancelAnimationFrame(o)},setProps:function(t){0;if(q.state.isDestroyed)return;ae("onBeforeUpdate",[q,t]),be();var n=q.props,r=N(e,Object.assign({},n,y(t),{ignoreAttributes:!0}));q.props=r,ge(),n.interactiveDebounce!==r.interactiveDebounce&&(ue(),Z=m(we,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?v(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");ce(),oe(),X&&X(n,r);q.popperInstance&&(Ae(),je().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));ae("onAfterUpdate",[q,t])},setContent:function(e){q.setProps({content:e})},show:function(){0;var e=q.state.isVisible,t=q.state.isDestroyed,n=!q.state.isEnabled,r=C.isTouch&&!q.props.touch,i=p(q.props.duration,0,V.duration);if(e||t||n||r)return;if(te().hasAttribute("disabled"))return;if(ae("onShow",[q],!1),!1===q.props.onShow(q))return;q.state.isVisible=!0,ee()&&($.style.visibility="visible");oe(),le(),q.state.isMounted||($.style.transition="none");if(ee()){var o=re(),a=o.box,s=o.content;T([a,s],0)}c=function(){var e;if(q.state.isVisible&&!S){if(S=!0,$.offsetHeight,$.style.transition=q.props.moveTransition,ee()&&q.props.animation){var t=re(),n=t.box,r=t.content;T([n,r],i),j([n,r],"visible")}se(),ce(),h(z,q),null==(e=q.popperInstance)||e.forceUpdate(),ae("onMount",[q]),q.props.animation&&ee()&&function(e,t){ve(e,t)}(i,(function(){q.state.isShown=!0,ae("onShown",[q])}))}},function(){var e,t=q.props.appendTo,n=te();e=q.props.interactive&&t===f||"parent"===t?n.parentNode:l(t,[n]);e.contains($)||e.appendChild($);q.state.isMounted=!0,Ae(),!1}()},hide:function(){0;var e=!q.state.isVisible,t=q.state.isDestroyed,n=!q.state.isEnabled,r=p(q.props.duration,1,V.duration);if(e||t||n)return;if(ae("onHide",[q],!1),!1===q.props.onHide(q))return;q.state.isVisible=!1,q.state.isShown=!1,S=!1,A=!1,ee()&&($.style.visibility="hidden");if(ue(),me(),oe(!0),ee()){var i=re(),o=i.box,a=i.content;q.props.animation&&(T([o,a],r),j([o,a],"hidden"))}se(),ce(),q.props.animation?ee()&&function(e,t){ve(e,(function(){!q.state.isVisible&&$.parentNode&&$.parentNode.contains($)&&t()}))}(r,q.unmount):q.unmount()},hideWithInteractivity:function(e){0;ne().addEventListener("mousemove",Z),h(K,Z),Z(e)},enable:function(){q.state.isEnabled=!0},disable:function(){q.hide(),q.state.isEnabled=!1},unmount:function(){0;q.state.isVisible&&q.hide();if(!q.state.isMounted)return;Te(),je().forEach((function(e){e._tippy.unmount()})),$.parentNode&&$.parentNode.removeChild($);z=z.filter((function(e){return e!==q})),q.state.isMounted=!1,ae("onHidden",[q])},destroy:function(){0;if(q.state.isDestroyed)return;q.clearDelayTimeouts(),q.unmount(),be(),delete e._tippy,q.state.isDestroyed=!0,ae("onDestroy",[q])}};if(!E.render)return q;var _=E.render(q),$=_.popper,X=_.onUpdate;$.setAttribute("data-tippy-root",""),$.id="tippy-"+q.id,q.popper=$,e._tippy=q,$._tippy=q;var Y=I.map((function(e){return e.fn(q)})),J=e.hasAttribute("aria-expanded");return ge(),ce(),oe(),ae("onCreate",[q]),E.showOnCreate&&ke(),$.addEventListener("mouseenter",(function(){q.props.interactive&&q.state.isVisible&&q.clearDelayTimeouts()})),$.addEventListener("mouseleave",(function(){q.props.interactive&&q.props.trigger.indexOf("mouseenter")>=0&&ne().addEventListener("mousemove",Z)})),q;function G(){var e=q.props.touch;return Array.isArray(e)?e:[e,0]}function Q(){return"hold"===G()[0]}function ee(){var e;return!(null==(e=q.props.render)||!e.$$tippy)}function te(){return d||e}function ne(){var e=te().parentNode;return e?k(e):document}function re(){return U($)}function ie(e){return q.state.isMounted&&!q.state.isVisible||C.isTouch||a&&"focus"===a.type?0:p(q.props.delay,e?0:1,V.delay)}function oe(e){void 0===e&&(e=!1),$.style.pointerEvents=q.props.interactive&&!e?"":"none",$.style.zIndex=""+q.props.zIndex}function ae(e,t,n){var r;(void 0===n&&(n=!0),Y.forEach((function(n){n[e]&&n[e].apply(n,t)})),n)&&(r=q.props)[e].apply(r,t)}function se(){var t=q.props.aria;if(t.content){var n="aria-"+t.content,r=$.id;v(q.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(q.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var i=t&&t.replace(r,"").trim();i?e.setAttribute(n,i):e.removeAttribute(n)}}))}}function ce(){!J&&q.props.aria.expanded&&v(q.props.triggerTarget||e).forEach((function(e){q.props.interactive?e.setAttribute("aria-expanded",q.state.isVisible&&e===te()?"true":"false"):e.removeAttribute("aria-expanded")}))}function ue(){ne().removeEventListener("mousemove",Z),K=K.filter((function(e){return e!==Z}))}function fe(t){if(!C.isTouch||!P&&"mousedown"!==t.type){var n=t.composedPath&&t.composedPath()[0]||t.target;if(!q.props.interactive||!L($,n)){if(v(q.props.triggerTarget||e).some((function(e){return L(e,n)}))){if(C.isTouch)return;if(q.state.isVisible&&q.props.trigger.indexOf("click")>=0)return}else ae("onClickOutside",[q,t]);!0===q.props.hideOnClick&&(q.clearDelayTimeouts(),q.hide(),R=!0,setTimeout((function(){R=!1})),q.state.isMounted||me())}}}function pe(){P=!0}function de(){P=!1}function le(){var e=ne();e.addEventListener("mousedown",fe,!0),e.addEventListener("touchend",fe,u),e.addEventListener("touchstart",de,u),e.addEventListener("touchmove",pe,u)}function me(){var e=ne();e.removeEventListener("mousedown",fe,!0),e.removeEventListener("touchend",fe,u),e.removeEventListener("touchstart",de,u),e.removeEventListener("touchmove",pe,u)}function ve(e,t){var n=re().box;function r(e){e.target===n&&(D(n,"remove",r),t())}if(0===e)return t();D(n,"remove",s),D(n,"add",r),s=r}function he(t,n,r){void 0===r&&(r=!1),v(q.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),M.push({node:e,eventType:t,handler:n,options:r})}))}function ge(){var e;Q()&&(he("touchstart",ye,{passive:!0}),he("touchend",xe,{passive:!0})),(e=q.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch(he(e,ye),e){case"mouseenter":he("mouseleave",xe);break;case"focus":he(H?"focusout":"blur",Oe);break;case"focusin":he("focusout",Oe)}}))}function be(){M.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,i=e.options;t.removeEventListener(n,r,i)})),M=[]}function ye(e){var t,n=!1;if(q.state.isEnabled&&!Ee(e)&&!R){var r="focus"===(null==(t=a)?void 0:t.type);a=e,d=e.currentTarget,ce(),!q.state.isVisible&&O(e)&&K.forEach((function(t){return t(e)})),"click"===e.type&&(q.props.trigger.indexOf("mouseenter")<0||A)&&!1!==q.props.hideOnClick&&q.state.isVisible?n=!0:ke(e),"click"===e.type&&(A=!n),n&&!r&&De(e)}}function we(e){var t=e.target,n=te().contains(t)||$.contains(t);if("mousemove"!==e.type||!n){var r=je().concat($).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:E}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,i=e.popperState,o=e.props.interactiveBorder,a=g(i.placement),s=i.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,f="right"===a?s.left.x:0,p="left"===a?s.right.x:0,d=t.top-r+c>o,l=r-t.bottom-u>o,m=t.left-n+f>o,v=n-t.right-p>o;return d||l||m||v}))})(r,e)&&(ue(),De(e))}}function xe(e){Ee(e)||q.props.trigger.indexOf("click")>=0&&A||(q.props.interactive?q.hideWithInteractivity(e):De(e))}function Oe(e){q.props.trigger.indexOf("focusin")<0&&e.target!==te()||q.props.interactive&&e.relatedTarget&&$.contains(e.relatedTarget)||De(e)}function Ee(e){return!!C.isTouch&&Q()!==e.type.indexOf("touch")>=0}function Ae(){Te();var t=q.props,n=t.popperOptions,i=t.placement,o=t.offset,a=t.getReferenceClientRect,s=t.moveTransition,u=ee()?U($).arrow:null,f=a?{getBoundingClientRect:a,contextElement:a.contextElement||te()}:e,p={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(ee()){var n=re().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},d=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!s}},p];ee()&&u&&d.push({name:"arrow",options:{element:u,padding:3}}),d.push.apply(d,(null==n?void 0:n.modifiers)||[]),q.popperInstance=(0,r.fi)(f,$,Object.assign({},n,{placement:i,onFirstUpdate:c,modifiers:d}))}function Te(){q.popperInstance&&(q.popperInstance.destroy(),q.popperInstance=null)}function je(){return b($.querySelectorAll("[data-tippy-root]"))}function ke(e){q.clearDelayTimeouts(),e&&ae("onTrigger",[q,e]),le();var t=ie(!0),r=G(),i=r[0],o=r[1];C.isTouch&&"hold"===i&&o&&(t=o),t?n=setTimeout((function(){q.show()}),t):q.show()}function De(e){if(q.clearDelayTimeouts(),ae("onUntrigger",[q,e]),q.state.isVisible){if(!(q.props.trigger.indexOf("mouseenter")>=0&&q.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&A)){var t=ie(!1);t?i=setTimeout((function(){q.state.isVisible&&q.hide()}),t):o=requestAnimationFrame((function(){q.hide()}))}}else me()}}function Y(e,t){void 0===t&&(t={});var n=V.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",P,u),window.addEventListener("blur",M);var r=Object.assign({},t,{plugins:n}),i=A(e).reduce((function(e,t){var n=t&&X(t,r);return n&&e.push(n),e}),[]);return x(e)?i[0]:i}Y.defaultProps=V,Y.setDefaultProps=function(e){Object.keys(e).forEach((function(t){V[t]=e[t]}))},Y.currentInput=C;Object.assign({},i.Z,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});Y.setDefaultProps({render:$});var J=Y,G=n(72791),Q=n(54164);function ee(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var te="undefined"!==typeof window&&"undefined"!==typeof document;function ne(e,t){e&&("function"===typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function re(){return te&&document.createElement("div")}function ie(e,t){if(e===t)return!0;if("object"===typeof e&&null!=e&&"object"===typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!ie(e[n],t[n]))return!1}return!0}return!1}function oe(e){var t=[];return e.forEach((function(e){t.find((function(t){return ie(e,t)}))||t.push(e)})),t}function ae(e,t){var n,r;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:oe([].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]))})})}var se=te?G.useLayoutEffect:G.useEffect;function ce(e){var t=(0,G.useRef)();return t.current||(t.current="function"===typeof e?e():e),t.current}function ue(e,t,n){n.split(/\s+/).forEach((function(n){n&&e.classList[t](n)}))}var fe={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){e.props.className&&!n()||ue(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&ue(t,"remove",e.props.className)},onAfterUpdate:r}}};function pe(e){return function(t){var n=t.children,r=t.content,i=t.visible,o=t.singleton,a=t.render,s=t.reference,c=t.disabled,u=void 0!==c&&c,f=t.ignoreAttributes,p=void 0===f||f,d=(t.__source,t.__self,ee(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),l=void 0!==i,m=void 0!==o,v=(0,G.useState)(!1),h=v[0],g=v[1],b=(0,G.useState)({}),y=b[0],w=b[1],x=(0,G.useState)(),O=x[0],E=x[1],A=ce((function(){return{container:re(),renders:1}})),T=Object.assign({ignoreAttributes:p},d,{content:A.container});l&&(T.trigger="manual",T.hideOnClick=!1),m&&(u=!0);var j=T,k=T.plugins||[];a&&(j=Object.assign({},T,{plugins:m&&null!=o.data?[].concat(k,[{fn:function(){return{onTrigger:function(e,t){var n=o.data.children.find((function(e){return e.instance.reference===t.currentTarget}));e.state.$$activeSingletonInstance=n.instance,E(n.content)}}}}]):k,render:function(){return{popper:A.container}}}));var D=[s].concat(n?[n.type]:[]);return se((function(){var t=s;s&&s.hasOwnProperty("current")&&(t=s.current);var n=e(t||A.ref||re(),Object.assign({},j,{plugins:[fe].concat(T.plugins||[])}));return A.instance=n,u&&n.disable(),i&&n.show(),m&&o.hook({instance:n,content:r,props:j,setSingletonContent:E}),g(!0),function(){n.destroy(),null==o||o.cleanup(n)}}),D),se((function(){var e;if(1!==A.renders){var t=A.instance;t.setProps(ae(t.props,j)),null==(e=t.popperInstance)||e.forceUpdate(),u?t.disable():t.enable(),l&&(i?t.show():t.hide()),m&&o.hook({instance:t,content:r,props:j,setSingletonContent:E})}else A.renders++})),se((function(){var e;if(a){var t=A.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;y.placement===n.placement&&y.referenceHidden===(null==r?void 0:r.isReferenceHidden)&&y.escaped===(null==r?void 0:r.hasPopperEscaped)||w({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}}),[y.placement,y.referenceHidden,y.escaped].concat(D)),G.createElement(G.Fragment,null,n?(0,G.cloneElement)(n,{ref:function(e){A.ref=e,ne(n.ref,e)}}):null,h&&(0,Q.createPortal)(a?a(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(y),O,A.instance):r,A.container))}}var de=function(e,t){return(0,G.forwardRef)((function(n,r){var i=n.children,o=ee(n,["children"]);return G.createElement(e,Object.assign({},t,o),i?(0,G.cloneElement)(i,{ref:function(e){ne(r,e),ne(i.ref,e)}}):null)}))},le=de(pe(J))}}]);
//# sourceMappingURL=652.d6afb052.chunk.js.map