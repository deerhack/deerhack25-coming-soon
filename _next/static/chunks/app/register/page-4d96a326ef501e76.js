(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{3158:function(e,t,a){Promise.resolve().then(a.bind(a,4218))},4218:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(3827),l=a(1767),c=a.n(l),r=a(5934),s=a.n(r),i=a(1282),o=a.n(i),d=a(4090);function u(){let[e,t]=(0,d.useState)(""),[a,l]=(0,d.useState)("bg-secondary"),[r,i]=(0,d.useState)("Submit"),[u,m]=(0,d.useState)(!1);(0,d.useEffect)(()=>{let e=document.createElement("script");return e.async=!0,e.defer=!0,document.body.appendChild(e),()=>{document.body.removeChild(e)}},[]);let f=async a=>{a.preventDefault();let n={email:e};console.log(n);try{let e=await fetch("/deerhack25-coming-soon/api/email",{method:"POST",body:JSON.stringify(n),headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"authorization, x-client-info, apikey, content-type","content-type":"application/json"}});200==e.status||409==e.status?(l("bg-green text-white"),i("Email Submitted")):(i("Failed!"),l("bg-red text-white")),t(""),m(!0)}catch(e){i("Failed!"),l("bg-red text-white"),t(""),m(!0)}};return(0,n.jsx)("div",{children:(0,n.jsx)("form",{onSubmit:f,children:(0,n.jsx)("div",{className:"".concat(o().background_container," h-screen flex justify-center items-center"),children:(0,n.jsxs)("div",{className:"".concat(o().muted_color," rounded-[0.65rem] w-[80vw] md:w-[50vw] max-w-[630px] h-fit lg:h-[22rem] flex flex-col gap-4 items-center  border-secondary border-2 backdrop-blur-sm px-9 py-9 mx-auto "),children:[(0,n.jsx)("p",{className:"".concat(c().className," text-primary-gradient-color w-fit text-3xl md:text-5xl text-center"),children:"Registration Starts Soon!"}),(0,n.jsx)("p",{className:"text-white text-base md:text-2xl text-center font-light ".concat(s().className),children:"Pre-Register Now to Get Notified When Registration Starts."}),(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center  gap-8 w-full",children:[(0,n.jsx)("div",{className:"w-full h-[3rem] primary-gradient-background p-[3px] flex justify-center items-center rounded ",children:(0,n.jsx)("input",{type:"email",placeholder:"example@mail.com",className:"w-full h-full rounded bg-violet pl-4 py-2 ".concat(s().className," text-white"),onChange:e=>t(e.target.value),value:e})}),(0,n.jsx)("button",{type:"submit",className:"w-full h-[2.9rem] ".concat(a," p-[3px] flex justify-center items-center rounded font-bold mx-2 py-5"),disabled:u,children:r})]})]})})})})}},1282:function(e){e.exports={background_container:"styles_background_container__VZIQL",muted_color:"styles_muted_color__jf3tB"}},1767:function(e){e.exports={style:{fontFamily:"'__cabinetExtraBold_2203ee', '__cabinetExtraBold_Fallback_2203ee', system-ui, arial"},className:"__className_2203ee",variable:"__variable_2203ee"}},5934:function(e){e.exports={style:{fontFamily:"'__cabinetRegular_aaaa1f', '__cabinetRegular_Fallback_aaaa1f', system-ui, arial"},className:"__className_aaaa1f",variable:"__variable_aaaa1f"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3158)}),_N_E=e.O()}]);