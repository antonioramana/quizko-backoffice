import{r as a,W as F,j as e,Y as V,a as p}from"./app--oISFhqW.js";import{A as R}from"./AuthenticatedLayout-DSVi8vY8.js";import{D as k}from"./Datagrid-C_u-I_yz.js";import{M as h}from"./Modal-CkYoBzAA.js";import{D as A}from"./DeletionConfirmation-Ci_NAwrw.js";import{P as D}from"./PrimaryButton-D_GEZHxU.js";import{F as P,a as K,b as Q}from"./TrashIcon-CxRs83FN.js";import"./SecondaryButton-CeOpsOwd.js";import"./ChevronRightIcon-mwYJnyBs.js";import"./MagnifyingGlassIcon-8S3t9k7g.js";import"./transition-D3AYu_rU.js";function se({auth:o,subjects:r,questions:L}){const[j,f]=a.useState(!1),[b,l]=a.useState(!1),[w,c]=a.useState(!1),[N,d]=a.useState(!1),[s,n]=a.useState(null),[i,g]=a.useState(""),[S,y]=a.useState(r),{data:_,setData:v,put:B,delete:C,processing:I,errors:T,reset:u,cancel:M,hasErrors:m,recentlySuccessful:x}=F({subject:"",questions:[]}),E=$({onEdit:t=>{n(t),v(t),c(!0)},onDelete:t=>{n(t),l(!0)},onShow:t=>{n(t),d(!0)}});a.useEffect(()=>{m&&u("subject"),x&&(u(),j&&f(!1),w&&c(!1))},[m,x]),a.useEffect(()=>{y(r.filter(t=>t.subject.toLowerCase().includes(i.toLowerCase())))},[i,r]);const q=t=>{t.preventDefault(),C(route("subjects.destroy",s)),n(null),l(!1)};return e.jsxs(R,{user:o.user,children:[e.jsx(V,{title:"Sujets"}),e.jsx("div",{className:"",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-4 flex justify-between items-center space-x-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("label",{className:"font-semibold",children:"Rechercher :"}),e.jsx("input",{type:"text",placeholder:"sujet...",value:i,onChange:t=>g(t.target.value),className:"p-2 border border-gray-300 rounded-md"})]}),e.jsx(p,{href:route("subjects.create"),className:"bg-purple-950 hover:bg-purple-800 text-white font-medium py-2 px-5 rounded-lg transition-all transform hover:scale-[1.02]",children:"Ajouter un sujet"})]}),e.jsx(k,{columns:E,rows:S,canCreate:!1})]})}),e.jsx(h,{show:b,title:"Supprimer un sujet",onClose:()=>l(!1),children:e.jsx(A,{name:s==null?void 0:s.subject,onCancel:()=>{M(),l(!1)},handleDeleteSubmit:q})}),e.jsx(h,{show:N,title:"Questions du sujet",onClose:()=>d(!1),children:e.jsxs("div",{className:"p-3 m-4 text-black text-sm",children:[e.jsx("div",{className:"text-purple-900 text-xl rounded-lg p-2",children:e.jsxs("h1",{className:"font-bold text-center",children:["Sujet : ",s==null?void 0:s.subject," ",e.jsxs("span",{className:"text-red-400",children:["(",s==null?void 0:s.total_points," pts)"]})]})}),e.jsxs("h2",{className:"text-md font-semibold mt-2",children:["Nombre de questions :"," ",e.jsx("span",{className:"text-gray-700 border-b border-gray-500 px-1",children:s==null?void 0:s.questions.length})]}),e.jsx("div",{className:"space-y-2 overflow-y-auto max-h-64 mt-2 p-1",children:(s==null?void 0:s.questions.length)>0&&s.questions.map(t=>e.jsxs("div",{className:"border p-2 rounded-lg shadow-sm bg-gray-100",children:[e.jsx("p",{className:"font-medium text-gray-800",children:t.question}),e.jsxs("p",{className:"text-gray-600 text-xs",children:["Point : ",e.jsx("span",{className:"text-red-600",children:t.point})]})]},t.id))}),e.jsx("div",{className:"flex items-center border-t pt-3 mt-3 justify-center",children:e.jsx(D,{className:"w-full py-1 text-sm",onClick:()=>d(!1),children:"Fermer"})})]})})]})}const $=o=>a.useMemo(()=>[{accessorKey:"subject",cell:r=>e.jsx("span",{className:"bg-purple-950 p-2 rounded-md text-white",children:r.getValue()}),header:()=>"Sujet"},{accessorKey:"questions",cell:r=>`${r.getValue().length}`,header:()=>"Nombre des questions"},{accessorKey:"total_points",cell:r=>e.jsx("span",{className:"bg-brown-500 p-1 rounded-md text-white",children:r.getValue()}),header:()=>"Total Points"},{accessorFn:r=>r,id:"id",cell:r=>e.jsxs("div",{className:"flex space-x-1",children:[e.jsx("button",{className:"p-1 border border-transparent rounded-md",onClick:()=>{o.onShow(r.getValue())},children:e.jsx(P,{className:"w-6 h-4 text-gray-500 border-3 border-white"})}),e.jsx(p,{className:"p-1 border border-transparent rounded-md",href:route("subjects.edit",r.getValue().id),children:e.jsx(K,{className:"w-6 h-4 text-purple-900 border-3 border-white"})}),e.jsx("button",{className:"p-1 border border-transparent rounded-md",onClick:()=>{o.onDelete(r.getValue())},children:e.jsx(Q,{className:"w-6 h-4 text-red-600 border-3 border-white"})})]}),header:()=>"Action"}],[o]);export{se as default};
