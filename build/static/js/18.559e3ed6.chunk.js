(this.webpackJsonpemilus=this.webpackJsonpemilus||[]).push([[18],{479:function(e,s,t){"use strict";var a=t(486),r=t.n(a),c=t(19),i=t(487).a(),o=t(28),n=t(276);const l=r.a.create({baseURL:c.a,timeout:6e4}),d="/auth/login";l.interceptors.request.use((e=>{const s=localStorage.getItem(o.b);return s&&(e.headers.authorization=s),s||e.headers["public-request"]||(i.push(d),window.location.reload()),e}),(e=>{n.a.error({message:"Error"}),Promise.reject(e)})),l.interceptors.response.use((e=>e.data),(e=>{let s={message:""};return 400!==e.response.status&&403!==e.response.status||(s.message="Authentication Fail",s.description="Please login again",localStorage.removeItem(o.b),i.push(d),window.location.reload()),404===e.response.status&&(s.message="Not Found"),500===e.response.status&&(s.message="Internal Server Error"),508===e.response.status&&(s.message="Time Out"),n.a.error(s),Promise.reject(e)}));s.a=l},480:function(e,s,t){"use strict";var a=t(479);const r={login:function(e){return Object(a.a)({url:"/posts",method:"post",headers:{"public-request":"true"},data:e})},signUp:function(e){return Object(a.a)({url:"/auth/signup",method:"post",headers:{"public-request":"true"},data:e})}};s.a=r},495:function(e,s,t){"use strict";var a=t(0),r=t(40),c=t(468),i=t(602),o=t(598),n=t(600),l=t(450),d=t(126),m=t(59),u=t(45),j=t(490),h=t(480),g=t(5);const b={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},e=>{let{getFieldValue:s}=e;return{validator:(e,t)=>t&&s("password")!==t?Promise.reject("Passwords do not match!"):Promise.resolve()}}]},p={showAuthMessage:m.c,hideAuthMessage:m.b,showLoading:m.d,authenticated:m.a};s.a=Object(r.b)((e=>{let{auth:s}=e;const{loading:t,message:a,showMessage:r,token:c,redirect:i}=s;return{loading:t,message:a,showMessage:r,token:c,redirect:i}}),p)((e=>{const{showLoading:s,token:t,loading:r,redirect:p,message:x,showMessage:O,hideAuthMessage:w,authenticated:f,allowRedirect:y}=e,[v]=o.a.useForm();let k=Object(u.g)();return Object(a.useEffect)((()=>{null!==t&&y&&k.push(p),O&&setTimeout((()=>{w()}),3e3)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(g.jsx)(n.a,{type:"error",showIcon:!0,message:x})}),Object(g.jsxs)(o.a,{form:v,layout:"vertical",name:"register-form",onFinish:()=>{v.validateFields().then((e=>{s();h.a.signUp(e).then((e=>{f("fakeToken")})).then((e=>{Object(m.c)(e)}))})).catch((e=>{console.log("Validate Failed:",e)}))},children:[Object(g.jsx)(o.a.Item,{name:"email",label:"Email",rules:b.email,hasFeedback:!0,children:Object(g.jsx)(l.a,{prefix:Object(g.jsx)(c.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{name:"password",label:"Password",rules:b.password,hasFeedback:!0,children:Object(g.jsx)(l.a.Password,{prefix:Object(g.jsx)(i.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{name:"confirm",label:"ConfirmPassword",rules:b.confirm,hasFeedback:!0,children:Object(g.jsx)(l.a.Password,{prefix:Object(g.jsx)(i.a,{className:"text-primary"})})}),Object(g.jsx)(o.a.Item,{children:Object(g.jsx)(d.a,{type:"primary",htmlType:"submit",block:!0,loading:r,children:"Sign Up"})})]})]})}))},591:function(e,s,t){"use strict";t.r(s);var a=t(2),r=(t(0),t(495)),c=t(511),i=t(512),o=t(597),n=t(40),l=t(5);const d={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=e=>{const s=Object(n.c)((e=>e.theme.currentTheme));return Object(l.jsx)("div",{className:"h-100",style:d,children:Object(l.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(l.jsx)(c.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:20,sm:20,md:20,lg:7,children:Object(l.jsx)(o.a,{children:Object(l.jsxs)("div",{className:"my-2",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),Object(l.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(l.jsx)(c.a,{justify:"center",children:Object(l.jsx)(i.a,{xs:24,sm:24,md:20,lg:20,children:Object(l.jsx)(r.a,Object(a.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=18.559e3ed6.chunk.js.map