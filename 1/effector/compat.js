'use strict';function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function r(r,n){var it;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(it=function(r){if(r){if("string"==typeof r)return e(r,void 0);var n={}.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(r,void 0):void 0}}(r))||n&&r&&"number"==typeof r.length){it&&(r=it);var t=0;return function(){return t>=r.length?{done:1}:{done:0,value:r[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(it=r[Symbol.iterator]()).next.bind(it)}function n(e){for(var r=void 0===e?{}:e,n=r.node,t=void 0===n?[]:n,a=r.parent,o=r.child,i=void 0===o?r.to||r.target:o,u=r.scope,f=void 0===u?{}:u,c=r.meta,s=void 0===c?{}:c,l=r.family,p=void 0===l?{type:'regular'}:l,d=ue(void 0===a?r.from||r.source:a),v=ue(p.links),m=ue(p.owners),h=[],g={},y=0;y<t.length;y++){var b=t[y];b&&(h.push(b),fe(b,g))}for(var k={id:E(),seq:h,next:ue(i),meta:s,scope:f,family:{type:p.type||'crosslink',links:v,owners:m},reg:g},w=0;w<v.length;w++)Y(v[w]).push(k);for(var x=0;x<m.length;x++)Z(m[x]).push(k);for(var S=0;S<d.length;S++)d[S].next.push(k);return k}function t(e,r){void 0===r&&(r='combine');var n=r+'(',t='',a=0;for(var o in e){var i=e[o];if(null!=i&&(n+=t,n+=b(i)?i.compositeName.fullName:i.toString()),25===(a+=1))break;t=', '}return n+')'}function a(e,r){var n,t,a,o=e;return r?(a=r.compositeName,0===e.length?(n=a.path,t=a.fullName):(n=a.path.concat([e]),t=0===a.fullName.length?e:a.fullName+'/'+e)):(n=0===e.length?[]:[e],t=e),{shortName:o,fullName:t,path:n}}function o(e,r){e.forEach(r)}function i(e,r,n,t){var a=we,o=null;if(r)for(o=we;o&&o.template!==r;)o=oe(o);Se(o);var i=e.create(n,t);return Se(a),i}function u(e,r){var t=function e(r){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];return we?i(e,a,r,t):e.create(r,t)};t.graphite=n({meta:Ge('event',t,r,e)}),t.create=function(e){var r=de?de.find(t):t;return qe(r,e),e},t.watch=_(Ue,t),t.map=function(e){var r,n;P(e)&&(r=e,n=e.name,e=e.fn);var a=u(Pe(t,n),r);return Je(t,a,'map',e),a},t.filter=function(e){return Ke(t,'filter',e.fn?e:e.fn,[U({fn:V})])},t.filterMap=function(e){return Ke(t,'filterMap',e,[H({fn:V}),W.defined()])},t.prepend=function(e){var r=u('* → '+t.shortName,{parent:oe(t)}),n=Te();return n&&X(r).seq.push(n.upward),Je(r,t,'prepend',e),Be(t,r),r};var a=Te();return a&&(X(t).meta.nativeTemplate=a),ze(t)}function f(e,t){function a(e,r){l.off(e),ae(l).set(e,Me(Le(e,l,'on',1,r)))}var o=J(e),i=J(e),u=$e('updates'),c=Te();o.after=[{type:'copy',to:i}],c&&c.plain.push(o,i);var s=o.id,l={subscribers:new Map,updates:u,defaultState:e,stateRef:o,getState:function(){var e,r=o;if(we){for(var n=we;n&&!n.reg[s];)n=oe(n);n&&(e=n)}return!e&&de&&de.reg[s]&&(e=de),e&&(r=e.reg[s]),K(r)},setState:function(e){var r;de&&(r=de.nodeMap[X(l).id]),r||(r=l),qe({target:r,params:e,defer:1})},reset:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];for(var t=0,a=r;t<a.length;t++){var o=a[t];l.on(o,(function(){return l.defaultState}))}return l},on:function(e,n){if(Array.isArray(e))for(var t,o=r(e);!(t=o()).done;)a(t.value,n);else a(e,n);return l},off:function(e){var r=ae(l).get(e);return r&&(r(),ae(l).delete(e)),l},map:function(e,r){var n,t,a;P(e)&&(n=e,t=e.name,r=e.firstState,e=e.fn);var i=l.getState(),u=Te();u?a=null:void 0!==i&&(a=e(i,r));var c=f(a,{name:Pe(l,t),config:n,strict:0}),s=Le(l,c,'map',0,e);return ee(c).before=[{type:'map',fn:e,from:o}],u&&(De(u.plain,o)||De(s.seq,u.loader)||s.seq.unshift(u.loader)),c},watch:function(e,r){if(!r||!b(e)){var n=Ue(l,e),t=Te();return t?t.watch.push({of:o,fn:e}):e(l.getState()),n}return j(r)||N('second argument should be a function'),e.watch((function(e){return r(l.getState(),e)}))}};return l.graphite=n({scope:{state:o},node:[W.defined(),G({store:o}),W.changed({store:i}),G({store:i})],child:u,meta:Ge('store',l,t)}),ve&&void 0===e&&N("current state can't be undefined, use null instead"),c&&(X(l).meta.nativeTemplate=c),ie(l,[u]),ze(l)}function c(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t,a,o;je(r[0],(function(e,n){o=e,r=n}));var i,u,f=r[r.length-1];if(j(f)?(a=r.slice(0,-1),t=f):a=r,1===a.length){var c=a[0];w(c)||(i=c,u=1)}return u||(i=a,t&&(t=Qe(t))),P(i)||N('shape should be an object'),Ve(Array.isArray(i),i,o,t)}function s(){var e={};return e.req=new Promise((function(r,n){e.rs=r,e.rj=n})),e.req.catch((function(){})),e}function l(e,r){var t=u(e,r),a=t.defaultConfig.handler||function(){return N("no handler used in "+t.getType())};X(t).meta.onCopy=['runner'],X(t).meta.unit=t.kind='effect',t.use=function(e){return j(e)||N('.use argument should be a function'),a=e,t};var o=t.finally=$e('finally'),i=t.done=o.filterMap({named:'done',fn:function(e){if('done'===e.status)return{params:e.params,result:e.result}}}),c=t.fail=o.filterMap({named:'fail',fn:function(e){if('fail'===e.status)return{params:e.params,error:e.error}}}),l=t.doneData=i.map({named:'doneData',fn:function(e){return e.result}}),p=t.failData=c.map({named:'failData',fn:function(e){return e.error}}),d=n({scope:{getHandler:t.use.getCurrent=function(){return a},finally:o},node:[B({fn:function(e,r,n){var t,a=e.params,o=e.req,i=r.finally,u=r.getHandler,f=n.page,c=n.forkPage,s=Xe({params:a,req:o,ok:1,anyway:i,page:f,forkPage:c}),l=Xe({params:a,req:o,ok:0,anyway:i,page:f,forkPage:c});try{t=u()(a)}catch(p){return void l(p)}P(t)&&j(t.then)?t.then(s,l):s(t)}})],meta:{op:'fx',fx:'runner',onCopy:['finally']}});X(t).scope.runner=d,X(t).seq.push(H({fn:function(e,r,n){return oe(n)?{params:e,req:{rs:function(){},rj:function(){}}}:e}}),B({fn:function(e,r,n){return qe({target:r.runner,params:e,defer:1,forkPage:n.forkPage}),e.params}})),t.create=function(e){var r=s(),n={params:e,req:r};if(de){var a=de;r.req.finally((function(){xe(a)})),qe(de.find(t),n)}else qe(t,n);return r.req};var v=t.inFlight=f(0,{named:'inFlight'}).on(t,(function(e){return e+1})).on(o,(function(e){return e-1})),m=t.pending=v.map({fn:function(e){return e>0},named:'pending'});return ie(t,[o,i,c,l,p,m,v,d]),t}function p(){for(var e,r,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];var i,s,l=Oe(a),p=l[0],d=p[0],v=p[1],m=p[2],h=l[1];void 0===v&&'source'in d&&('clock'in d&&null==d.clock&&N('config.clock should be defined'),v=d.clock,m=d.fn,s=d.greedy,e=d.target,r=d.name,i=d.sid,d=d.source),b(d)||(d=c(d)),void 0===v&&(v=d),r=h||r||d.shortName;var g=Te(),y=!!e;if(!e)if(w(d)&&w(v)){var k=m?m(K(ee(d)),K(ee(v))):K(ee(d));e=f(k,{name:r,sid:i})}else e=u(r),g&&X(e).seq.push(g.loader);var x=y&&b(e)&&X(e).meta.nativeTemplate;if(w(d)){var S=ee(d);ie(d,[We(v,e,{scope:{fn:m,targetTemplate:x},node:[g&&g.loader,!s&&R({priority:'sampler'}),T({store:S,to:m?'a':'stack'}),m&&H({fn:Q}),g&&y&&g.upward],meta:{op:'sample',sample:'store'}})]),g&&(De(g.plain,S)||De(g.closure,S)||g.closure.push(S))}else{var q=J(0),A=J(),P=J();g&&g.plain.push(q,A,P),ze(n({parent:d,node:[G({store:A}),T({from:'value',store:1,target:q})],family:{owners:[d,e,v],links:e},meta:{op:'sample',sample:'source'}})),ie(d,[We(v,e,{scope:{fn:m,targetTemplate:x},node:[g&&g.loader,G({store:P}),T({store:q}),U({fn:function(e){return e}}),!s&&R({priority:'sampler'}),T({store:A}),T({store:P,to:'a'}),m&&H({fn:L}),g&&y&&g.upward],meta:{op:'sample',sample:'clock'}})])}return e}function d(e){for(var r=Object.values(e),n={},t=0,a=r;t<a.length;t++)n[a[t].id]=[];for(var i=function(){var e=f[u],r=e.id,t=e.before,a=e.after;t&&o(t,(function(e){n[e.from.id].push(r)})),a&&o(a,(function(e){n[r].push(e.to.id)}))},u=0,f=r;u<f.length;u++)i();return n}function v(e){if(e instanceof Map){for(var n,t={},a=r(e);!(n=a()).done;){var o=n.value;t[o[0].sid]=o[1]}return t}return e}function m(e,r){function n(e){f[e]=1;for(var r=t[e],a=0;a<r.length;a++){var o=r[a];f[o]||u[o]||n(o)}f[e]=0,u[e]=1,i.push(e)}var t={};for(var a in e)t[a]=[].concat(new Set(e[a]));var i=[],u={},f={};for(var c in t)u[c]||f[c]||n(c);return i.reverse(),r&&r.size>0&&function(){for(var e,n=[],a=[].concat(r);e=a.shift();)n.push(e),o(t[e],(function(e){De(n,e)||De(a,e)||a.push(e)}));o(n,(function(e){Ie(i,e)}))}(),i}function h(e){var r=[];return function e(n){De(r,n)||(r.push(n),g(n,e))}(X(e)),r}function g(e,r){var n=e.family,t=e.meta;'fork'!==t.unit&&'forkInFlightCounter'!==t.unit&&(o(e.next,r),o(n.owners,r),o(n.links,r))}Object.defineProperty(exports,'__esModule',{value:1});for(var y='undefined'!=typeof Symbol&&Symbol.observable||'@@observable',b=function(e){return(j(e)||P(e))&&'kind'in e},k=function(e){return function(r){return b(r)&&r.kind===e}},w=k('store'),x=k('event'),S=k('effect'),q=k('domain'),A={__proto__:null,unit:b,store:w,event:x,effect:S,domain:q},N=function(e){throw Error(e)},P=function(e){return'object'==typeof e&&null!==e},j=function(e){return'function'==typeof e},O=function(e){P(e)||j(e)||N('expect first argument be an object')},C=function(){var e=0;return function(){return(++e).toString(36)}},D=C(),I=C(),E=C(),_=function(e,r){return e.bind(null,r)},F=function(e,r,n){return e.bind(null,r,n)},M=function(e,r,n){return{id:I(),type:e,data:n,hasRef:r}},z=0,R=function(e){var r=e.priority;return M('barrier',0,{barrierID:++z,priority:void 0===r?'barrier':r})},T=function(e){var r=e.from,n=void 0===r?'store':r,t=e.target,a=e.to;return M('mov','store'===n,{from:n,store:e.store,to:void 0===a?t?'store':'stack':a,target:t})},W={defined:function(){return M('check',0,{type:'defined'})},changed:function(e){return M('check',1,{type:'changed',store:e.store})}},H=F(M,'compute',0),U=F(M,'filter',0),B=F(M,'run',0),G=function(e){return T({from:'stack',target:e.store})},$={__proto__:null,barrier:R,mov:T,check:W,compute:H,filter:U,run:B,update:G},J=function(e){return{id:I(),current:e}},K=function(e){return e.current},L=function(e,r,n){return(0,r.fn)(e,n.a)},Q=function(e,r,n){return(0,r.fn)(n.a,e)},V=function(e,r){return(0,r.fn)(e)},X=function(e){return e.graphite||e},Y=function(e){return e.family.owners},Z=function(e){return e.family.links},ee=function(e){return e.stateRef},re=function(e){return e.config},ne=function(e){return e.ɔ},te=function(e){return e.value},ae=function(e){return e.subscribers},oe=function(e){return e.parent},ie=function(e,r){for(var n=X(e),t=0;t<r.length;t++){var a=X(r[t]);'domain'!==n.family.type&&(a.family.type='crosslink'),Y(a).push(n),Z(n).push(a)}},ue=function(e){void 0===e&&(e=[]);var r=[];if(Array.isArray(e))for(var n=0;n<e.length;n++)Array.isArray(e[n])?r.push.apply(r,e[n]):r.push(e[n]);else r.push(e);return r.map(X)},fe=function(e,r){var n,t=e.type,a=e.data;e.hasRef&&(r[(n=a.store).id]=n),'mov'===t&&'store'===a.to&&(r[(n=a.target).id]=n)},ce=null,se=function e(r,n){if(!r)return n;if(!n)return r;var t,a=r.v.type===n.v.type;return(a&&r.v.id>n.v.id||!a&&'sampler'===r.v.type)&&(t=r,r=n,n=t),t=e(r.r,n),r.r=r.l,r.l=t,r},le=[],pe=0;pe<5;)le.push({first:null,last:null,size:0}),pe+=1;var de,ve,me=function(){for(var e=0;e<5;e++){var r=le[e];if(r.size>0){if(2===e||3===e){r.size-=1;var n=ce.v;return ce=se(ce.l,ce.r),n}1===r.size&&(r.last=null);var t=r.first;return r.first=t.r,r.size-=1,t.v}}},he=function(e,r,n,t,a,o){return ge(0,{a:null,b:null,node:n,parent:t,value:a,page:r,forkPage:o},e)},ge=function(e,r,n,t){void 0===t&&(t=0);var a=ye(n),o=le[a],i={v:{idx:e,stack:r,type:n,id:t},l:0,r:0};2===a||3===a?ce=se(ce,i):(0===o.size?o.first=i:o.last.r=i,o.last=i),o.size+=1},ye=function(e){switch(e){case'child':return 0;case'pure':return 1;case'barrier':return 2;case'sampler':return 3;case'effect':return 4;default:return-1}},be=new Set,ke=0,we=null,xe=function(e){de=e},Se=function(e){we=e},qe=function(e,r,n){var t=we,a=null,o=de;if(e.target&&(r=e.params,n=e.defer,t='page'in e?e.page:t,e.stack&&(a=e.stack),o=e.forkPage||o,e=e.target),Array.isArray(e))for(var i=0;i<e.length;i++)he('pure',t,X(e[i]),a,r[i],o);else he('pure',t,X(e),a,r,o);n&&ke||function(){var e,r,n,t,a,o,i={alreadyStarted:ke,currentPage:we,forkPage:de};ke=1;e:for(;t=me();){var u=t.idx,f=t.stack,c=t.type;n=f.node,we=a=f.page,de=f.forkPage,o=(a||n).reg;var s={fail:0,scope:n.scope};e=r=0;for(var l=u;l<n.seq.length&&!e;l++){var p=n.seq[l],d=p.data;switch(p.type){case'barrier':var v=d.barrierID;a&&(v=a.fullID+"_"+v);var m=d.priority;if(l!==u||c!==m){be.has(v)||(be.add(v),ge(l,f,m,v));continue e}be.delete(v);break;case'mov':var h=void 0;switch(d.from){case'stack':h=te(f);break;case'a':h=f.a;break;case'b':h=f.b;break;case'value':h=d.store;break;case'store':o[d.store.id]||(f.page=a=null,o=n.reg),h=K(o[d.store.id])}switch(d.to){case'stack':f.value=h;break;case'a':f.a=h;break;case'b':f.b=h;break;case'store':o[d.target.id].current=h}break;case'check':switch(d.type){case'defined':r=void 0===te(f);break;case'changed':r=te(f)===K(o[d.store.id])}break;case'filter':r=!Ae(s,d,f);break;case'run':if(l!==u||'effect'!==c){ge(l,f,'effect');continue e}case'compute':f.value=Ae(s,d,f)}e=s.fail||r}if(!e)for(var g=0;g<n.next.length;g++)he('child',a,n.next[g],f,te(f),f.forkPage)}ke=i.alreadyStarted,we=i.currentPage,de=i.forkPage}()},Ae=function(e,r,n){var t=r.fn;try{return t(te(n),e.scope,n)}catch(a){console.error(a),e.fail=1}},Ne=function(e,r){return''+e.shortName+r},Pe=function(e,r){return null==r?Ne(e,' → *'):r},je=function(e,r){O(e),ne(e)&&r(re(e),ne(e))},Oe=function(e){var r;return je(e[0],(function(n,t){r=n,e=t})),[e,r]},Ce=function(e,r){for(var n in e)r(e[n],n)},De=function(e,r){return e.includes(r)},Ie=function(e,r){var n=e.indexOf(r);-1!==n&&e.splice(n,1)},Ee=function(e,r){Ie(e.next,r),Ie(Y(e),r),Ie(Z(e),r)},_e=function(e){return e.clear()},Fe=function(e,r){var n=(void 0===r?{}:r).deep,t=0;if(e.ownerSet&&e.ownerSet.delete(e),w(e))_e(ae(e));else if(q(e)){t=1;var a=e.history;_e(a.events),_e(a.effects),_e(a.stores),_e(a.domains)}(function e(r,n,t){var a;r.next.length=0,r.seq.length=0,r.scope=null;for(var o=Z(r);a=o.pop();)Ee(a,r),(n||t&&!r.meta.sample||'crosslink'===a.family.type)&&e(a,n,t);for(o=Y(r);a=o.pop();)Ee(a,r),t&&'crosslink'===a.family.type&&e(a,n,t)})(X(e),!!n,t)},Me=function(e){var r=F(Fe,e,void 0);return r.unsubscribe=r,r},ze=function(e){return Re&&ie(te(Re),[e]),e},Re=null,Te=function(){return Re&&Re.template},We=function(e,r,t){return ze(n({node:t.node,parent:e,child:r,scope:t.scope,meta:t.meta,family:{owners:[e,r],links:r}}))},He=function(e){var r;je(e,(function(n,t){r=n,e=t}));var t=e.from,a=e.to,o=e.meta,i=void 0===o?{op:'forward'}:o;return t&&a||N('from and to fields should be defined'),r&&(i.config=r),Me(ze(n({parent:t,child:a,meta:i,family:{}})))},Ue=function(e,r){if(j(r)||N('.watch argument should be a function'),de){var t=de.nodeMap[X(e).id];t&&(e=t)}return Me(ze(n({scope:{fn:r},node:[B({fn:V})],parent:e,meta:{op:'watch'},family:{owners:e}})))},Be=function(e,r,n){void 0===n&&(n='event'),oe(e)&&oe(e).hooks[n](r)},Ge=function(e,r,n,t){var o=function e(r,n){return P(r)&&(e(re(r),n),null!=r.name&&(P(r.name)?e(r.name,n):j(r.name)?n.handler=r.name:n.name=r.name),r.loc&&(n.loc=r.loc),(r.sid||null===r.sid)&&(n.sid=r.sid),r.handler&&(n.handler=r.handler),oe(r)&&(n.parent=oe(r)),'strict'in r&&(n.strict=r.strict),r.named&&(n.named=r.named),e(ne(r),n)),n}({name:t,config:n},{}),i=D(),u=o.parent,f=void 0===u?null:u,c=o.sid,s=void 0===c?null:c,l=o.strict,p=void 0===l?1:l,d=o.named,v=void 0===d?null:d,m=v||o.name||('domain'===e?'':i),h=a(m,f);return r.kind=e,r.id=i,r.sid=s,r.shortName=m,r.parent=f,r.compositeName=h,r.defaultConfig=o,r.thru=function(e){return e(r)},r.getType=function(){return h.fullName},'domain'!==e&&(r.subscribe=function(e){return O(e),r.watch(j(e)?e:function(r){e.next&&e.next(r)})},r[y]=function(){return r}),ve=p,{unit:e,name:m,sid:s,named:v}},$e=function(e){return u({named:e})},Je=function(e,r,n,t){return We(e,r,{scope:{fn:t},node:[H({fn:V})],meta:{op:n}})},Ke=function(e,r,n,t){var a;P(n)&&(a=n,n=n.fn);var o=u(Ne(e,' →? *'),a);return We(e,o,{scope:{fn:n},node:t,meta:{op:r}}),o},Le=function(e,r,n,t,a){var o=ee(r),i=[T({store:o,to:'a'}),H({fn:t?Q:L}),W.defined(),W.changed({store:o}),G({store:o})],u=Te();if(u&&(i.unshift(u.loader),i.push(u.upward),w(e))){var f=ee(e);De(u.plain,f)||(De(u.closure,f)||u.closure.push(f),o.before||(o.before=[]),o.before.push({type:'closure',of:f}))}return We(e,r,{scope:{fn:a},node:i,meta:{op:n}})},Qe=function(e){return function(r){return e.apply(void 0,r)}},Ve=function(e,r,n,a){var o=e?function(e){return e.slice()}:function(e){return Object.assign({},e)},i=e?[]:{},u=Te(),c=o(i),s=J(c),l=J(1);s.type=e?'list':'shape',u&&u.plain.push(s,l);var p=f(c,{name:n||t(r)}),d=[W.defined(),T({store:s,to:'a'}),U({fn:function(e,r,n){return e!==n.a[r.key]}}),T({store:l,to:'b'}),H({fn:function(e,r,n){var t=r.key;n.b&&(n.a=(0,r.clone)(n.a)),n.a[t]=e}}),T({from:'a',target:s}),T({from:'value',store:0,target:l}),R({priority:'barrier'}),T({from:'value',store:1,target:l}),T({store:s}),a&&H({fn:a}),W.changed({store:ee(p)})],v=s.before=[];return Ce(r,(function(e,r){if(w(e)){i[r]=e.defaultState,c[r]=e.getState();var n=We(e,p,{scope:{key:r,clone:o},node:d,meta:{op:'combine'}}),t=ee(e);v.push({type:'field',field:r,from:t}),u&&(De(u.plain,t)||n.seq.unshift(u.loader))}else c[r]=i[r]=e})),p.defaultShape=r,s.after=[a?{type:'map',to:ee(p),fn:a}:{type:'copy',to:ee(p)}],u||(p.defaultState=a?ee(p).current=a(c):i),p},Xe=function(e){var r=e.params,n=e.req,t=e.ok,a=e.anyway,o=e.page,i=e.forkPage;return function(e){return qe({target:[a,Ye],params:[t?{status:'done',params:r,result:e}:{status:'fail',params:r,error:e},{fn:t?n.rs:n.rj,value:e}],defer:1,page:o,forkPage:i})}},Ye=n({node:[B({fn:function(e){(0,e.fn)(e.value)}})],meta:{op:'fx',fx:'sidechain'}}),Ze=function(e,r,n){return e.watch((function(e){ie(n,[e]),r.add(e),e.ownerSet||(e.ownerSet=r),oe(e)||(e.parent=n)})),ie(n,[e]),function(n){return r.forEach(n),e.watch(n)}};exports.allSettled=function(e,r){var n=r.scope,t=r.params;if(!b(e))return Promise.reject(Error('first argument should be unit'));var a=s();a.parentFork=de;var o=n.graphite.scope.forkInFlightCounter;o.scope.defers.push(a);var i=[n.find(e)],u=[];return S(e)?u.push({params:t,req:{rs:function(e){a.value={status:'done',value:e}},rj:function(e){a.value={status:'fail',value:e}}}}):u.push(t),i.push(o),u.push(null),qe({target:i,params:u,forkPage:n}),a.req},exports.attach=function(e){var r,n;je(e,(function(r,t){n=r,e=t}));var t=e.source,a=e.effect,o=e.mapParams;t||o||N('either `mapParams` or `source` should be defined'),o||(o=function(e,r){return r});var i,u=l(e,n),f=X(u).scope.runner,s=function(e,r,n){var t,a=e.params,i=e.req,u=r.finally,f=r.effect,c=n.a,s=n.page,l=n.forkPage,p=Xe({params:a,req:i,ok:0,anyway:u,page:s,forkPage:l});try{t=o(a,c)}catch(d){return p(d)}qe({target:f,params:{params:t,req:{rs:Xe({params:a,req:i,ok:1,anyway:u,page:s,forkPage:l}),rj:p}},page:s,defer:1})};if(t){var p;w(t)?p=t:(p=c(t),ie(u,[p]));var d=T({from:'store',store:ee(p),to:'a'});i=[B({fn:function(e){return e}}),d,H({fn:s})],fe(d,f.reg)}else i=[B({fn:s})];return f.scope.effect=a,f.meta.onCopy.push('effect'),(r=f.seq).splice.apply(r,[0,1].concat(i)),Be(a,u,'effect'),u},exports.clearNode=Fe,exports.combine=c,exports.createApi=function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var t=Oe(r),a=t[0],o=a[0],i=a[1],f=t[1],c={};return Ce(i,(function(e,r){var n=c[r]=u(r,{parent:oe(o),config:f});o.on(n,e),Be(o,n)})),c},exports.createDomain=function e(r,t){var a=new Set,o=new Set,i=new Set,c=new Set,s=n({family:{type:'domain'}}),p={history:{domains:a,stores:o,effects:i,events:c},graphite:s};s.meta=Ge('domain',p,t,r);var d=['onEvent','onEffect','onStore','onDomain'].map($e),v=d[0],m=d[1],h=d[2],g=d[3];p.hooks={event:v,effect:m,store:h,domain:g},p.onCreateEvent=Ze(v,c,p),p.onCreateEffect=Ze(m,i,p),p.onCreateStore=Ze(h,o,p),p.onCreateDomain=Ze(g,a,p),p.createEvent=p.event=function(e,r){return v(u(e,{parent:p,config:r}))},p.createEffect=p.effect=function(e,r){return m(l(e,{parent:p,config:r}))},p.createDomain=p.domain=function(r,n){return e({name:r,parent:p,config:n})},p.createStore=p.store=function(e,r){return h(f(e,{parent:p,config:r}))},ze(p);var y=oe(p);return y&&(Ce(p.hooks,(function(e,r){He({from:e,to:y.hooks[r]})})),y.hooks.domain(p)),p},exports.createEffect=l,exports.createEvent=u,exports.createNode=n,exports.createStore=f,exports.createStoreObject=c,exports.fork=function(e,t){var a=void 0===t?{}:t,i=a.values,u=a.handlers;q(e)||N('first argument of fork should be domain');var f=!!i;i=v(i||{});var c=function(e){function r(e){e=X(e);var r=t.indexOf(e);return-1===r&&N('unit not found in forked scope'),c[r]}var t=h(e),a=new Map,i=H({fn:function(e,r,n){return xe(n.forkPage),e}}),u=n({scope:{defers:[],inFlight:0,fxID:0},node:[H({fn:function(e,r,n){n.parent?'finally'===n.parent.node.meta.named?r.inFlight-=1:(r.inFlight+=1,r.fxID+=1):r.fxID+=1}}),R({priority:'sampler'}),B({fn:function(e,r){var n=r.defers,t=r.fxID;r.inFlight>0||0===n.length||Promise.resolve().then((function(){r.fxID===t&&o(n.splice(0,n.length),(function(e){xe(e.parentFork),e.rs(e.value)}))}))}})],meta:{unit:'forkInFlightCounter'}}),f={},c=t.map((function(e){var r=e.next,t=e.meta,a=e.scope,o=e.family,i=n({node:e.seq.map((function(e){return{id:e.id,type:e.type,data:Object.assign({},e.data),hasRef:e.hasRef}})),child:[].concat(r),meta:Object.assign({forkOf:e},t),scope:Object.assign({},a)});return i.family={type:o.type,links:[].concat(o.links),owners:[].concat(o.owners)},f[e.id]=i,i})),s={};return o(c,(function(e){var n=e.reg,t=e.scope,o=e.meta,f=o.onCopy,c=o.op,l=o.unit;for(var p in n){var d=n[p],v=a.get(d);v||a.set(d,v={id:d.id,current:d.current}),s[p]=n[p]=v}if(f)for(var m=0;m<f.length;m++)t[f[m]]=r(t[f[m]]);switch(g(e,(function(e,n,t){t[n]=r(e)})),c||l){case'store':e.meta.wrapped=function(e){return{kind:'store',getState:function(){return e.reg[e.scope.state.id].current},updates:{watch:_(Ue,e)},graphite:e,family:e.family}}(e);break;case'event':e.seq.unshift(i);break;case'effect':e.next.push(u),e.seq.unshift(i);break;case'fx':t.finally.next.push(u),e.seq.unshift(i);break;case'watch':e.seq.unshift(i)}})),{cloneOf:e,nodeMap:f,clones:c,find:r,reg:s,getState:function(e){return r(e).meta.wrapped.getState()},graphite:n({family:{type:'domain',links:[u].concat(c)},meta:{unit:'fork'},scope:{forkInFlightCounter:u}})}}(e);if(f&&function(){for(var n,t=h(e),a={},u={},f=new Set,s=new Set,l=Object.getOwnPropertyNames(i),p=r(t);!(n=p()).done;){var v=n.value,g=v.reg,y=v.meta.nativeTemplate;for(var b in g)a[b]=g[b],y&&s.add(b)}for(var k,w=r(c.clones);!(k=w()).done;){var x=k.value,S=x.reg,q=x.meta,A=q.sid;if('store'===q.unit&&A&&De(l,A)){var N=x.scope.state;S[N.id].current=i[A],f.add(N)}for(var P in S)u[P]=S[P]}o(m(d(a),s),(function(e){(function(e,n){var t=0;if(n&&n.before&&!f.has(e))for(var a,o=r(n.before);!(a=o()).done;){var i=a.value;switch(i.type){case'map':e.current=i.fn(u[i.from.id].current);break;case'field':var c=u[i.from.id];t||(t=1,e.current=Array.isArray(e.current)?[].concat(e.current):Object.assign({},e.current)),e.current[i.field]=c.current}}if(n&&n.after)for(var s,l=e.current,p=r(n.after);!(s=p()).done;){var d=s.value,v=u[d.to.id];switch(d.type){case'copy':v.current=l;break;case'map':v.current=d.fn(l)}}})(u[e],a[e])}))}(),u){u=v(u);for(var s,l=Object.keys(u),p=function(){var e=s.value,r=e.scope,n=e.meta;n.sid&&De(l,n.sid)&&(r.runner.scope.getHandler=function(){return u[n.sid]})},y=r(c.clones);!(s=y()).done;)p()}return c},exports.forward=He,exports.fromObservable=function(e){O(e);var r=y in e?e[y]():e;r.subscribe||N('expect observable to have .subscribe');var n=u(),t=F(Fe,n,void 0);return r.subscribe({next:n,error:t,complete:t}),n},exports.guard=function(){for(var e={op:'guard'},r='guard',t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];var i=Oe(a),f=i[0],s=f[0],l=f[1],d=i[1];d&&(e.config=d,d.name&&(r=d.name)),l||(s=(l=s).source);var v=l,m=v.filter,h=v.greedy,g=v.name,y=void 0===g?r:g,k=l.target||u(y,e.config);return b(s)||(s=c(s)),b(m)?p({source:m,clock:s,target:ze(n({node:[U({fn:function(e){return e.guard}}),H({fn:function(e){return e.data}})],child:k,meta:e,family:{owners:[s,m,k],links:k}})),fn:function(e,r){return{guard:e,data:r}},greedy:h,name:y}):(j(m)||N('`filter` should be function or unit'),We(s,k,{scope:{fn:m},node:[U({fn:V})],meta:e})),k},exports.hydrate=function(e,n){var t=n.values;q(e)||N('first argument of hydrate should be domain'),P(t)||N('values property should be an object');var a=function(e){for(var n,t=e.flatGraphUnits,a=e.values,i=e.collectWatches,u=[],f=[],c={},s=new Set,l=Object.getOwnPropertyNames(a),p=r(t);!(n=p()).done;){var v=n.value,h=v.reg,g=v.meta,y=g.op,b=g.sid;if('store'===g.unit&&b&&De(l,b)){var k=v.scope.state;k.current=a[b],s.add(k)}if(i&&'watch'===y){var w=v.family.owners[0];'store'===w.meta.unit&&(u.push(v),f.push(w.scope.state))}for(var x in h)c[x]=h[x]}return o(m(d(c)),(function(e){(function(e){var n=0;if(e.before&&!s.has(e))for(var t,a=r(e.before);!(t=a()).done;){var o=t.value;switch(o.type){case'map':e.current=o.fn(o.from.current);break;case'field':var i=o.from;n||(n=1,e.current=Array.isArray(e.current)?[].concat(e.current):Object.assign({},e.current)),e.current[o.field]=i.current}}if(e.after)for(var u,f=e.current,c=r(e.after);!(u=c()).done;){var l=u.value,p=l.to;switch(l.type){case'copy':p.current=f;break;case'map':p.current=l.fn(f)}}})(c[e])})),{storeWatches:u,storeWatchesRefs:f}}({flatGraphUnits:h(e),values:v(t),collectWatches:1});qe({target:a.storeWatches,params:a.storeWatchesRefs.map((function(e){return e.current}))})},exports.is=A,exports.launch=qe,exports.merge=function(e){var r=u(t(e,'merge'));return He({from:e,to:r,meta:{op:'merge'}}),r},exports.restore=function(e,r,n){if(w(e))return e;if(b(e)){var t,a=oe(e);return x(e)&&(t=f(r,{parent:a,name:e.shortName,"ɔ":n}).on(e,(function(e,r){return r}))),S(e)&&(t=f(r,{parent:a,name:e.shortName,"ɔ":n}).on(e.done,(function(e,r){return r.result}))),a&&a.hooks.store(t),t}var o=Array.isArray(e)?[]:{};return Ce(e,(function(e,r){o[r]=w(e)?e:f(e,{name:r})})),o},exports.sample=p,exports.scopeBind=function(e){de||N('scopeBind cannot be called outside of forked .watch');var r=de.find(e),n=de;return function(e){qe({target:r,params:e,forkPage:n})}},exports.serialize=function(e,n){var t=e.clones,a=e.getState,o=e.cloneOf,i=void 0===n?{}:n,u=i.ignore,f=void 0===u?[]:u,c={};if(i.onlyChanges){f=[].concat(f);for(var s,l=r(o.history.stores);!(s=l()).done;){var p=s.value;a(p)===p.defaultState&&f.push(p)}}for(var d,v=r(t);!(d=v()).done;){var m=d.value,h=m.meta;if('store'===h.unit){var g=h.sid;g&&(c[g]=m.reg[m.scope.state.id].current)}}for(var y,b=r(f);!(y=b()).done;){var k=y.value.sid;k&&delete c[k]}return c},exports.setStoreName=function(e,r){var n=a(r,oe(e));if(e.shortName=r,e.compositeName){var t=e.compositeName;t.path=n.path,t.shortName=n.shortName,t.fullName=n.fullName}else e.compositeName=n},exports.split=function(){for(var e,r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];var a=Oe(n),o=a[0],i=o[0],u=o[1],f=a[1],c=!u;c&&(e=i.cases,u=i.match,i=i.source);var s={},l=w(i)?i.updates:i;if(Ce(u,(function(e,r){s[r]=l.filter({fn:e,config:f}),l=l.filter({fn:function(r){return!e(r)},config:f})})),s.__=l,!c)return s;Ce(s,(function(r,n){e[n]&&He({from:r,to:e[n]})}))},exports.step=$,exports.version="21.4.2",exports.withRegion=function(e,r){Re={parent:Re,value:e,template:X(e).meta.template||Re&&Re.template};try{return r()}finally{Re=oe(Re)}};
//# sourceMappingURL=compat.js.map