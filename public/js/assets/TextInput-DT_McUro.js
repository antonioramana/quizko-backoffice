import{j as s,r as n}from"./app--oISFhqW.js";function l({message:r,className:t="",...e}){return r?s.jsx("p",{...e,className:"text-sm text-red-600 "+t,children:r}):null}const a=n.forwardRef(function({type:t="text",className:e="",isFocused:f=!1,...p},u){const o=u||n.useRef();return n.useEffect(()=>{f&&o.current.focus()},[]),s.jsx("input",{...p,type:t,className:"w-full p-2 text-md rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none "+e,ref:o})});export{l as I,a as T};
