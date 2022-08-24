"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[230],{81829:function(e,n,t){t(72791);var r=t(56355),a=t(98158),i=t(80184);n.Z=function(e){var n=e.search,t=e.onClick,s=e.addPermission;return(0,i.jsxs)("div",{className:"text-center justify-content-center no-data",children:[(0,i.jsx)("h4",{className:"fw-normal mb-3",children:"No data to Display"}),!n&&s&&(0,i.jsxs)("h6",{children:["Please"," ",(0,i.jsx)(a.Z,{content:"Add",children:(0,i.jsxs)("button",{onClick:t,className:"btn btn-primary waves-effect waves-light btn-sm mx-2 p-1 nodata-btn",children:[(0,i.jsx)(r.wEH,{className:"nodata-icon"}),"\xa0Add"]})})," ","some..."]})]})}},90883:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(72791),a=t(80184),i=function(e){var n=e.offset,t=e.limit,i=e.count;return(0,a.jsx)(r.Fragment,{children:(0,a.jsxs)("p",{children:["Showing ",n," to"," ",t>i||0===t?i:t," of ",i," entries"]})})},s=r.memo(i),c=function(e){var n=e.postsPerPage,t=e.totalPosts,r=e.paginate,i=e.handleClick,s=e.currentPage,c=e.maxPageNumberLimit,o=e.minPageNumberLimit,l=[];if(n>0)for(var u=1;u<=Math.ceil(t/n);u++)l.push(u);l.length;return o>=1&&(0,a.jsx)("button",{className:"page-link",onClick:function(){return i("previous")},children:"\u2026"}),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("ul",{className:"pagination pagination-sm justify-content-end",children:[(0,a.jsx)("li",{className:"page-item ",children:(0,a.jsx)("button",{className:"page-link",onClick:function(){return i("previous")},disabled:s===l[0],children:"\xab"})}),l.map((function(e,n){return e<c+1&&e>o?(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)("button",{onClick:function(){return r(e)},className:"page-link ".concat(n+1===s?"active":null),children:e})},e):null})),(0,a.jsx)("li",{className:"page-item",children:(0,a.jsx)("button",{className:"page-link",onClick:function(){return i("next")},disabled:s===l[l.length-1],children:"\xbb"})})]})})},o=r.memo(c),l=function(e){var n=e.currentPage,t=e.postsPerPage,r=e.count,i=e.paginate,c=e.handleClick,l=e.setCurrentPage,u=e.minPageNumberLimit,d=e.maxPageNumberLimit;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)(s,{offset:1+(n-1)*t,limit:t*n,count:r})}),t<r&&(0,a.jsx)("div",{className:"col-6 text-right",children:(0,a.jsx)(o,{postsPerPage:t,totalPosts:r,paginate:i,handleClick:c,currentPage:n,setCurrentPage:l,minPageNumberLimit:u,maxPageNumberLimit:d})})]})})}},537:function(e,n,t){var r=t(72791),a=t(80184),i=function(e){var n=e.postsPerPage,t=e.setPostsPerPage;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("p",{className:"fw-normal p-0 m-0",children:["Show",(0,a.jsxs)("span",{className:"ml-1 mr-1",children:[" ",(0,a.jsxs)("select",{value:n,onChange:function(e){var n=Number(e.target.value);t(n)},children:[(0,a.jsx)("option",{value:"10",children:"10"}),(0,a.jsx)("option",{value:"20",children:"20"}),(0,a.jsx)("option",{value:"40",children:"40"}),(0,a.jsx)("option",{value:"99999999",children:"All"})]})]})," ","entries"]})})};n.Z=r.memo(i)},12721:function(e,n,t){t(72791);var r=t(84341),a=t(80184);n.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row ",children:[(0,a.jsx)("div",{className:"col-6 d-flex ",children:(0,a.jsx)(r.ZP,{width:200,height:25})}),(0,a.jsx)("div",{className:"col-6 d-flex justify-content-end",children:(0,a.jsx)(r.ZP,{width:80,height:30})})]}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)(r.ZP,{height:40}),(0,a.jsx)(r.ZP,{count:10,height:25})]}),(0,a.jsxs)("div",{className:"row d-flex mt-2",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)(r.ZP,{width:220,height:20})}),(0,a.jsx)("div",{className:"col-6 d-flex justify-content-end",children:(0,a.jsx)(r.ZP,{width:200,height:30})})]})]})}},16587:function(e,n,t){t(72791);var r=t(32328),a=t(80184);n.Z=function(){return console.log("in"),(0,a.jsx)("img",{src:r,alt:"spinner",height:"30px",className:"ml-4"})}},98158:function(e,n,t){t(72791);var r=t(36652),a=t(80184);n.Z=function(e){var n=e.content,t=e.children;return(0,a.jsx)(r.ZP,{content:n,children:t})}},46187:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var r=t(23430),a=t(72791),i=t(50645),s=t(18724),c=t(56355),o=t(16030),l=t(34227),u=t(90883),d=(t(16587),t(81829)),p=t(98158),m=t(79271),f=t(89472),h=t(35125),x=(t(57693),t(92979)),v=t(87102),b=t(80184),g=function(e){var n,t,r=e.show,a=e.setShow,i=e.info,s=e.setInfo,c=i.name,o=i.card_no,l=i.address,u=i.citizenship_no,d=i.district,p=i.mobile_no,m=i.owner_photo,g=i.qr,j=new h.default({orientation:"landscape",unit:"mm",format:[430,270]}),_="",P=(0,f.Z)(o);try{for(P.s();!(t=P.n()).done;){var N=t.value;"1"===N?_+="!":"2"===N?_+="@":"3"===N?_+="#":"4"===N?_+="$":"5"===N?_+="%":"6"===N?_+="^":"7"===N?_+="&":"8"===N?_+="*":"9"===N?_+="(":"0"===N&&(_+=")")}}catch(Z){P.e(Z)}finally{P.f()}j.addImage(x,0,0,430,270),j.setTextColor("#0E58A4"),j.setFont("Preeti","normal"),j.setFontSize(60),j.text(_,100,127),j.text("sf8{ g+",21,129),j.text("M",82,129),j.text("gfd",21,150),j.text("M",82,150),j.text("7]ufgf",21,172),j.text("M",82,172),j.text("gf=k|=g+",21,193),j.text("M",82,193),j.text("lhNnf",21,216),j.text("M",82,216),j.text("df]afO{n",21,237),j.text("M",82,237),j.text(c,100,150),j.text(l,100,172),j.text(u,100,193),j.text(null===d||void 0===d?void 0:d.name,100,216),j.text(p,100,237),j.addPage([430,270],"landscape"),j.addImage(v,0,0,430,270),j.addImage(g,172,82,120,120),j.addImage(m,318,91,90,100);var y=j.output("blob");n=URL.createObjectURL(y);var w=r?"modal display-block":"modal display-none";return(0,b.jsxs)("div",{className:w,tabIndex:"-1",children:[(0,b.jsx)("div",{className:"modal-dialog modal-md",children:(0,b.jsxs)("div",{className:"modal-content content",children:[(0,b.jsxs)("div",{className:"modal-header",children:[(0,b.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Print Preview"}),(0,b.jsx)("button",{type:"button",className:"btn-close","data-dismiss":"modal","aria-label":"Close",onClick:function(){a(!1),s("")},children:"\xd7"})]}),(0,b.jsx)("div",{className:"modal-body text-center",children:(0,b.jsx)("iframe",{title:"print",type:"application/pdf",frameBorder:"0",width:"415px",src:n,height:"580px"})})]})})," "]})},j=function(e){var n=e.currentPage,t=e.postsPerPage,i=e.setCurrentPage,f=e.count,h=e.maxPageNumberLimit,x=e.setMaxPageNumberLimit,v=e.minPageNumberLimit,j=e.setMinPageNumberLimit,_=e.search,P=(0,a.useState)(!1),N=(0,r.Z)(P,2),y=N[0],w=N[1],Z=(0,a.useState)(null),k=(0,r.Z)(Z,2),S=k[0],C=k[1],F=(0,m.k6)(),I=(0,o.v9)((function(e){return e.auth.group})),L=(0,o.v9)((function(e){return e.auth.is_superuser})),T=(0,o.v9)((function(e){return e.print.prints})),A=(0,o.v9)((function(e){return e.print.next})),M=(0,o.v9)((function(e){return e.print.previous})),E=(0,o.I0)(),R=(0,a.useState)(5),D=(0,r.Z)(R,1)[0],U=!("ADMIN"!==I&&"STAFF"!==I&&!L);return(0,b.jsxs)(b.Fragment,{children:[(null===T||void 0===T?void 0:T.length)>0?(0,b.jsxs)("div",{className:"mt-2",children:[(0,b.jsx)("div",{className:"table-scrollable",children:(0,b.jsxs)("table",{className:"table table-hover table-bordered text-center",children:[(0,b.jsx)("thead",{children:(0,b.jsxs)("tr",{children:[(0,b.jsx)("th",{scope:"col",style:{width:"8%"},children:"S.N"}),(0,b.jsx)("th",{scope:"col",children:"Card Number"}),(0,b.jsx)("th",{scope:"col",children:"First Name"}),(0,b.jsx)("th",{scope:"col",children:"Last Name"}),(0,b.jsx)("th",{scope:"col",children:"Action"})]})}),(0,b.jsx)("tbody",{children:(null===T||void 0===T?void 0:T.length)>0&&T.map((function(e,r){var a=e.id,i=e.card_no,s=e.first_name_nepali,o=e.last_name_nepali;e.name;return(0,b.jsxs)("tr",{children:[(0,b.jsxs)("td",{className:"fw-bold",style:{width:"8%"},children:[t*(n-1)+(r+1)," "]}),(0,b.jsx)("td",{children:i}),(0,b.jsx)("td",{children:""===s?"-":s}),(0,b.jsx)("td",{children:""===o?"-":o}),(0,b.jsxs)("td",{children:[(0,b.jsx)(p.Z,{content:"Edit",children:(0,b.jsx)("button",{onClick:function(){return function(e){E({type:l.F.PRINT_EDIT_SUCCESS,payload:e}),F.push("/create-print-debit")}(a)},className:"btn btn-sm btn-edit btn-primary mx-2",children:(0,b.jsx)(c.fmQ,{})})}),(0,b.jsx)(p.Z,{content:"Print",children:(0,b.jsx)("button",{onClick:function(){return function(e){C(e),w(!0)}(e)},className:"btn btn-sm  btn-success mx-2",children:(0,b.jsx)(c.rcQ,{})})})]})]},a)}))})]})}),f>0&&(0,b.jsx)(u.Z,{currentPage:n,postsPerPage:t,count:f,paginate:function(e){E((0,s.R8)({number:e,postsPerPage:t})),i(e)},handleClick:function(e){"previous"===e?(E((0,s.TI)(M)),i((function(e){return e-1})),(n-1)%D===0&&(x(h-D),j(v-D))):"next"===e&&(E((0,s.hj)(A)),i((function(e){return e+1})),n+1>h&&(x(h+D),j(v+D)))},setCurrentPage:i,minPageNumberLimit:v,maxPageNumberLimit:h})]}):(0,b.jsx)(d.Z,{search:_,onClick:function(){return F.push("/create-print-debit")},addPermission:U}),y&&(0,b.jsx)(g,{show:y,setShow:w,info:S,setInfo:C})]})},_=t(12721),P=t(537),N=function(){var e=(0,m.k6)(),n=((0,o.v9)((function(e){return e.auth.permissions})),(0,o.v9)((function(e){return e.auth.is_superuser})),(0,o.v9)((function(e){return e.print.prints}))),t=(0,o.v9)((function(e){return e.print.loading})),l=(0,o.v9)((function(e){return e.print.loading_updated})),u=(0,o.v9)((function(e){return e.print.count})),d=(0,o.v9)((function(e){return e.search.search})),f=(0,o.I0)(),h=(0,a.useState)(1),x=(0,r.Z)(h,2),v=x[0],g=x[1],N=(0,a.useState)(5),y=(0,r.Z)(N,2),w=y[0],Z=y[1],k=(0,a.useState)(0),S=(0,r.Z)(k,2),C=S[0],F=S[1],I=(0,a.useState)(10),L=(0,r.Z)(I,2),T=L[0],A=L[1];return(0,a.useEffect)((function(){0===T?f(""===d?(0,s.j8)(u):(0,s.o1)(d,u)):""===d?(T===i.P||g(1),f((0,s.j8)(T))):(g(1),Z(5),F(0),f((0,s.o1)(d,T)))}),[f,T,d]),(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)("div",{className:"card",children:[(0,b.jsx)("div",{className:"header-content",children:(0,b.jsx)("h4",{className:"mb-sm-0 fw-normal",children:"Print"})}),(0,b.jsxs)("div",{className:"card-body",children:[(0,b.jsx)("div",{className:"row m-0 p-0",children:(null===n||void 0===n?void 0:n.length)>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"col-6",children:(0,b.jsx)(P.Z,{postsPerPage:T,setPostsPerPage:A})}),(0,b.jsx)("div",{className:"col-6 text-right",children:(0,b.jsx)(p.Z,{content:"Add",children:(0,b.jsxs)("button",{className:"btn btn-primary waves-effect waves-light btn-sm float-end",onClick:function(){return e.push("/create-print-debit")},children:[(0,b.jsx)(c.wEH,{className:"mb-1"}),"\xa0Add"]})})})]})}),t&&(0,b.jsx)(_.Z,{}),l&&(0,b.jsx)(_.Z,{}),!t&&!l&&(0,b.jsx)(j,{currentPage:v,setCurrentPage:g,postsPerPage:T,setPostsPerPage:A,count:u,maxPageNumberLimit:w,setMaxPageNumberLimit:Z,minPageNumberLimit:C,setMinPageNumberLimit:F,search:d})]})]})})}},18724:function(e,n,t){t.d(n,{PW:function(){return w},hj:function(){return N},R8:function(){return y},TI:function(){return P},j8:function(){return _},o1:function(){return k},Km:function(){return Z}});var r=t(33032),a=t(84322),i=t.n(a),s=t(89731),c=function(e){return s.Z.get("api/v1/core-app/print-debit?offset=0&limit=".concat(e,"&ordering=-id"))},o=function(e){return s.Z.get(e)},l=function(e){return s.Z.get(e)},u=function(e,n){return s.Z.get("api/v1/core-app/print-debit?offset=".concat((e-1)*n,"&limit=").concat(n,"&ordering=-id"))},d=function(e){return s.Z.post("api/v1/core-app/print-debit",e,{"Content-Type":"multipart/form-data"})},p=function(e,n){return s.Z.patch("api/v1/core-app/print-debit/".concat(e),n,{"Content-Type":"multipart/form-data"})},m=function(e,n){return s.Z.get("api/v1/core-app/print-debit?offset=0&limit=".concat(n,"&search=").concat(e))},f=t(34227),h=function(){return{type:f.F.LOADING_PRINT}},x=function(e){return{type:f.F.GET_PRINT_SUCCESS,payload:e}},v=function(e){return{type:f.F.GET_PRINT_FAIL,payload:e}},b=function(e){return{type:f.F.CREATE_PRINT_SUCCESS,payload:e}},g=function(e){return{type:f.F.PRINT_UPDATE_SUCCESS,payload:e}},j=t(29801),_=function(e){return function(){var n=(0,r.Z)(i().mark((function n(t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,c(e);case 4:r=n.sent,a=r.data,t(x(a)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t(v(n.t0)),(0,j.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},P=function(e){return function(){var n=(0,r.Z)(i().mark((function n(t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,o(e);case 4:r=n.sent,a=r.data,t(x(a)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t(v(n.t0)),(0,j.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},N=function(e){return function(){var n=(0,r.Z)(i().mark((function n(t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t(h()),n.next=4,l(e);case 4:r=n.sent,a=r.data,t(x(a)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),t(v(n.t0)),(0,j.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},y=function(e){var n=e.number,t=e.postsPerPage;return function(){var e=(0,r.Z)(i().mark((function e(r){var a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(h()),e.next=4,u(n,t);case 4:a=e.sent,s=a.data,r(x(s)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r(v(e.t0)),(0,j.Mn)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},w=function(e,n){var t=e.first_name,a=e.first_name_nepali,s=e.middle_name,c=e.middle_name_nepali,o=e.last_name,l=e.last_name_nepali,u=e.address,p=e.address_nepali,m=e.citizenship_no,x=e.citizenship_no_nepali,v=e.mobile_no,g=e.mobile_no_nepali,_=e.district,P=e.branch,N=e.qr,y=e.owner_photo;return function(){var e=(0,r.Z)(i().mark((function e(r){var w,Z,k;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(w=new FormData).append("first_name",t),w.append("first_name_nepali",a),w.append("middle_name",s),w.append("middle_name_nepali",c),w.append("last_name",o),w.append("last_name_nepali",l),w.append("address",u),w.append("address_nepali",p),w.append("mobile_no",v),w.append("mobile_no_nepali",g),w.append("citizenship_no",m),w.append("citizenship_no_nepali",x),w.append("district",JSON.stringify(_)),w.append("branch",JSON.stringify(P)),N&&w.append("qr",N),y&&w.append("owner_photo",y),r(h()),e.next=21,d(w);case 21:Z=e.sent,k=Z.data,r(b(k)),(0,j.My)("Record Added Successfully."),n.push("/print"),e.next=32;break;case 28:e.prev=28,e.t0=e.catch(0),r((i=e.t0,{type:f.F.CREATE_PRINT_FAIL,payload:i})),(0,j.Mn)("Failed to create record.");case 32:case"end":return e.stop()}var i}),e,null,[[0,28]])})));return function(n){return e.apply(this,arguments)}}()},Z=function(e,n,t){return function(){var a=(0,r.Z)(i().mark((function r(a){var s,c,o,l,u,d,m,h,x,v,b,_,P,N,y,w,Z,k,S,C;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a({type:f.F.LOADING_UPDATED}),s=t.first_name,c=t.first_name_nepali,o=t.middle_name,l=t.middle_name_nepali,u=t.last_name,d=t.last_name_nepali,m=t.address,h=t.address_nepali,x=t.citizenship_no,v=t.citizenship_no_nepali,b=t.mobile_no,_=t.mobile_no_nepali,P=t.district,N=t.branch,y=t.qr,w=t.owner_photo,Z=t.remarks,(k=new FormData).append("first_name",s),k.append("first_name_nepali",c),k.append("middle_name",o),k.append("middle_name_nepali",l),k.append("last_name",u),k.append("last_name_nepali",d),k.append("address",m),k.append("address_nepali",h),k.append("mobile_no",b),k.append("mobile_no_nepali",_),k.append("citizenship_no",x),k.append("citizenship_no_nepali",v),k.append("district",JSON.stringify(P)),k.append("branch",JSON.stringify(N)),y&&k.append("qr",y),w&&k.append("owner_photo",w),k.append("remarks",Z),r.next=23,p(e,k);case 23:S=r.sent,C=S.data,a(g(C)),(0,j.My)("Record Updated Successfully "),n.push("/print"),r.next=34;break;case 30:r.prev=30,r.t0=r.catch(0),a((i=r.t0,{type:f.F.PRINT_UPDATE_FAIL,payload:i})),(0,j.Mn)("Failed to Update Record");case 34:case"end":return r.stop()}var i}),r,null,[[0,30]])})));return function(e){return a.apply(this,arguments)}}()},k=function(e,n){return function(){var t=(0,r.Z)(i().mark((function t(r){var a,s;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(h()),t.next=4,m(e,n);case 4:a=t.sent,s=a.data,r(x(s)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),r(v(t.t0)),(0,j.Mn)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}},50645:function(e,n,t){t.d(n,{P:function(){return r}});var r=10},87102:function(e,n,t){e.exports=t.p+"static/media/Back.685851c8bc2a959620a1.png"},92979:function(e,n,t){e.exports=t.p+"static/media/Front.12eaddf69d366022a0e6.png"},32328:function(e,n,t){e.exports=t.p+"static/media/spinner.9012f56ae4662e1be3c6.gif"},71002:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.d(n,{Z:function(){return r}})},89472:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(72327);function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,c=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return c=e.done,e},e:function(e){o=!0,s=e},f:function(){try{c||null==t.return||t.return()}finally{if(o)throw s}}}}}}]);
//# sourceMappingURL=230.e15cc45a.chunk.js.map