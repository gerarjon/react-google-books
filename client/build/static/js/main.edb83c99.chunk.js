(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(64)},38:function(e,t,n){},56:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o),a=n(29),i=n.n(a),c=(n(38),n(11)),s=n(12),u=n(14),l=n(13),f=n(15),d=n(30),h=n(7),g=n(10),w=n.n(g),p={getBookList:function(e){return w.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return w.a.get("/api/books")},saveBook:function(e){return w.a.post("/api/books",e)},deleteBook:function(e){return w.a.delete("/api/books/"+e)}},v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",results:[],error:"",message:"Your book is saved"},n.handleInputChange=function(e){n.setState({search:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),p.getBookList(n.state.search).then(function(e){if("error"===e.data.status)throw new Error(e.data.items);n.setState({results:e.data.items,error:""})}).catch(function(e){return n.setState({error:e.message})})},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"allo")}}]),t}(o.Component),m=(n(56),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:v})))}}]),t}(o.Component)),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(m,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):b(e)})}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.edb83c99.chunk.js.map