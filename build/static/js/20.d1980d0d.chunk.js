(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[20],{482:function(e,t,a){"use strict";var c=a(2),s=(a(0),a(600)),r=a(5);const i=e=>Object(r.jsx)(s.a,Object(c.a)(Object(c.a)({},e),{},{className:"ant-avatar-".concat(e.type),children:e.text}));t.a=e=>{const{name:t,suffix:a,subTitle:c,id:s,type:n,src:o,icon:l,size:d,shape:j,gap:m,text:b,onNameClick:h}=e;return Object(r.jsxs)("div",{className:"avatar-status d-flex align-items-center",children:[i({icon:l,src:o,type:n,size:d,shape:j,gap:m,text:b}),Object(r.jsxs)("div",{className:"ml-2",children:[Object(r.jsxs)("div",{children:[h?Object(r.jsx)("div",{onClick:()=>h({name:t,subTitle:c,src:o,id:s}),className:"avatar-status-name clickable",children:t}):Object(r.jsx)("div",{className:"avatar-status-name",children:t}),Object(r.jsx)("span",{children:a})]}),Object(r.jsx)("div",{className:"text-muted avatar-status-subtitle",children:c})]})]})}},550:function(e){e.exports=JSON.parse('[{"id":12,"name":"Blue Jacket","image":"/img/thumbs/thumb-7.jpg","category":"Cloths","price":77,"stock":46},{"id":13,"name":"White Backpack","image":"/img/thumbs/thumb-8.jpg","category":"Bags","price":139,"stock":28},{"id":14,"name":"Black Sneaker","image":"/img/thumbs/thumb-9.jpg","category":"Shoes","price":99,"stock":52},{"id":15,"name":"Gray Hoodies","image":"/img/thumbs/thumb-10.jpg","category":"Cloths","price":68,"stock":92},{"id":16,"name":"Blue Backpack","image":"/img/thumbs/thumb-11.jpg","category":"Bags","price":70,"stock":0},{"id":17,"name":"White Sneaker","image":"/img/thumbs/thumb-12.jpg","category":"Shoes","price":29,"stock":18},{"id":18,"name":"Strip Analog Watch","image":"/img/thumbs/thumb-13.jpg","category":"Watches","price":389,"stock":7},{"id":19,"name":"Red Beat Headphone","image":"/img/thumbs/thumb-14.jpg","category":"Devices","price":86,"stock":0},{"id":20,"name":"Apple Macbook Pro","image":"/img/thumbs/thumb-15.jpg","category":"Devices","price":1599,"stock":27},{"id":21,"name":"Bronze Analog Watch","image":"/img/thumbs/thumb-16.jpg","category":"Watches","price":729,"stock":6},{"id":22,"name":"Apple Watch","image":"/img/thumbs/thumb-17.jpg","category":"Devices","price":388,"stock":51},{"id":23,"name":"Antique Analog Watch","image":"/img/thumbs/thumb-18.jpg","category":"Watches","price":599,"stock":30}]')},579:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a(45),r=a(2),i=a(168),n=a(581),o=a(598),l=a(451),d=a(125),j=a(597),m=a(550),b=a(149),h=a(151),u={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"},p=a(13),g=function(e,t){return c.createElement(p.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:u}))};var x=c.forwardRef(g),O=a(482),v=a(172),k=a(515),y=a(57),S=a(5);const{Option:f}=i.a,C=["Cloths","Bags","Shoes","Watches","Devices"];var N=()=>{let e=Object(s.g)();const[t,a]=Object(c.useState)(m),[u,p]=Object(c.useState)([]),[g,N]=Object(c.useState)([]),w=[{title:"ID",dataIndex:"id"},{title:"Product",dataIndex:"name",render:(e,t)=>Object(S.jsx)("div",{className:"d-flex",children:Object(S.jsx)(O.a,{size:60,type:"square",src:t.image,name:t.name})}),sorter:(e,t)=>y.a.antdTableSorter(e,t,"name")},{title:"Category",dataIndex:"category",sorter:(e,t)=>y.a.antdTableSorter(e,t,"category")},{title:"Price",dataIndex:"price",render:e=>Object(S.jsx)("div",{children:Object(S.jsx)(k.a,{displayType:"text",value:(Math.round(100*e)/100).toFixed(2),prefix:"$",thousandSeparator:!0})}),sorter:(e,t)=>y.a.antdTableSorter(e,t,"price")},{title:"Stock",dataIndex:"stock",sorter:(e,t)=>y.a.antdTableSorter(e,t,"stock")},{title:"Status",dataIndex:"stock",render:e=>{return Object(S.jsx)(v.a,{alignItems:"center",children:(t=e,t>=10?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(n.a,{status:"success"}),Object(S.jsx)("span",{children:"In Stock"})]}):t<10&&t>0?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(n.a,{status:"warning"}),Object(S.jsx)("span",{children:"Limited Stock"})]}):0===t?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(n.a,{status:"error"}),Object(S.jsx)("span",{children:"Out of Stock"})]}):null)});var t},sorter:(e,t)=>y.a.antdTableSorter(e,t,"stock")},{title:"",dataIndex:"actions",render:e=>Object(S.jsx)("div",{className:"text-right",children:Object(S.jsx)("div",{className:"ellipsis-dropdown",children:Object(S.jsx)(b.a,{})})})}],A={onChange:(e,t)=>{p(t),N(e)}};return Object(S.jsxs)(o.a,{children:[Object(S.jsxs)(v.a,{alignItems:"center",justifyContent:"between",mobileFlex:!1,children:[Object(S.jsxs)(v.a,{className:"mb-1",mobileFlex:!1,children:[Object(S.jsx)("div",{className:"mr-md-3 mb-3",children:Object(S.jsx)(l.a,{placeholder:"Search",prefix:Object(S.jsx)(h.a,{}),onChange:e=>(e=>{const c=e.currentTarget.value,s=e.currentTarget.value?t:m,r=y.a.wildCardSearch(s,c);a(r),N([])})(e)})}),Object(S.jsx)("div",{className:"mb-3",children:Object(S.jsxs)(i.a,{defaultValue:"All",className:"w-100",style:{minWidth:180},onChange:e=>{if("All"!==e){const t="category",c=y.a.filterArray(m,t,e);a(c)}else a(m)},placeholder:"Category",children:[Object(S.jsx)(f,{value:"All",children:"All"}),C.map((e=>Object(S.jsx)(f,{value:e,children:e},e)))]})})]}),Object(S.jsx)("div",{children:Object(S.jsx)(d.a,{onClick:()=>{e.push("/app/apps/ecommerce/add-product")},type:"primary",icon:Object(S.jsx)(x,{}),block:!0,children:"Add product"})})]}),Object(S.jsx)("div",{className:"table-responsive",children:Object(S.jsx)(j.a,{columns:w,dataSource:t,rowKey:"id",rowSelection:Object(r.a)({selectedRowKeys:g,type:"checkbox",preserveSelectedRowKeys:!1},A)})})]})};var w=()=>Object(S.jsx)("div",{children:"Categories"});var A=()=>Object(S.jsx)("div",{children:"Collections"});var B=()=>Object(S.jsx)("div",{children:"Combo"});t.default=e=>{let{match:t}=e;return Object(S.jsxs)(s.d,{children:[Object(S.jsx)(s.a,{exact:!0,from:"".concat(t.url),to:"".concat(t.url,"/products")}),Object(S.jsx)(s.b,{path:"".concat(t.url,"/products"),component:N}),Object(S.jsx)(s.b,{path:"".concat(t.url,"/categories"),component:w}),Object(S.jsx)(s.b,{path:"".concat(t.url,"/Collections"),component:A}),Object(S.jsx)(s.b,{path:"".concat(t.url,"/combo"),component:B})]})}}}]);
//# sourceMappingURL=20.d1980d0d.chunk.js.map