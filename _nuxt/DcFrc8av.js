import{I as o,y as u,J as f,K as d,j as v,L as l,D as i,M as h,N as m}from"./D5mwOmjw.js";function U(t,a={}){const e=a.head||o();if(e)return e.ssr?e.push(t,a):p(e,t,a)}function p(t,a,e={}){const s=u(!1),n=u({});f(()=>{n.value=s.value?{}:d(a)});const r=t.push(n.value,e);return v(n,c=>{r.patch(c)}),l()&&(i(()=>{r.dispose()}),h(()=>{s.value=!0}),m(()=>{s.value=!1})),r}export{U as u};