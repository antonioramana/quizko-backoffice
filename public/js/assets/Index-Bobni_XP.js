import{r as c,j as t,Y as i,a as u}from"./app--oISFhqW.js";import{A as m}from"./AuthenticatedLayout-DSVi8vY8.js";import{D as x}from"./Datagrid-C_u-I_yz.js";import{g as p}from"./generateUniqueColor-Cj-zfR5N.js";import{f as o}from"./formatDate-Bhi5lhCb.js";import"./Modal-CkYoBzAA.js";import"./transition-D3AYu_rU.js";import"./SecondaryButton-CeOpsOwd.js";import"./ChevronRightIcon-mwYJnyBs.js";import"./PrimaryButton-D_GEZHxU.js";import"./MagnifyingGlassIcon-8S3t9k7g.js";function D({auth:r,interviews:e}){const[s,l]=c.useState(""),a=h(s),n=d=>{l(d.target.value)};return t.jsxs(m,{user:r.user,children:[t.jsx(i,{title:"Résultats"}),t.jsx("div",{className:"",children:t.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[t.jsx("div",{className:"mb-4 flex justify-end",children:t.jsx("input",{type:"text",value:s,onChange:n,placeholder:"Rechercher...",className:"px-3 py-2   border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"})}),t.jsx(x,{columns:a,rows:g(e,s)})]})})]})}const h=r=>c.useMemo(()=>[{accessorKey:"name",cell:e=>t.jsx("div",{className:"bg-gray p-1 rounded-md text-black",children:e.getValue()}),header:()=>"Nom du test"},{accessorKey:"start_date",cell:e=>`${o(e.getValue())}`,header:()=>"Début"},{accessorKey:"end_date",cell:e=>`${o(e.getValue())}`,header:()=>"Fin"},{accessorKey:"time",cell:e=>t.jsx("span",{className:"bg-red-800 p-1 rounded-md text-white",children:e.getValue()}),header:()=>"Durée"},{accessorKey:"post.name",cell:e=>{const s=p(e.getValue());return t.jsx("div",{className:"text-white text-center  rounded-md text-xs p-1",style:{backgroundColor:s},children:e.getValue()})},header:()=>"Classe"},{accessorKey:"subject.subject",cell:e=>`${e.getValue()}`,header:()=>"Sujet"},{accessorKey:"is_expired",cell:e=>t.jsx("span",{className:`px-2 py-1 inline-flex text-xs font-semibold rounded-md ${e.getValue()?"text-red-800":"text-green-400"}`,children:e.getValue()?"Expiré":"Non expiré"}),header:()=>"Status"},{accessorFn:e=>e,id:"id",cell:e=>t.jsx("div",{className:"flex space-x-2",children:t.jsx(u,{href:`/students-answers/${e.getValue().id}`,className:" text-xs rounded-md bg-purple-950 py-1 px-2 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10",children:"Consulter les résulats"})}),header:()=>"Action"}],[r]),g=(r,e)=>{if(!e)return r;const s=e.toLowerCase().trim();return r.filter(l=>Object.values(l).some(a=>a&&typeof a=="string"&&a.toLowerCase().includes(s)))};export{D as default};
