"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[413],{12721:function(n,e,t){t(72791);var r=t(84341),a=t(80184);e.Z=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"row ",children:[(0,a.jsx)("div",{className:"col-6 d-flex ",children:(0,a.jsx)(r.ZP,{width:200,height:25})}),(0,a.jsx)("div",{className:"col-6 d-flex justify-content-end",children:(0,a.jsx)(r.ZP,{width:80,height:30})})]}),(0,a.jsxs)("div",{className:"mt-2",children:[(0,a.jsx)(r.ZP,{height:40}),(0,a.jsx)(r.ZP,{count:10,height:25})]}),(0,a.jsxs)("div",{className:"row d-flex mt-2",children:[(0,a.jsx)("div",{className:"col-6",children:(0,a.jsx)(r.ZP,{width:220,height:20})}),(0,a.jsx)("div",{className:"col-6 d-flex justify-content-end",children:(0,a.jsx)(r.ZP,{width:200,height:30})})]})]})}},89413:function(n,e,t){t.r(e);var r=t(23430),a=t(72791),u=t(16030),c=t(12721),s=t(70432),i=t(50645),o=t(80184),p=(0,a.lazy)((function(){return Promise.all([t.e(652),t.e(126),t.e(740)]).then(t.bind(t,27740))}));e.default=function(){var n=(0,u.v9)((function(n){return n.userGroup.loading})),e=(0,u.v9)((function(n){return n.userGroup.count})),t=((0,u.v9)((function(n){return n.userGroup.edit})),(0,u.v9)((function(n){return n.search.search}))),f=(0,u.I0)(),d=(0,a.useState)(1),l=(0,r.Z)(d,2),v=l[0],h=l[1],m=(0,a.useState)(5),x=(0,r.Z)(m,2),g=x[0],y=x[1],P=(0,a.useState)(0),Z=(0,r.Z)(P,2),w=Z[0],j=Z[1],S=(0,a.useState)(10),k=(0,r.Z)(S,2),_=k[0],b=k[1];return(0,a.useEffect)((function(){0===_?f(""===t?(0,s.xc)(e):(0,s.o1)(t,e)):""===t?(_===i.P||h(1),f((0,s.xc)(_))):(h(1),y(5),j(0),f((0,s.o1)(t,_)))}),[f,_,t]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"card ",children:[(0,o.jsx)("div",{className:"header-content",children:(0,o.jsx)("h4",{className:"mb-sm-0 fw-normal",children:"User Group"})}),(0,o.jsx)("div",{className:"card-body",children:n?(0,o.jsx)(c.Z,{}):(0,o.jsx)(p,{currentPage:v,setCurrentPage:h,postsPerPage:_,setPostsPerPage:b,count:e,maxPageNumberLimit:g,setMaxPageNumberLimit:y,minPageNumberLimit:w,setMinPageNumberLimit:j,search:t})})]})})}},70432:function(n,e,t){t.d(e,{wZ:function(){return b},Hj:function(){return U},hj:function(){return k},R8:function(){return _},TI:function(){return S},mx:function(){return G},xc:function(){return j},o1:function(){return E},GX:function(){return N}});var r=t(33032),a=t(84322),u=t.n(a),c=t(89731),s=function(n){return c.Z.get("api/v1/group-app/group?offset=0&limit=".concat(n,"&ordering=-id"))},i=function(n){return c.Z.get(n)},o=function(n){return c.Z.get(n)},p=function(n,e){return c.Z.get("api/v1/group-app/group?offset=".concat((n-1)*e,"&limit=").concat(e,"&ordering=-id"))},f=function(n){return c.Z.post("api/v1/group-app/group",n)},d=function(n,e){return c.Z.patch("api/v1/group-app/group/".concat(n),e)},l=function(n,e){return c.Z.get("api/v1/group-app/group?offset=0&limit=".concat(e,"&search=").concat(n))},v=function(n){return c.Z.get("api/v1/group-app/permission?category=".concat(n))},h=t(25406),m=function(){return{type:h.d.LOADING_USER_GROUP}},x=function(n){return{type:h.d.GET_USER_GROUP_SUCCESS,payload:n}},g=function(n){return{type:h.d.GET_USER_GROUP_FAIL,payload:n}},y=function(n){return{type:h.d.UPDATE_USER_GROUP_FAIL,payload:n}},P=function(n){return{type:h.d.GET_USER_PERMISSION_SUCCESS,payload:n}},Z=function(n){return{type:h.d.GET_USER_PERMISSION_FAIL,payload:n}},w=t(29801),j=function(n){return function(){var e=(0,r.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m()),e.next=4,s(n);case 4:r=e.sent,a=r.data,t(x(a)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t(g(e.t0));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},S=function(n){return function(){var e=(0,r.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m()),e.next=4,i(n);case 4:r=e.sent,a=r.data,t(x(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(g(e.t0)),(0,w.Mn)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},k=function(n){return function(){var e=(0,r.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m()),e.next=4,o(n);case 4:r=e.sent,a=r.data,t(x(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t(g(e.t0)),(0,w.Mn)(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}()},_=function(n){var e=n.number,t=n.postsPerPage;return function(){var n=(0,r.Z)(u().mark((function n(r){var a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(m()),n.next=4,p(e,t);case 4:a=n.sent,c=a.data,r(x(c)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),r(g(n.t0)),(0,w.Mn)(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},b=function(n,e){var t=n.name,a=n.is_active,c=n.permissions;return function(){var n=(0,r.Z)(u().mark((function n(r){var s,i;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s=JSON.stringify({name:t,is_active:a,permissions:c}),r(m()),n.next=5,f(s);case 5:i=n.sent,i.data,(0,w.My)("User Group Added Successfully"),e.push("/user-group"),r(_({number:1,postsPerPage:10})),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),r((u=n.t0,{type:h.d.CREATE_USER_GROUP_FAIL,payload:u})),(0,w.Mn)("Failed to create User Group.");case 16:case"end":return n.stop()}var u}),n,null,[[0,12]])})));return function(e){return n.apply(this,arguments)}}()},N=function(n,e,t){return function(){var a=(0,r.Z)(u().mark((function r(a){var c,s,i,o,p,f;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c=t.name,s=t.permissions,i=t.is_active,o=t.remarks,r.prev=1,p=JSON.stringify({name:c,permissions:s,is_active:i,remarks:o}),a(m()),r.next=6,d(n,p);case 6:f=r.sent,f.data,(0,w.My)("User Group Updated Successfully "),a(_({number:1,postsPerPage:10})),e.push("/user-group"),r.next=17;break;case 13:r.prev=13,r.t0=r.catch(1),a(y(r.t0)),(0,w.Mn)("Failed to Update User Group");case 17:case"end":return r.stop()}}),r,null,[[1,13]])})));return function(n){return a.apply(this,arguments)}}()},U=function(){return function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e(m()),n.next=4,c.Z.get("api/v1/group-app/permission");case 4:t=n.sent,0===(r=t.data).count&&(0,w.My)("No permissions available"),e(P(r)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),e(Z(n.t0));case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},E=function(n,e){return function(){var t=(0,r.Z)(u().mark((function t(r){var a,c;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(m()),t.next=4,l(n,e);case 4:a=t.sent,c=a.data,r(x(c)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),r(g(t.t0)),(0,w.Mn)(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(n){return t.apply(this,arguments)}}()},G=function(n){return function(){var e=(0,r.Z)(u().mark((function e(t){var r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(m()),e.next=4,v(n);case 4:r=e.sent,0===(a=r.data).count&&t((0,w.My)("No permissions available ")),t(P(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t(Z(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}()}},50645:function(n,e,t){t.d(e,{P:function(){return r}});var r=10}}]);
//# sourceMappingURL=413.14e62ace.chunk.js.map