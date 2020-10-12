function e(e){effector.is.store(e)||l('expect useStore argument to be a store');let t=u.useRef(e),r=u.useState(e.getState())[1];return c(()=>(t.current===e&&r(e.getState()),t.current=e,e.updates.watch(r)),[e]),e.getState()}function t({store:t,keys:r,fn:n}){effector.is.store(t)||l('useStoreMap expects a store'),Array.isArray(r)||l('useStoreMap expects an array as keys'),'function'!=typeof n&&l('useStoreMap expects a function');let o=u.useMemo(()=>effector.createStore(n(t.getState(),r)).on(t,(e,t)=>n(t,r)),r),s=e(o);return c(()=>()=>{o.off(t),effector.clearNode(o,{deep:1})},r),s}function r(e,t){return t.displayName=e,t}function n(t,n){function o(t){let r=u.useRef(t),o=e(s);c(()=>(f({props:r.current,state:s.getState()}),()=>{p({props:r.current,state:s.getState()})}),[]);let a=n(t,o);return r.current=t,a}let s;effector.is.store(t)?s=t:'object'==typeof t&&null!==t?s=effector.combine(t):l('shape should be a store or object with stores');let a='Unknown';s&&s.shortName&&(a=s.shortName);let f=effector.createEvent(),p=effector.createEvent();return o.mounted=f,o.unmounted=p,r(a+".View",o)}function o(t,n){return r(`Connect(${n.displayName||n.name||'Unknown'})`,r=>u.createElement(n,Object.assign({},r,e(t))))}function s(e,t={}){let r=u.useRef(null);c(()=>(e.open(r.current),()=>e.close(r.current)),[e]),((e,t)=>{if(e===t)return 1;if('object'==typeof e&&null!==e&&'object'==typeof t&&null!==t){let r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return 0;for(let n=0;n<r.length;n++){let o=r[n];if(e[o]!==t[o])return 0}return 1}return 0})(r.current,t)||(r.current=t,e.set(t))}Object.defineProperty(exports,'__esModule',{value:1});var a,u=(a=require('react'))&&'object'==typeof a&&'default'in a?a.default:a,effector=require('effector');let c='undefined'!=typeof window?u.useLayoutEffect:u.useEffect,l=e=>{throw Error(e)};exports.connect=e=>t=>{let r=e;return'function'!=typeof e&&(r=t,t=e),o(t,r)},exports.createComponent=n,exports.createContextComponent=(t,n,o)=>r((t.shortName||'Unknown')+".ContextComponent",r=>{let s=u.useContext(n),a=e(t);return o(r,a,s)}),exports.createGate=(e="gate",t={})=>{function n(e){return s(n,e),null}let o;'object'==typeof e&&null!==e&&('defaultState'in e&&(t=e.defaultState),e.domain&&(o=e.domain),e=e.name||'gate');let a=effector.createStore(Boolean(0),{named:'status'}),u=effector.createStore(t,{named:'state'}),{set:c}=effector.createApi(u,{set:(e,t)=>t}),{open:l,close:f}=effector.createApi(a,{open:()=>Boolean(1),close:()=>Boolean(0)});if(n.open=l,n.close=f,n.status=a,n.state=u,n.set=c,u.reset(f),o){let{hooks:e}=o;effector.launch({target:[e.store,e.store,e.event,e.event,e.event],params:[a,u,l,f,c]})}return r("Gate:"+e,n)},exports.createReactState=o,exports.createStoreConsumer=e=>n(e,({children:e},t)=>e(t)),exports.useEvent=e=>e,exports.useGate=s,exports.useList=(e,n)=>{let o,s=[];'object'==typeof n&&null!==n?(n.keys&&(s=n.keys),o=n.fn):o=n,effector.is.store(e)||l('expect useList first argument to be a store'),'function'!=typeof o&&l("expect useList's renderItem to be a function"),Array.isArray(s)||l("expect useList's keys to be an array");let a=u.useMemo(()=>{let n=r((e.shortName||'Unknown')+".Item",({index:r,keys:n})=>{let o=t({store:e,keys:[r,...n],fn:(e,t)=>e[t[0]]});return f.current(o,r)});return u.memo(n)},[e]),c=t({store:e,keys:[e],fn:e=>e.length}),f=u.useRef(o);f.current=o;let p=u.useMemo(()=>s,s);return Array.from({length:c},(e,t)=>u.createElement(a,{index:t,key:t,keys:p}))},exports.useStore=e,exports.useStoreMap=t;
//# sourceMappingURL=effector-react.cjs.js.map
